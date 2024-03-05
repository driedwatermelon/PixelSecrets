// import React, { useState } from "react";
// import { Container, Box, Typography, Button } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// const FileUploadComponent = () => {
  
//   return (
//     <Container width="600px" textAlign="left">
//       <Box
//         sx={{
//           border: "2px dashed #bdbdbd",
//           borderRadius: "12px",
//           padding: "16px",
//           textAlign: "center",
//         }}
//       >
//         <Box>
//           {/* File Icon */}
//           <CloudUploadIcon sx={{ fontSize: "40px", color: "#bdbdbd" }} />
//         </Box>
//         <Box>
//           {/* Typography Text */}
//           <Typography variant="subtitle1" sx={{ marginTop: "8px" ,color:'grey'}}>
//             Drag & drop your file here
//           </Typography>
//           {/* Display file name if selected */}
//           {selectedFile && (
//             <Typography variant="subtitle1" sx={{ marginTop: "8px", color:'grey' }}>
//               {selectedFile.name}
//             </Typography>
//           )}
//         </Box>
//         <Box sx={{ mt: "auto" }}>
//           {/* Choose File Button */}
//           <input
//             accept="image/*"
//             style={{ display: "none" }}
//             id="file-upload-button"
//             type="file"
//             onChange={handleFileChange}
//           />
//           <label htmlFor="file-upload-button">
//             <Button
//               variant="contained"
//               component="span"
//               sx={{
//                 mt: "8px",
//                 backgroundColor: "#4caf50",
//                 backgroundColor: "#353535",
//                 "&:hover": {
//                   backgroundColor: "#141414", // Set the background color on hover
//                 },
//                 color: "white",
//               }}
//             >
//               Choose File
//             </Button>
//           </label>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default FileUploadComponent;
