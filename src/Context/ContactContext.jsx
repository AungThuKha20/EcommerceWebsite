import { createContext, useState } from "react";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [isContact, setIsContact] = useState(false);

  const handleCloseContact = () => {
    setIsContact(!isContact);
  };

  return (
    <ContactContext.Provider
      value={{ isContact, setIsContact, handleCloseContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
