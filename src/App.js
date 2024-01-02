import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import "./App.css";
import Header from "./components/header/heder.jsx";
import SelectionOne from "./components/selectionOne/selectOne.jsx";
import SelectionTwo from "./components/selectionTwo/selectionTwo.jsx";
import Bank from "./components/bank_details/bank_details.jsx";
import AboutUs from "./components/about_us/about_us.jsx";
import Work from "./components/work_in_company/work_in_company.jsx";
import OurPartners from "./components/our_parners/our_parners.jsx";
import Adres from "./components/adres/adres.jsx";
import Support from "./components/support/support.jsx";
import Footer from "./components/fotter/footer.jsx";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <SelectionOne />
        <SelectionTwo />
        <Bank />
        <AboutUs />
        <Work />
        <OurPartners />
      </ThemeProvider>
      <Adres />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
