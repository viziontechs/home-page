import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: rgba(0,0,0,0.9);
  color: ${props => props.theme.colors.text};
`;

export default function Footer() {
  return (
    <FooterContainer>
      © 2025 Smart Glasses MVP. Built with React.
    </FooterContainer>
  );
}
