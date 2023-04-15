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
      img : "https://i.postimg.cc/KzkJD98z/Screenshot-2023-03-03-151000.png"
  },
  {
     img : "https://i.postimg.cc/fL9f9J8S/Screenshot-2023-03-03-151055.png"
  },
  {
    img : "https://i.postimg.cc/dVfCjJk2/Screenshot-2023-03-03-151147.png"
  },
  {
    img : "https://i.postimg.cc/44wm1XjY/Screenshot-2023-03-03-151223.png"
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
                interval={5000}
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