import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { tileData } from "./data";
import CarouselComp from "../Banner/CarouselComp";
import { currentProductDetails } from "../../App";
import './style.css'


import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  flex: {
    
  },
  card: {
    minWidth: 300,
    
  }
}));


export default function HomePage() {

  const classes = useStyles();
  const navigate = useNavigate();
  const context = useContext(currentProductDetails)
  const tileData = context.product
  return (
    <>
    <CarouselComp />
    <div className="homepage">
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {tileData.map((tile) => (
          <Card
            style={{margin: "1rem", width: "20%" }}
            className="box_list"
            onClick={() => {
              context.setState(tile)
              localStorage.setItem("currentProductDetails", JSON.stringify(tile))
              navigate("/product")
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={tile.title}
                height="250"
                image={"" + tile.image}
                title={tile.title}
                style={{ objectFit:"contain" , height: "15rem"}}
              />
              <CardContent style={{textAlign:"center"}}>
                <Typography style={{  fontWeight:"700"}} gutterBottom variant="body2" component="h2" noWrap>
                  {tile.title}
                </Typography>
                <Typography style={{ color:"green"}} gutterBottom variant="body2" component="h2" noWrap>
                   $ {tile.price}
                </Typography>
                <Typography style={{textTransform: "capitalize"}} gutterBottom variant="body2" component="h2" noWrap>
                  {tile.category}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        
      </div>
    </div>
    </>
  );
}
