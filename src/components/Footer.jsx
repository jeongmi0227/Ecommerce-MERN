import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;

`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin:20x 0px;
;`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment = styled.img``;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>PARK.</Logo>
              <Desc>This is description part</Desc>
             <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />    
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <WhatsApp />
                </SocialIcon>
              </SocialContainer>
        </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem><Room style={{marginRight:'10px'}} />1385 Woodroffe Avenue, Ottawa, Ontario</ContactItem>
              <ContactItem><Phone style={{marginRight:'10px'}}/> +1 343 56 78</ContactItem>
              <ContactItem><MailOutline style={{marginRight:'10px'}}/>pjm@park.dev</ContactItem>
              <Payment />
          </Right>
    </Container>
  )
}

export default Footer