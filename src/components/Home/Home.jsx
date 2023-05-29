import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import NavBar from "./NavBar"
import Banner from "./Banner"
import Slide from "./Slide"
import MidSlide from "./MidSlide"

import { Box,styled } from "@mui/material"

import { getProducts } from "../../redux/actions/productActions"
import MidSection from "./MidSection"

const Component = styled(Box)`
    padding:8px;
    background:#F2F2F2;
`

const Home = ()=>{

    const {products} = useSelector(state => state.getProducts)
    //const {slideTwoProducts} = useSelector(state => state.slideTwoProducts);
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts());
        // dispatch(getSlideTwoProducts());
      }, [dispatch]);

    return(
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products = {products} title = "Deals of the Day" timer = {true}/>
                <MidSection/>
                <Slide products = {products} title = "Today's Fashion Deals" timer = {false}/>
                <Slide products = {products} title = "Best of Electronics" timer = {true}/>
                <Slide products = {products} title = "Top Offers" timer = {false}/>
            </Component>
        </>
    )
}

export default Home