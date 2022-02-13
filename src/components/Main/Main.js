import * as React from "react";
import { Container, Toolbar, Typography } from "@mui/material";

import Consulting from '../../image/Picture1.png'
import Podiatry from "../../image/picture2.png";
import Nutrition from "../../image/picture3.png";
import Marketing from "../../image/picture4.png";
import Physiotherapy from "../../image/picture5.png";



const Main = () => {
  return (
    <div className="consulting_section">
      <Container maxWidth="xxl">
        <Toolbar sx={{ backgroundColor: "#ffffff" }} disableGutters>
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
            CONSULTING
          </Typography>

          <Typography variant="p" component="div" sx={{ color: "#000000" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore quae nihil reprehenderit maiores expedita ratione dolor, quos
            doloremque laudantium atque. Eaque voluptatibus corporis laboriosam,
            nesciunt harum deleniti recusandae cumque. Quidem dolore autem
            repudiandae accusamus distinctio. Fuga commodi aperiam neque.
          </Typography>

          <Typography
            sx={{
              border: "5px solid #252525",
              borderRadius: "0 0 300px 300px",
            }}
            variant="img"
            component="div"
          >
            <img src={Consulting} alt="" />
          </Typography>
        </Toolbar>

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
          <Typography variant="img" component="div">
            <img src={Podiatry} alt="" />
          </Typography>
          <Typography
            textAlign="right"
            variant="p"
            component="div"
            sx={{ color: "#000000" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore quae nihil reprehenderit maiores expedita ratione dolor, quos
            doloremque laudantium atque. Eaque voluptatibus corporis laboriosam,
            nesciunt harum deleniti recusandae cumque. Quidem dolore autem
            repudiandae accusamus distinctio. Fuga commodi aperiam neque.
          </Typography>
        </Toolbar>

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
            Nutrition
          </Typography>
          <Typography variant="p" component="div" sx={{ color: "#000000" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore quae nihil reprehenderit maiores expedita ratione dolor, quos
            doloremque laudantium atque. Eaque voluptatibus corporis laboriosam,
            nesciunt harum deleniti recusandae cumque. Quidem dolore autem
            repudiandae accusamus distinctio. Fuga commodi aperiam neque.
          </Typography>
          <Typography variant="img" component="div">
            <img src={Nutrition} alt="" />
          </Typography>
        </Toolbar>

        <Toolbar disableGutters>
          <Typography
            textAlign="right"
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#FF0000",
              textTransform: "uppercase",
              transform: `rotate(-90deg)`,
            }}
          >
            Marketing
          </Typography>
          <Typography variant="img" component="div">
            <img src={Marketing} alt="" />
          </Typography>
          <Typography
            textAlign="right"
            variant="p"
            component="div"
            sx={{ color: "#000000" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore quae nihil reprehenderit maiores expedita ratione dolor, quos
            doloremque laudantium atque. Eaque voluptatibus corporis laboriosam,
            nesciunt harum deleniti recusandae cumque. Quidem dolore autem
            repudiandae accusamus distinctio. Fuga commodi aperiam neque.
          </Typography>
        </Toolbar>
        <Toolbar disableGutters>
          <Typography
            textAlign="right"
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#FF0000",
              textTransform: "uppercase",
              transform: `rotate(-90deg)`,
            }}
          >
            Physiotherapy
          </Typography>

          <Typography variant="p" component="div" sx={{ color: "#000000" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore quae nihil reprehenderit maiores expedita ratione dolor, quos
            doloremque laudantium atque. Eaque voluptatibus corporis laboriosam,
            nesciunt harum deleniti recusandae cumque. Quidem dolore autem
            repudiandae accusamus distinctio. Fuga commodi aperiam neque.
          </Typography>
          <Typography variant="img" component="div">
            <img src={Physiotherapy} alt="" />
          </Typography>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Main;
