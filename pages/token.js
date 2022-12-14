import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";

function token() {
  const { authenticate, authError, Moralis, isAuthenticating, logout } =
    useMoralis();
  const [prod, setPro] = useState();

  async function auth() {
    await Moralis.start({
      apiKey:
        "McDEmVq9B72ws5fHMbZogGimAMC5hUZxDsnNmoFgJQMfb5wfL3aN5XVusMNQKhnf",
    });
    await logout();
  }

  return (
    <div>
      <button onClick={auth}>Auth</button>
    </div>
  );
}

export default token;
