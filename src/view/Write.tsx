import React, { useState } from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import TagsSeaction from "./Write/TagsSeaction"
import NoteSeaction from "./Write/NoteSeaction"
import NumberSecation from './Write/NumberSecation';
import { useRecords } from 'hook/useRecound';
import { type } from 'os';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type classification = "+" | "-";
const defaultData = {
  classification: "-" as classification,
  tagIds: [] as number[],
  note: "" as string,
}
const Write: React.FC = () => { 
  const [selected, setSelected] = useState(defaultData)
  const [outputVal, setOutputVal] = useState<string>("")
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const { addRecounds }=useRecords()
  const submit = () => { 
    // console.log(selected, outputVal)
    if (addRecounds({ ...selected, outputVal: Number(outputVal) })) { 
      alert("保存成功");
      setSelected(defaultData);
      setOutputVal('')
    }
  }
  return (

    <MyLayout title="记一笔">
      { selected.note}
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
        value={selected.tagIds}
        onChange={(tagIds) => onChange({tagIds})}
      >
      </TagsSeaction >

      <NoteSeaction
        value={selected.note}
        onChange={(note) => onChange({note})}
      />

      <NumberSecation
        value={outputVal}
        onChange={setOutputVal}
        onOk={submit}
      />
      </MyLayout>

  )
}
export default Write


