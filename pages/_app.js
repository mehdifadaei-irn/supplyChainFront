import "../styles/globals.css";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";
// import SupplyProvider from "./context/context";
import { SupplyProvider } from "../context/context";
// 2. Extend the theme to include custom colors, fonts, etc

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <SupplyProvider>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </SupplyProvider>
    </MoralisProvider>
  );
}

export default MyApp;
