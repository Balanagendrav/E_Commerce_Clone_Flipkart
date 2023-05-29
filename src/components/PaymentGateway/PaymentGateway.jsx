import React, { useState } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import { clearCart } from '../../redux/actions/cartAction';

const PaymentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const PaymentForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`;

const StyledButton = styled(Button)`
  background-color:#fb641b;
  color:#fff;
  padding:10px;
`
const StyledHeading = styled(Typography)`
  // background:#2874f0;
  color:#000;
  font-weight:600;
  width:99vw;
  text-align:center;
  padding:8px;
  margin-bottom:20px;
  margin-top:50px;
`

const PaymentGateway = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [orderId, setOrderId] = useState('');

const totalPrice = cartItems.reduce(
  (total, item) => total + item.price.cost +40,
  0
);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    const cardNumberRegex = /^\d{16}$/;
    const cardNameRegex = /^[a-zA-Z\s]+$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const cvvRegex = /^\d{3,4}$/;

    if (!cardNumberRegex.test(cardNumber)) {
      errors.cardNumber = 'Invalid card number';
    }

    if (!cardNameRegex.test(cardName)) {
      errors.cardName = 'Invalid card name';
    }

    if (!expiryDateRegex.test(expiryDate)) {
      errors.expiryDate = 'Invalid expiry date';
    }

    if (!cvvRegex.test(cvv)) {
      errors.cvv = 'Invalid CVV';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const generatedOrderId = generateOrderId();
      setOrderId(generatedOrderId);
      setIsPaymentSuccessful(true);

      dispatch(clearCart());

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  const generateOrderId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 8;
    let orderId = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters.charAt(randomIndex);
    }

    return orderId;
  };

  return (
    <PaymentContainer>
      <StyledHeading variant="p">Pay with Credit/Debit/ATM Card</StyledHeading>
      {isPaymentSuccessful ? (
        <Box>
          <Typography variant="h5" style={{color:'green'}}>Payment Successful</Typography>
          <Typography variant="body1">
            Your order has been placed successfully.
          </Typography>
          <Typography variant="body2" style={{color:'green',fontWeight:600}}>Order ID: {orderId}</Typography>
        </Box>
      ) : (
        <PaymentForm onSubmit={handleSubmit}>
          <StyledTextField
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
          />
          <StyledTextField
            label="Card Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            error={!!errors.cardName}
            helperText={errors.cardName}
          />
          <StyledTextField
            label="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            error={!!errors.expiryDate}
            helperText={errors.expiryDate}
          />
          <StyledTextField
            label="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            error={!!errors.cvv}
            helperText={errors.cvv}
          />
          <StyledButton type="submit" >
             Pay ₹{totalPrice.toFixed(2)}
          </StyledButton>
        </PaymentForm>
      )}
    </PaymentContainer>
  );
};


export default PaymentGateway;