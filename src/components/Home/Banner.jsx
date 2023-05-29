import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import {styled} from '@mui/material'
import { bannerData } from '../../constants/data';

const Image = styled('img')(({theme})=>({
    width:'100%',
    height:280,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:180
    }
}))

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  <Carousel responsive={responsive}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </Carousel>;



const Banner = ()=>{
    return(
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay = {true}
            keyBoardControl ={true}
            slidesToSlide={1}
            autoPlaySpeed={4000}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map(data=>(
                <Image src={data.url} alt = "banner"/>
            ))}
        </Carousel>
    )
}

export default Banner