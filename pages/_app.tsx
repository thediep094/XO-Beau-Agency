import { SSRProvider } from 'react-bootstrap';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
