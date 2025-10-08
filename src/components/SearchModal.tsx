import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectCity } from "../store/cityReducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const SearchModal = () => {
  const city = useSelector(selectCity);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event: any, reason: string) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    if (city) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [city]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      disableEscapeKeyDown
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          City selection
        </Typography>
        <Box sx={{ m: 1 }} />
        <Search />
      </Box>
    </Modal>
  );
};
export default SearchModal;
