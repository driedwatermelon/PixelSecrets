import React, { useState } from "react";
import { MenuItem, InputAdornment, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from 'axios'; 
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  TextField,
  Container
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import DownloadComponent from "../components/body/downloadFile";

import "./steps.css";

const options = ["Least Significant Bit", "Discrete Cosine Transform Insertion", "Outside File"];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    text: "",
    file: null,
    algorithm: "",
    password: ""
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Update formData with the selected file
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
  };

  const handleAlgorithmChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      algorithm: event.target.value // Update algorithm value in form data
    }));
  };

  const handleInputChange = (name, value) => {
    if (name === "file") {
      // If the input is a file, update the formData with the file object and its name
      setFormData((prevFormData) => ({
        ...prevFormData,
        file: value,
        fileName: value ? value.name : null, // Add the file name to the formData
      }));
    } else if (name === "algorithm") {
      // If the input is an algorithm, directly update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        algorithm: value,
      }));
    } else {
      // For other inputs, directly update the formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const formDataToSend = new FormData(); // Create FormData object
  
      // Append form data to the FormData object
      formDataToSend.append('text', formData.text);
      formDataToSend.append('file', formData.file);
      formDataToSend.append('algorithm', formData.algorithm);
      formDataToSend.append('password', formData.password);
  
      const response = await axios.post("/decode/", formDataToSend);
      console.log('Response:', response);
      // Check for successful response status
      if (response.status === 200) {
        console.log('Form submitted successfully');
        // Handle success 
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle error 
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error 
    }
  };
  
  
  
  
  const handleDownload = async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Download button clicked");
    try {
      await handleSubmit(event); // Pass the event to handleSubmit
      console.log("Form submitted successfully and files downloaded");
    } catch (error) {
      console.error('Error downloading files:', error);
    }
  };
  
  const getStepContent = (step) => {
    switch (step) {
      

      case 0:
        return (
          <Box className="step1-file-upload">
           <Container width="600px" textAlign="left">
      <Box
        sx={{
          border: "2px dashed #bdbdbd",
          borderRadius: "12px",
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Box>
          {/* File Icon */}
          <CloudUploadIcon sx={{ fontSize: "40px", color: "#bdbdbd" }} />
        </Box>
        <Box>
          {/* Typography Text */}
          <Typography variant="subtitle1" sx={{ marginTop: "8px" ,color:'grey'}}>
            Drag & drop your file here
          </Typography>
          {/* Display file name if selected */}
          {selectedFile && (
            <Typography variant="subtitle1" sx={{ marginTop: "8px", color:'grey' }}>
              {selectedFile.name}
            </Typography>
          )}
        </Box>
        <Box sx={{ mt: "auto" }}>
          {/* Choose File Button */}
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="file-upload-button"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload-button">
            <Button
              variant="contained"
              component="span"
              sx={{
                mt: "8px",
                backgroundColor: "#4caf50",
                backgroundColor: "#353535",
                "&:hover": {
                  backgroundColor: "#141414", // Set the background color on hover
                },
                color: "white",
              }}
            >
              Choose File
            </Button>
          </label>
        </Box>
      </Box>
    </Container>
            <Box className="step1-button">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );
  

        

        case 1:
          return (
            <Box className="step2-dropdown">
             <TextField
        className="textField-custom"
        select
        fullWidth
        label="Select an algorithm"
        variant="outlined"
        value={formData.algorithm} // Bind value to algorithm value in form data
        onChange={handleAlgorithmChange} 
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
              <Box className="step2-button">
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </Button>
              </Box>
            </Box>
          );

case 2:
        return (
          <Box className="step3-password step0-text-area">
            <TextField
              className="textField-custom"
              label="Enter Password"
              type="password"
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              InputProps={{ style: { color: 'white' } }} 
              InputLabelProps={{
                style: { color: 'grey', fontSize: 14 }
              }}
            />
            <Box className="step1-button">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </Button>
            </Box>
          </Box>
        );


        case 3:
          return (
            <Box>
            <Container maxWidth="sm" sx={{marginBottom:3}}>
                  <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Typography variant="body1" textAlign="center" sx={{ marginBottom: 2, fontSize: 14 , color: 'grey'}}>
                      Your decoded text is here.
                    </Typography>
                  </Box>
                  <TextField
                    
                      className="textField-custom" 
                      multiline
                      rows={3}
                      fullWidth
                      variant="outlined"
                      value={formData.text}
                      // onChange={(e) => handleInputChange("text", e.target.value)}
                      InputProps={{ style: { color: 'white' } }} 
                      InputLabelProps={{
                      style: { color: 'grey', fontSize: 14  }
                   }}
                  />
              </Container>
              <Box className="step4-button">
                <Button
                  variant="contained"
                  onClick={handleDownload}
                  disabled={activeStep === steps.length}
                >
                  Download
                </Button>
              </Box>
            </Box>
          );

      default:
        return "Unknown step";
    }
  };

  const steps = [ "Upload Carrier Image","Select Algorithm","Enter Password",  "View Decoded Text"];

  return (
    <form method="post" enctype="multipart/form-data" 
    onSubmit={handleSubmit}>
      <Box className="vertical-stepper-container">
        <Typography variant="h6" className="stepper-title">
         Decode your message
        </Typography>
        {/* <Typography variant="body2" className="stepper-subtitle">
          Simple, fast, secure client-side file encryptiona
        </Typography> */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <Box className="step-label-box">{label}</Box>
              </StepLabel>
              {activeStep === index && (
                <Box className="step-content-box">
                  {getStepContent(index)}
                </Box>
              )}
            </Step>
          ))}
        </Stepper>
      </Box>
    </form>
  );
};

export default VerticalStepper;