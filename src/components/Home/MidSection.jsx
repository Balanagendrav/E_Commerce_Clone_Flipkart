import React from 'react';
import {Grid,styled } from '@mui/material'

import { imageURL } from '../../constants/data';

const Wrapper = styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`

const Image = styled('img')(({theme})=>({
    marginTop:5,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]: {
        objectFit:'cover',
        height:120
    },
}))


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
        <Wrapper container lg={12} md={12} sm={12} xs={12} >
            {imageURL.map((image)=>(
                <Grid item lg={4} md = {4} sm={12} xs ={12}>
                    <img src = {image} alt = "midsection-image" width='100%'/>
                </Grid>
            ))}
        </Wrapper>
        <Image src = {url} alt = "covid"/>
    </>
  )
}

export default MidSection