import React from 'react';
import styled from 'styled-components';
const Label = styled.label`
display: block;
  font-size: 17px;
  color: #333;
  font-weight: 600;
  padding: 10px 20px;
  >input{
    background: none;
    border: none;
    font-weight: 400;
    margin-left: 6px;
  }

`;
type Props = {
  label:string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {

  const { label,children,...rest} =props
  return <Label >
    {props.label}
    <input {...rest} />
      </Label>

}
export { Input }