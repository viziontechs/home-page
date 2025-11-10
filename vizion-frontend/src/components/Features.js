import React from "react";
import styled from "styled-components";
import { FaCamera, FaBell, FaCog } from "react-icons/fa";

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 20px;
  background: rgba(20,20,20,0.8);
`;

const FeatureCard = styled.div`
  flex: 1 1 250px;
  margin: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 30px 20px;
  text-align: center;
  transition: all 0.2s;
  &:hover { transform: scale(1.05); }
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-top: 15px;
  margin-bottom: 10px;
`;

const FeatureDesc = styled.p`
  color: ${props => props.theme.colors.text};
`;

export default function Features() {
  return (
    <FeaturesContainer id="features">
      <FeatureCard>
        <FaCamera size={40} />
        <FeatureTitle>Live Feed</FeatureTitle>
        <FeatureDesc>Capture and display real-time video or AR overlays directly in your smart glasses.</FeatureDesc>
      </FeatureCard>
      <FeatureCard>
        <FaBell size={40} />
        <FeatureTitle>Notifications</FeatureTitle>
        <FeatureDesc>Get instant notifications for messages, navigation, and system alerts.</FeatureDesc>
      </FeatureCard>
      <FeatureCard>
        <FaCog size={40} />
        <FeatureTitle>Quick Actions</FeatureTitle>
        <FeatureDesc>Start, stop, or customize your AR experience with just a tap or gesture.</FeatureDesc>
      </FeatureCard>
    </FeaturesContainer>
  );
}
