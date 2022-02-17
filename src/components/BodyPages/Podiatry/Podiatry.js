import React from "react";
import { Container, Toolbar, Typography } from "@mui/material";
import Picture2 from "../../../image/picture2.png";

const Podiatry = () => {
  return (
    <div style={{backgroundColor: "#252525", height:"26rem", marginTop: "6rem"}}>
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
            Podiatry
          </Typography>
          <Typography
            sx={{
              width: "50rem",
              height: "19rem",
              paddingLeft: "2rem",
            paddingRight: "2rem",
              
              borderRadius: "0 0 20rem 20rem",
              backgroundColor: "#fff",
            }}
            variant="img"
            component="div"
          >
            <img src={Picture2} alt="" />
          </Typography>
          <Typography className='frontStyle' textAlign="right" variant="p" component="div" sx={{ color: "#ffffff" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore quae nihil reprehenderit maiores expedita ratione dolor, quos
            doloremque laudantium atque. Eaque voluptatibus corporis laboriosam,
            nesciunt harum deleniti recusandae cumque. Quidem dolore autem
            repudiandae accusamus distinctio. Fuga commodi aperiam neque.
          </Typography>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Podiatry;
