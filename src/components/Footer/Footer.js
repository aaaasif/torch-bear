import {  Container, Typography } from '@mui/material';
import React from 'react';
import Image from "../../image/torch-bearer-logo.png";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const pages = [
  "Consulting",
  "Podiatry",
  "Nutrition",
  "Marketing",
  "Physiotherapy",
];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "transparent",
  boxShadow: "none"
}));

    
const Footer = () => {
    return (
      <div className="footer_bg">
        <Container sx={{paddingTop:"5rem"}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sm={12} lg={4} xl={4}>
                <Item >
                  <img
                    style={{ width: "20rem" }}
                    src={Image}
                    alt="img"
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={12} sm={12} lg={4} xl={4}>
                <Item>
                  <Typography className='frontStyle' textAlign="left" color="#ffffff">
                  Lorem sit amet, consectetur adipiscing <br/>
                  Ipsum sit amet, consectetur <br/>
                  Dolor adipiscing elit <br/>
                  Sed do eiusmod
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={12} sm={12} lg={4} xl={4}>
                <Item>
                  {pages.map((page) => (
                    <Typography textAlign="left" color="#ffffff">
                      {page}
                    </Typography>
                  ))}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
};

export default Footer;