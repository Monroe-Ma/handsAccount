import React from 'react';
import styled  from 'styled-components';
import Icon from './Icon';
const Wrapper = styled.div`
display: flex;
background: #fff;
justify-content: space-between;
color: #333;
font-size: 18px;
font-weight: 600;
padding: 11px 15px;
 .icon{
   height: 22px;
   width: 22px;
   color: #333;
 }
`;
type Props = {
  title: string,
}
const TopBar : React.FC<Props> = (props: any) => { 
  const { title } = props;
  return (
    <Wrapper>
    <Icon name="ArrowLeft" />
      <p>{title}</p>
     <Icon name="" />
    </Wrapper>
  )

}
export default TopBar;

