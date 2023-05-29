// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import DetailView from "./components/Details/DetailView";

// import DataProvider from "./context/DataProvider";

// import { Box } from "@mui/material";

// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Cart from "./components/Cart/Cart";
// import PaymentGateway from "./components/PaymentGateway/PaymentGateway";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <DataProvider>
//       <BrowserRouter>
//         <Header/>
//         <Box style ={{marginTop:55}}>
//           <Routes>
//             <Route path = "/" element= {<Home/>}/>
//             <Route path = '/product/:id' element={<DetailView/>}/>
//             <Route path="/cart" element={<Cart/>}/>
//             <Route path = "/payment" element={<PaymentGateway/>}/>
//           </Routes>
//         </Box>
//         <Footer/>
//       </BrowserRouter>
//     </DataProvider>
//   );
// }

// export default App;


import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DetailView from './components/Details/DetailView';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import PaymentGateway from './components/PaymentGateway/PaymentGateway';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Box
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <Box style={{ flex: 1}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailView />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<PaymentGateway />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
