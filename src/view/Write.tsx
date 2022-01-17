import React from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
const Tags = styled.section`
  background: #fff;
 
`;

const Write = () => { 
  return (
  <Layout title = "记一笔">
      <ClassiFication />
      <Output/>
       
     
      <Tags>

      </Tags>



      
  </Layout>
  )
}
export default Write