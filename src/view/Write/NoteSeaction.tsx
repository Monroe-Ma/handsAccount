import React, { useRef, useState } from 'react';
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
const NoteSeaction: React.FC<Props> = (props) => { 
  const [note] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const onBlur=() => {
    if (inputRef.current !== null) { 
      props.onChange(inputRef.current.value)
    }
  }
  return (
    <Wrapper>
      <Label >
        备注
        <input type="text" placeholder='在这里添加备注'
          ref={inputRef}
          onBlur={onBlur}
          defaultValue={note}
        />
      </Label>
    </Wrapper>
  )
}
export default NoteSeaction