import React, { useState } from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import TagsSeaction from "./Write/TagsSeaction"
import NoteSeaction from "./Write/NoteSeaction"
import NumberSecation from './Write/NumberSecation';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type classification = "+" | "-";
const defaultDate = {
  classification: "-" as classification,
  amount: 0,
  tagsId: [] as number[],
  note: "",
  zmh:0,
}
const Write: React.FC = () => { 
  const [selected, setSelected] = useState(defaultDate)
  const [outputVal, setOutputVal] = useState<number>(0)
   const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
   }
  // console.log(setSelected)
  const numberSeactionOnChange = (zmh: number) => {
    console.log(zmh)
   return setOutputVal(zmh)

  }
  
  return (
    <MyLayout title="记一笔">
      <ClassiFication
        value={selected.classification}
        onChange={(classification: "+" | "-") => onChange({classification})}
      >
      </ClassiFication >
      <Output
        value={selected.zmh}
        onChange={(zmh) => onChange({ zmh })}
        // zmh={outputVal.zmh}
      />
      <TagsSeaction
        value={selected.tagsId}
        onChange={(tagsId) => onChange({tagsId})}
      >
      </TagsSeaction >

      <NoteSeaction />

      <NumberSecation
        value={selected. amount}
        onChange={( zmh) => numberSeactionOnChange( zmh)}
      />


     
      </MyLayout>

  )
}
export default Write

