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
const Write: React.FC = () => { 
  const [selected, setSelected] = useState(defaultDate)
  const [outputVal, setOutputVal] = useState<string>("")
  const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
   }
  return (
    <MyLayout title="记一笔">
      <ClassiFication
        value={selected.classification}
        onChange={(classification: "+" | "-") => onChange( {classification} )}
      >
      </ClassiFication >
      <Output
        value={outputVal}
        onChange={setOutputVal}
       
      />
      <TagsSeaction
        value={selected.tagsId}
        onChange={(tagsId) => onChange({tagsId})}
      >
      </TagsSeaction >

      <NoteSeaction
        value={selected.note}
        onChange={(note) => onChange({note})}
      />

      <NumberSecation
        value={outputVal}
        onChange={setOutputVal}
      />
      </MyLayout>

  )
}
export default Write


