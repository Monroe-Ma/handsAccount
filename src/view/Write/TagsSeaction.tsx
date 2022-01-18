import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './../../component/Icon';

const Wrapper = styled.section`
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
  value: number[],
  onChange: (value: number[]) => void
}
const TagsSeaction: React.FC<Props> = (props) => {
  const [tags,setTag] = useState<string[]>(["餐饮","购物","交通","娱乐"," 日用"," 医疗","零食","房贷","文教"])
  const [selectedTag, setSelectedTag] = useState<string[]>([]) 
  const onToggleTag = (tag: string) => {
    const index = selectedTag.indexOf(tag)
    if (index >= 0) {
      setSelectedTag(selectedTag.filter(t => t !== tag))
    } else {
      setSelectedTag([...selectedTag,tag])
    }
  }
  // console.log(tags);
  // console.log(selectedTag);
  const addTag = () => {
    const tagName = window.prompt("请输入标签名称")
    if(tagName!==null){
      setTag([...tags, tagName])
      }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(
          tag =>
            <li key={tag}
              onClick={()=>onToggleTag(tag)}
            ><span
                className={selectedTag.indexOf(tag) >= 0 ? 'selected' : ""}
               ><Icon
                  name=""
            /></span>{tag}
            </li> 
        )}
        <li onClick={addTag}><span><Icon name="add"/></span>添加</li>
         </ul> 
    </Wrapper>
  )
}
export default TagsSeaction;