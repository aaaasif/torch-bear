import React from 'react';
import { Container, Toolbar, Typography } from "@mui/material";
import picture1 from "../../../image/Picture1.png";

const Consulting = () => {
    return (
      <div>
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "#FF0000",
                textTransform: "uppercase",
                transform: `rotate(-90deg)`,
              }}
            >
              Consulting
            </Typography>
            <Typography className='frontStyle' variant="p" component="div" sx={{ color: "#000000", fontSize: '18px' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              labore quae nihil reprehenderit maiores expedita ratione dolor,
              quos doloremque laudantium atque. Eaque voluptatibus corporis
              laboriosam, nesciunt harum deleniti recusandae cumque. Quidem
              dolore autem repudiandae accusamus distinctio. Fuga commodi
              aperiam neque.
            </Typography>
            <Typography
              sx={{
                width: "50rem",
                height: "19rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                borderRadius: "0 0 20rem 20rem",
                backgroundColor: "#252525",
              }}
              variant="img"
              component="div"
            >
              <img src={picture1} alt="" />
            </Typography>
          </Toolbar>
        </Container>
      </div>
    );
};

export default Consulting;