import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import _ from "lodash";
import { searchCity, City } from "../api/cityApi";
import { useDispatch } from "react-redux";
import { setCity } from "../store/cityReducer";

const Search = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [cities, setCities] = React.useState<City[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<City | null>(null);

  const handleOnInputChange = _.debounce(
    (event: any, value: string, reason: string) => {
      if (value && reason === "input") {
        setName(value.trim());
      }
    },
    500,
  );

  const fetchCities = async (name: string) => {
    setIsLoading(true);
    const result = await searchCity({
      name,
      language: "en",
    });

    if (result?.results) {
      setCities(result.results);
    }
    setIsLoading(false);
  };

  const handleOnClick = React.useCallback(() => {
    if (value) {
      dispatch(setCity({ city: value }));
      //close modal
    }
  }, [value, dispatch]);

  React.useEffect(() => {
    if (name) {
      fetchCities(name);
    }
  }, [name]);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid size={10}>
        <Autocomplete
          onInputChange={handleOnInputChange}
          open={open}
          value={value}
          onChange={(event: any, newValue: City | null) => {
            setValue(newValue);
          }}
          onOpen={() => setOpen(true)}
          clearOnEscape
          onClose={() => setOpen(false)}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={handleGetOptionLabel}
          options={cities}
          loading={isLoading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for a city"
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {isLoading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid size={2}>
        <Button variant="contained" onClick={handleOnClick}>
          Select
        </Button>
      </Grid>
    </Grid>
  );
};

export const handleGetOptionLabel = (city: City) => {
  let label = `${city.name} - ${city.country}`;

  if (city?.admin1) {
    label += ` - ${city.admin1}`;
  }
  if (city?.admin2) {
    label += ` - ${city.admin2}`;
  }
  return label;
};

export default Search;
