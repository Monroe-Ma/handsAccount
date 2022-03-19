import React from 'react'
import styled from 'styled-components'
import px2vw from '.././lib/px2vw'
const Label = styled.label`
  display: block;
  font-size: ${px2vw(34)};
  color: #333;
  font-weight: 600;
  background-color: #fff;
  padding: ${px2vw(40)} 0;
  > p {
    margin-left: ${px2vw(40)};
  }
  > input {
    background: none;
    border: none;
    font-weight: 400;
    margin: 0 ${px2vw(40)};
    margin-top: ${px2vw(24)};
    width: 80%;
  }
`
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props
  return (
    <Label>
      {props.label}
      <p>备注</p>
      <input className="oneLine" {...rest} />
    </Label>
  )
}
export { Input }
