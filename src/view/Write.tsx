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

}
const mml = {
  zmh: 4
}
const Write: React.FC = () => { 
  const [selected, setSelected] = useState(defaultDate)
  const [outputVal, setOutputVal] = useState(mml)
   const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
   }
  // console.log(setSelected)
  const numberSeactionOnChange = (obj:Partial<typeof outputVal>) => {
    console.log({ zmh :0 })
    return setOutputVal({
      ...outputVal,
      ...obj
    })

  }
  
  return (
    <MyLayout title="记一笔">
      <ClassiFication
        value={selected.classification}
        onChange={(classification: "+" | "-") => onChange({classification})}
      >
      </ClassiFication >
      <Output
        value={outputVal.zmh}
        onChange={(zmh) =>numberSeactionOnChange({ zmh })}
       
      />
      <TagsSeaction
        value={selected.tagsId}
        onChange={(tagsId) => onChange({tagsId})}
      >
      </TagsSeaction >

      <NoteSeaction />

      <NumberSecation
        value={outputVal.zmh}
        onChange={(zmh) =>numberSeactionOnChange({ zmh })}
      />


     
      </MyLayout>

  )
}
export default Write


