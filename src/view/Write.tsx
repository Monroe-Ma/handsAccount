import React from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import TagsSeaction from "./Write/TagsSeaction"
import NoteSeaction from "./Write/NoteSeaction"
import NumberSeaction from "./Write/NumberSecation"
const WriteWrapper = styled.div`
flex-grow: 1;
`;
const Write = () => { 
  return (
 
    <Layout title="记一笔">
       
      <ClassiFication />
      <Output />
      <TagsSeaction />
      <NoteSeaction />
      <WriteWrapper>
      <NumberSeaction/>
        </WriteWrapper>
      </Layout>

  )
}
export default Write