import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./Context/ProductContext.jsx";
import { MantineProvider, createTheme } from "@mantine/core";
import SliderProvider from "./Context/SliderContext.jsx";
import CartProvider from "./Context/CartContext.jsx";
import ContactProvider from "./Context/ContactContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOutProvider from "./Context/CheckOutContext.jsx";
import PayPalProvider from "./Context/PaypalContext.jsx";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <PayPalProvider>
    <CheckOutProvider>
      <ContactProvider>
        <SliderProvider>
          <CartProvider>
            <ProductProvider>
              <BrowserRouter>
                <MantineProvider theme={theme}>
                  <App />
                  <ToastContainer />
                </MantineProvider>
              </BrowserRouter>
            </ProductProvider>
          </CartProvider>
        </SliderProvider>
      </ContactProvider>
    </CheckOutProvider>
  </PayPalProvider>
);
