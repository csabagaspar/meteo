import Title from "../components/Title";
import Forcast from "../sections/Forcast";
import Container from "@mui/material/Container";
import Applicant from "../components/Applicant";
import SearchModal from "../components/SearchModal";

const MeteoPage = () => {
  return (
    <>
      <Container maxWidth="md">
        <Title />
        <Forcast />
        <Applicant />
      </Container>
      <SearchModal />
    </>
  );
};

export default MeteoPage;
