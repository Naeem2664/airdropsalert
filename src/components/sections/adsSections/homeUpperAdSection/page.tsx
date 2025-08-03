import React from "react";
import { Box, Typography } from "@mui/material";
const page = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "40px",
          marginBottom: "40px",
          width: "100%",
          height: "150px",
          bgcolor: "grey.900",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" color="white">
          Advertisement Space - Top Banner (728x90)
        </Typography>
      </Box>
    </>
  );
};

export default page;
