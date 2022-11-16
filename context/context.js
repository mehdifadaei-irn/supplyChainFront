import {createContext, useContext, useEffect, useState} from "react";
import {useMoralis} from "react-moralis";

export const SupplyContext = createContext();

export const SupplyProvider = ({children}) => {
  const [prodId, setProdId] = useState(false);


  const {isAuthenticated, authenticate, user, logout, Moralis, enableWeb3} =
    useMoralis();

  return (
    <SupplyContext.Provider
      value={{
        prodId,
        setProdId,
        isAuthenticated,
        authenticate,
        user,
        logout,
        Moralis,
        enableWeb3
      }}
    >
      {children}
    </SupplyContext.Provider>
  );
};
