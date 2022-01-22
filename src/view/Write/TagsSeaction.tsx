import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './../../component/Icon';

const Wrapper = styled.section`
flex-grow: 1;
  background: #fff;
  >ul{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    >li{
      width: 20%;
      padding:0 20px;
      padding-top: 20px;
      color: #666;
      font-size: 14px;
      line-height: 22px;
      >span{
        display: block;
        width: 28px;
        height: 28px;
        border-radius: 14px;
        background-color:#f6f6f6;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
        width: 18px;
        height: 18px;
        fill:#ddd;
      }
        &.selected{
          background-color:#FFF2E9;
         .icon{
           fill:#FF9400;
          }
      }
    }
  }
}
`;
type Props = {
  value: string[],
  onChange: (value: string[]) => void
}
type tagDataType = {
   id: string,
   name: string
   iconName:string
}
const TagsSeaction: React.FC<Props> = (props) => {
  const [tags, setTag] = useState<Array<tagDataType>>([
    {id: "0",
      name: "餐饮",
      iconName:"eat"
    },
    {id: "1",
      name: "购物",
      iconName:"shopping"
    }, 
    {id: "2",
      name:"交通",
      iconName:"traffic"
    }, 
    {
      id: "3",
      name:"娱乐",
      iconName:"entertainment"
    }, 
    {
      id: "4",
      name:"日用",
      iconName:"daily"
    }, 
    {
      id: "5",
      name:" 医疗",
      iconName:"medical"
    }, 
    {
      id: "6",
      name:"零食",
      iconName:"snacks"
    }, 
    {
      id: "7",
      name:"房贷",
      iconName:"home"
    }, 
    {
      id: "8",
      name: "文教",
      iconName:"education"
    }, 
  ])
  const [selectedTag] = useState<string[]>([]) 
  const onToggleTag = (tag: string) => {
    const index = selectedTag.indexOf(tag)
    if (index >= 0) {
      props.onChange(selectedTag.filter(t => t !== tag))
    } else {
      props.onChange([...selectedTag,tag])
    }
  }
  // console.log(tags);
  // console.log(selectedTag);
  const addTag = () => {
    const tagName = window.prompt("请输入标签名称")
    if(tagName!==null){
      setTag([...tags,{id:new Date().getTime().toString() ,name:tagName , iconName:"other"}])
      }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(
          tag =>
            <li key={tag.id}
              onClick={()=>onToggleTag(tag.id)}
            ><span
                className={selectedTag.indexOf(tag.id) >= 0 ? 'selected' : ""}
               ><Icon name={tag.iconName }
            /></span>{tag.name}
            </li> 
        )}
        <li onClick={addTag}><span><Icon name="add"/></span>添加</li>
         </ul> 
    </Wrapper>
  )
}
export default TagsSeaction;