import React, { useState } from 'react';
import  styled  from 'styled-components';
const Wrapper = styled.div`
  background:#f6f6f6 ;
`;
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
  value:string
  onChange: ( value:string) =>void
}
const NoteSeaction: React.FC<Props> = () => { 
  const [note,setNote] =useState("")
  return (
    <Wrapper>
      <Label >
        备注
        <input type="text"  placeholder='在这里添加备注' />
      </Label>
    </Wrapper>
  )
}
export default NoteSeaction