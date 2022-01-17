import React from 'react';
import Layout from 'component/Layout';
import styled  from 'styled-components';
const ClassiFication = styled.section`
  background: #fff;
  >ul{
     display: flex;
     justify-content: space-around;
     line-height: 20px;
     padding: 17px 0;
   }
`;
const Tags = styled.section`
  background: #fff;
 
`;
const Output = styled.section``
const Write = () => { 
  return (
  <Layout title = "记一笔">
      <ClassiFication>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </ClassiFication>
      <Output>
        <div><span>￥</span>0.00</div>  
      </Output>
      <Tags>

      </Tags>



      
  </Layout>
  )
}
export default Write