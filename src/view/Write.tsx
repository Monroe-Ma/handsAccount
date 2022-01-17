import React from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import Tags from "./Write/Tags"
import NoteSeaction from "./Write/NoteSeaction"
import NumberSeaction from "./Write/NumberSecation"
const Write = () => { 
  return (
  <Layout title = "记一笔">
      <ClassiFication />
      <Output />
      <Tags />
      <NoteSeaction />
    <NumberSeaction/>
        



      
  </Layout>
  )
}
export default Write