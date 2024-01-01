import { createContext, useState } from "react";

export const SliderContext = createContext();

const SliderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SliderContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SliderContext.Provider>
  );
};

export default SliderProvider;
