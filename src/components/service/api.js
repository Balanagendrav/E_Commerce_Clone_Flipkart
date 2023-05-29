import axios from 'axios';


const URL = 'https://e-commerce-1153-default-rtdb.firebaseio.com'

export const authenticateSignup = async(data)=>{
    try {
        return await axios.post(`${URL}/signup.json`,data)
    } catch (error) {
        console.log('Error while calling signup api',error)
    }
}

export const authenticateLogin = async(data)=>{
    try {
        return await axios.post(`${URL}/login.json`,data)
    } catch (error) {
        console.log('Error while calling login api',error);
        return error.response

    }
}


// export const payUsingPaytm = ()=>{
//     try{
//         axios.post
//     }
//     catch(error){
//         console.log('Error while calling paytm api',error)
//     }
// }