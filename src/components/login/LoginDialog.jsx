import { useState, useEffect,useContext } from "react"
import { Dialog,Box,TextField, Typography, Button,styled} from "@mui/material"
//import { authenticateSignup,authenticateLogin } from "../service/api"
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword,getAuth,createUserWithEmailAndPassword,updateProfile,onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set,onValue } from "firebase/database";
import { DataContext } from "../../context/DataProvider"

const Component = styled(Box)`
    height:83vh;
    width:90vh;
`
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:28%;
    padding:45px 35px;
    & > p, & > h5{
        color:#fff;
        font-weight:600;
    }
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    text-align:center;
    padding:25px 35px;
    flex:1;
    & > div, & > button, & > p{
        margin-top:20px;
    }
`

const LoginButton = styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`

const RequestOtp = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%)
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const accountInitialValues = {
        login:{view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
        signup:{view:'signup',
        heading: "Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginInitialValues = {
    username:'',
    password:''
}




const LoginDialog = ({open,setOpen})=>{

    const [account,toggleAccount] = useState(accountInitialValues.login)
    const [signup,setSignup] = useState(signupInitialValues)
    const [login,setLogin] = useState(loginInitialValues)
    const [error,setError] = useState(false)

    // useEffect(() => {
    //     const auth = getAuth();
    //     const db = getDatabase();

    //     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
    //         if (authUser) {
    //             console.log(authUser)
    //             return onValue(ref(db, '/signup/' + authUser.uid), (snapshot) => {
    //                 const username = (snapshot.val());
    //                 console.log(username)
    //                 setAccount(username)
    //               }, {
    //                 onlyOnce: true
    //               })}else {
    //             // User is signed out
    //                     setAccount(null)
    //                 }
    //     });
    //     return () => unsubscribe(); // Cleanup function
    //   }, [])



    const {setAccount} = useContext(DataContext)

    const handleClose = ()=>{
        setOpen(false)
        toggleAccount(accountInitialValues.login)
        setError(false)
    }

    const toggleSignup = ()=>{
        toggleAccount(accountInitialValues.signup)
    }

    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
    }

    const signupUser = ()=>{
    
        createUserWithEmailAndPassword(auth, signup.email, signup.password)
        .then((userCredential) => {
            // User created successfully
            const user = userCredential.user;

            // Save user data to Firebase Realtime Database
            const db = getDatabase()
            set(ref(db, 'signup/' + user.uid), {
                firstname:signup.firstname,
                lastname:signup.lastname,
                username:signup.username,
                email:signup.email,
                password:signup.password,
                phone:signup.phone
            })
            .then(() => {
                console.log('User data saved successfully.');
                alert('Created Account Succesfully')
                handleClose()
                setAccount(signup.email)
            })
            .catch((error) => {
                console.log(error);
            });
        })
        .catch((error) => {
            // Error occurred during sign-up
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
 
        // let response = await authenticateSignup(signup)
        // if(!response) return;
        // handleClose()
        // setAccount(signup.firstname)
    }

    const onValueChange = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value})
    } 

    const loginUser = async()=>{
        signInWithEmailAndPassword(auth, login.username, login.password)
        .then((userCredential) => {
            //console.log(userCredential.user.email)
            //localStorage.setItem("token", userCredential._tokenResponse.idToken);
            setAccount(userCredential.user.email)
            handleClose()
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            setError(true)
        });
    }

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style = {{display:'flex',height:'100%'}}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login'?
                        (<Wrapper>
                            <TextField onChange={(e)=>onValueChange(e)} name = "username" variant="standard" label = "Enter Username"/>
                            
                            {error && <Error>Please Enter valid username or password</Error>}
                            
                            <TextField onChange={(e)=>onValueChange(e)} type="password" name = "password" variant="standard" label = "Enter Password"/>
                            <Text>By continuing, you agree to Flipkart's Terms 
                                of Use and Privacy Policy.
                            </Text>

                            <LoginButton onClick={(e)=> loginUser()}>Login</LoginButton>
                            
                            <Typography style={{textAlign:'center'}}>OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>)
                        :
                        (<Wrapper>
                            <TextField variant="standard" name = "firstname" label = "Enter Firstname" onChange={(e)=>onInputChange(e)}/>
                            <TextField variant="standard" name = "lastname" label = "Enter Lastname" onChange={(e)=>onInputChange(e)}/>
                            <TextField variant="standard" name = "username" label = "Enter Username" onChange={(e)=>onInputChange(e)}/>
                            <TextField variant="standard" name = "email" label = "Enter Email" onChange={(e)=>onInputChange(e)}/>
                            <TextField variant="standard" name = "password" label = "Enter Password" onChange={(e)=>onInputChange(e)}/>
                            <TextField variant="standard" name = "phone" label = "Enter Phone" onChange={(e)=>onInputChange(e)}/>
                            <LoginButton onClick={(e)=>signupUser()}>Continue</LoginButton>
                        </Wrapper>)
                    }
                </Box> 
            </Component>
        </Dialog>
    )
}

export default LoginDialog