import styled from "@emotion/styled";

const Footer = () => {
  return <FooterStyled>Footer</FooterStyled>;
};

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.primary};
`;

export default Footer;
