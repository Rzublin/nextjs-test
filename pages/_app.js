// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h3>Header</h3>
      <Component {...pageProps} />
      <h3>Footer</h3>
    </>
  );
}

export default MyApp;
