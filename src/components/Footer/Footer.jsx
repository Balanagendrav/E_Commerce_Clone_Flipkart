import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';

const FooterContainer = styled(Box)`
  background-color: #2E2252;
  padding: 20px;
  text-align: center;
`

const FooterText = styled(Typography)`
  color: #999999;
  font-size: 14px;
  margin-top: 15px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Developed by <Link href="https://www.linkedin.com/in/bala-nagendra-vanapalli-670b18a9" color="inherit" underline="always" target='_blank'>
            Bala Nagendra Vanapalli </Link>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
