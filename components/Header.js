import styled from "@emotion/styled";
import { rem } from "polished";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="logo">
          <img src="/vercel.svg" alt="Site Logo" className="img-responsive" />
          <span className="logo-text">Next Movies</span>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.primary};

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: ${rem(20)};
    }
  }
`;

export default Header;
