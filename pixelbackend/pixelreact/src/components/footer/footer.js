// components/Footer/FooterComponent.js

import React from "react";
import { Box, CssBaseline, Typography, Button } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import "./footer.css";

const FooterComponent = () => {
  return (
    <Box className="footer-container">
      <CssBaseline />
      <footer className="footer">
        <Typography variant="body1" className="footer-text">
          Built & developed by team PixelSecrets
        </Typography>
        <Button
          id="coffee-button"
          variant="contained"
          startIcon={<CoffeeIcon />}
          
        >
          Buy me a coffee
        </Button>
      </footer>
    </Box>
  );
};

export default FooterComponent;
