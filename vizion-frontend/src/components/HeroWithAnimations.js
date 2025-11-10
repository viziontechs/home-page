import React from "react";
import styled from "styled-components";
import FloatingGlasses from "./floatingGlasses";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at 50% 30%, #001018, #000);
  color: white;
  text-align: center;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  color: rgba(0,180,255,0.9);
  margin-top: 20px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #cceeff;
`;

export default function HeroWithAnimation() {
  return (
    <Container>
      <FloatingGlasses />
      <Title
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Smart Glasses MVP
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Floating in style — Vision Beyond Reality
      </Subtitle>
    </Container>
  );
}
