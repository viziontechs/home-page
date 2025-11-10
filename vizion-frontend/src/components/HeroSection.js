import React from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.text};
`;

const Button = styled.a`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 12px 25px;
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s;
  &:hover { transform: scale(1.1); }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <FaEye size={60} style={{marginBottom: "20px"}}/>
      <Title>Smart Glasses MVP</Title>
      <Subtitle>Seamless AR experience. Notifications, live data, and interactive HUD at your fingertips.</Subtitle>
      <Button href="#features">Explore Features</Button>
    </HeroContainer>
  );
}
