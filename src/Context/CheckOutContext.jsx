import { createContext, useState } from "react";

export const CheckOutContext = createContext();

const CheckOutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CheckOutContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </CheckOutContext.Provider>
  );
};

export default CheckOutProvider;
