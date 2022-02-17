import { Container, Typography } from "@mui/material";
import React from "react";
// import "font-awesome/css/font-awesome.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BannerText = () => {
  return (
    <div className="banner_container">
      <Container sx={{ position: "absolute" }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            top: "200px",
          }}
        >
          <span className='frontStyle'> The most valuable player <br /> is the one who makes the <br /> </span>
          <span style={{ color: "#FF0000" }}>most players valuable.</span>
        </Typography>
      </Container>
      {/* <h1 className="top_text">
          <span><FontAwesomeIcon icon="fa-solid fa-quote-left" /></span>
        </h1> */}
    </div>
  );
};

export default BannerText;
