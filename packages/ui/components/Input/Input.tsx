import React from "react";
import { BaseInput, Container, Label } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inline?: boolean;
}

export default function Input({
  id,
  inline = false,
  label,
  name,
  type = "text",
  ...props
}: InputProps) {
  return (
    <Container inline={inline}>
      {label && <Label htmlFor={id}>{label}</Label>}

      <BaseInput id={id} name={name} type={type} {...props} />
    </Container>
  );
}
