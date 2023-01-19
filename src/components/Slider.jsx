import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:coral; 
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute
`
const Slider = () => {
  return (
    <Container>
          <Arrow>
              <ArrowLeftOutlined/>
          </Arrow>
          <Arrow>
              <ArrowRightOutlined/>
          </Arrow>
    </Container>
  )
}

export default Slider