import { createContext, useState } from "react";

export const PayPalContext = createContext();

const PayPalProvider = ({ children }) => {
  const [isOpenPP, setIsOpenPP] = useState(false);

  const handleClosePP = () => {
    setIsOpenPP(!isOpenPP);
  };

  return (
    <PayPalContext.Provider value={{ isOpenPP, setIsOpenPP, handleClosePP }}>
      {children}
    </PayPalContext.Provider>
  );
};

export default PayPalProvider;
