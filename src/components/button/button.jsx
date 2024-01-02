import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

// Создаем стили с помощью styled
const CustomButton = styled(Button)({
  width: "207px",
  height: "63px",
  borderRadius: "7px",
  background: "#10afab",
  fontFamily: "Gilroy-Medium, sans-serif",
  color: "#fff",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "none",
  columnGap: "12px",

  "&:hover": {
    background: "#12beb8",
  },
});

const MyButton = ({ onClick, children }) => {
  return (
    <CustomButton
      className="myButtonOverride" // Добавляем класс
      variant="contained"
      onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default MyButton;
