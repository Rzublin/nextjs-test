import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

const theme = {
  colors: {
    primary: "#ff0000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
