import React from 'react'
import Slide from './Slide'
import { Box,styled } from '@mui/material'

const LeftComponent = styled(Box)(({theme})=>({
    width:'80%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))

const Component = styled(Box)`
    display:flex;
`

const RightComponent = styled(Box)(({theme})=>({
    background:'#FFFFFF',
    padding:5,
    marginLeft:8,
    marginTop:10,
    width:'20%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))


const MidSlide = ({title,timer,products}) => {
    const adURL = "https://rukminim1.flixcart.com/fk-p-flap/464/708/image/72820aa53066a450.jpg?q=70"
  return (
    <Component >
        <LeftComponent>
            <Slide title = {title} timer = {timer} products={products}/>
        </LeftComponent>
        <RightComponent>
            <img src = {adURL} alt='ad' style={{width:"100%",height:"100%"}}/>
        </RightComponent>
    </Component>
  )
}

export default MidSlide