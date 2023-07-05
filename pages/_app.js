import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

import Context from '../context/context'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider enableSystem={false}>
       <Context>
      <Component {...pageProps} />
      </Context>
    </ThemeProvider>
  );
}

export default MyApp;
