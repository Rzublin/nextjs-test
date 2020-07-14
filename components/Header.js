import styled from "@emotion/styled";

const Header = () => {
  return <HeaderStyled>Header</HeaderStyled>;
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.primary};
`;

export default Header;
