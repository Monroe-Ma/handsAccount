import { Input } from 'component/Input';
import React, {  ChangeEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  background:#f6f6f6 ;
  padding: 10px 0;
`;
type Props = {
  value:string
  onChange: ( value:string) =>void
}
const NoteSeaction: React.FC<Props> = (props) => { 
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement>=(e) => {
    props.onChange(e.target.value)
    }
  return (
    <Wrapper>
      <Input label=' ' placeholder="请输入备注" value={note} onChange={onChange}/>
    </Wrapper>
  )
}

export default NoteSeaction