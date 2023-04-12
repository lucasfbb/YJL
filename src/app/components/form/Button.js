import React from "react";
import styled from "styled-components";
import "./LoginC.css"

const Botao = styled.button`
  display: block;
`;

const Button = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
