import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Category from "../Category/Category"
import "./style.css"

function Item(props)
{
    return (
        <Paper>
            <img className="image" src={props.item.img} />
        </Paper>
    )
}

var items = [
  {
      img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1a94e4906dbe1a5a.jpg?q=50"
  },
  {
     img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/80bc7056c646cab1.jpg?q=50"
  },
  {
    img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1ee1f1ae3fe91a6f.jpeg?q=50"
  },
  {
    img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/7aa9ebb51e2e9e9a.jpeg?q=50"
  },
  {
    img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/eae4266dd6a2371c.jpeg?q=50"
  },{
    img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/693ffb3d86ae9108.jpeg?q=50"
  },
  {
    img : "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/695c3f2c3e58d89b.jpg?q=50"
  },
  {
    img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/73fafc2bcb3c8467.jpg?q=50"
  }
]

const CarouselComp = () => {
  return (
   <>
     <Category />
    <div className='carousel_container'>
    <Carousel className='slider'
                autoPlay={true}
                stopAutoPlayOnHover={true}
                interval={3000}
                animation={"slide"}
                swipe={true}
                navButtonsAlwaysVisible={false}
                navButtonsProps={{ 
                    style: {
                        backgroundColor: "#8f34eb",
                        opacity: 0.4
                    }
                }}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            
        </Carousel>
    </div>
   </>
  )
}

export default CarouselComp