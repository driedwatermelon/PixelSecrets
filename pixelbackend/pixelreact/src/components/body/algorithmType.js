import React from "react";
import { TextField, MenuItem, InputAdornment, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownTextField = () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <TextField
      className="textField-custom"
      select
      fullWidth
      label="Select an option"
      variant="outlined"
      sx={{
        "& .MuiInputBase-input": {
          color: "#7B7A7A", // Set the text color
        },
        "& .MuiInputLabel-root": {
          color: "#4E4E4E", // Set the hint color
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "#7B7A7A", // Set the underline color
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "#1F1F1F", // Set the underline color on hover
        },
      }}
      SelectProps={{
        IconComponent: () => <React.Fragment />,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
             <IconButton style={{ color: '#1976D2' }}>
              <ArrowDropDownIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropdownTextField;
