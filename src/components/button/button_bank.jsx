import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

// Создаем стили с помощью styled
const CustomButton1 = styled(Button)({
  color: "#10AFAB",
  fontFamily: "Gilroy-Medium, sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  padding: "22px 53px",
  borderRadius: "7px",
  background: "#FFF",
  boxShadow: "0px 8px 17px 0px rgba(16, 175, 171, 0.24)",

  "&:hover": {
    background: "#cecece",
  },
});

const MyButton1 = ({ onClick, children }) => {
  return (
    <CustomButton1
      className="myButtonOverride" // Добавляем класс
      variant="contained"
      onClick={onClick}>
      {children}
    </CustomButton1>
  );
};

export default MyButton1;
