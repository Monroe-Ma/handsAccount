import React, { useState } from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import TagsSeaction from "./Write/TagsSeaction"
import NoteSeaction from "./Write/NoteSeaction"
import NumberSeaction from "./Write/NumberSecation"

type classification = "+" | "-";
const defaultDate = {
  classification: "-" as classification,
  amount: 0,
  tagsId: [] as number[],
  note: "",
}
const Write: React.FC = () => { 
  const [selected, setSelected] = useState(defaultDate)
   const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <Layout title="记一笔">
      <ClassiFication
        value={selected.classification}
        onChange={(classification: "+" | "-") => onChange({classification})}
      >
      </ClassiFication >

      <Output />

      <TagsSeaction
        value={selected.tagsId}
        onChange={(tagsId) => onChange({tagsId})}
      >
      </TagsSeaction >
      

      <NoteSeaction />
      <NumberSeaction/>
      </Layout>

  )
}
export default Write