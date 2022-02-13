import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const serviceItem = [
  "CONSULTING >",
  "PODIATRY >",
  "NUTRITION >",
  "MARKETING >",
  "PHYSIOTHERAPY >",
];
const Services = () => {
  return (
    <div style={{ backgroundColor: "#252525", color: "#FFFFFF" }}>
      <Container>
        <Box>
          <Typography
            variant="h5"
            sx={{ paddingTop: 5, textTransform: "uppercase" }}
          >
            Service
          </Typography>
          <Typography sx={{ paddingTop: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            quae? At molestias eos voluptates ipsa quaerat. Consequuntur error
            harum provident incidunt velit ea, nostrum dolor quod officiis
            doloremque magnam, voluptate et animi sit voluptatum architecto vero
            maiores sapiente quidem.
          </Typography>
        </Box>

        <Box
          sx={{
            paddingBottom: 8,
            color: "#FF0000",
            textTransform: "uppercase",
            marginTop: 5,
          }}
        >
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            {serviceItem.map((page) => (
              <Typography
                key={page}
                sx={{
                  mt:2,
                  mr: 5,
                  whiteSpace: "nowrap",
                  color: "#FF0000",
                  display: "inline-block",
                  fontSize: "1.2rem",
                  textTransform: "uppercase"
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          {/* <Typography sx={{display: "inline-block", marginRight: 4,}}>Consulting </Typography>
          <Typography sx={{display: "inline-block", marginRight: 4,}}>Podiatry</Typography>
          <Typography sx={{display: "inline-block", marginRight: 4,}}>Nutrition</Typography>
          <Typography sx={{display: "inline-block", marginRight: 4,}}>Marketing</Typography>
          <Typography sx={{display: "inline-block", marginRight: 4,}}>Physiotherapy</Typography> */}
        </Box>
      </Container>
    </div>
  );
};

export default Services;
