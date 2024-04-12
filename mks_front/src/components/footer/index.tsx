"use client"
import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: auto;
  padding: 0.5rem;
  background-color: #EEEEEE;
`

export const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
`

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => (
  <FooterContainer>
    <CopyrightText>
      MKS sistemas &copy; Todos os direitos reservados
    </CopyrightText>
  </FooterContainer>
);
