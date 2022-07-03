import { SSRProvider } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </SSRProvider>
  );
}

export default MyApp;
