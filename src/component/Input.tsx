import React from 'react';
import styled from 'styled-components';
const Label = styled.label`
display: block;
  font-size: 17px;
  color: #333;
  font-weight: 600;
  background-color: #fff;
  padding: 10px 0;
  >p{
    margin-left: 20px;
  }
  >input{
    background: none;
    border: none;
    font-weight: 400;
    margin: 0 20px ;
    margin-top: 10px;
    width: 80%;
  }

`;
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {

  const { label,children,...rest} =props
  return <Label >
    {props.label}
    <p>备注</p>
    <input className='oneLine' {...rest} />
      </Label>

}
export { Input }