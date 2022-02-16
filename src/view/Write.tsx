import React, { useState } from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import TagsSeaction from "./Write/TagsSeaction"
import NoteSeaction from "./Write/NoteSeaction"
import NumberSecation from './Write/NumberSecation';
import { useRecords } from 'hook/useRecound';
import { Input } from 'component/Input';
import day from 'dayjs';
const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
const InputWrapper = styled.div`
  background-color: #fff;
  margin-top:10px;
  padding: 10px 0;
`;
type classification = "+" | "-";
const defaultData = {
  classification: "-" as classification,
  tagIds: [] as number[],
  note: "" as string,
 createdAt:  day(new Date()).format("YYYY-MM-DD") as string
}
const Write: React.FC = () => { 
  const [selected, setSelected] = useState(defaultData)
  const [outputVal, setOutputVal] = useState<number>(0.00)
  const [createdAt,setCreatedAt] = useState(day(new Date()).format("YYYY-MM-DD"))
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const { addRecounds }=useRecords()
  const submit = () => { 
    // console.log(selected, outputVal)
    if (addRecounds({ ...selected, outputVal: Number(outputVal),createdAt })) { 
      alert("保存成功");
      setSelected(defaultData);
      setOutputVal(0)
    }
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
        value={selected.tagIds}
        onChange={(tagIds) => onChange({tagIds})}
      >
      </TagsSeaction >
      <InputWrapper >
      <Input label='' type='date' defaultValue={defaultData.createdAt}
          onChange={(e) => setCreatedAt(e.target.value)} />  
      </InputWrapper>
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




