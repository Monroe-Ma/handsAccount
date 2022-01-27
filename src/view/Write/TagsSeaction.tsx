import useTag  from 'hook/useTag';
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
  value: number[],
  onChange: (value: number[]) => void
}
const TagsSeaction: React.FC<Props> = (props) => {
  const {tags,setTag,addTag }=useTag()
  // const [selectedTag] = useState<string[]>(props.value) 
  const selectedTagIds = props.value;
 
  const onToggleTag = (tag: number) => {
    const index = selectedTagIds.indexOf(tag)
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tag))
    } else {
      props.onChange([...selectedTagIds,tag])
    }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(
          tag =>
            <li key={tag.id}
              onClick={() => onToggleTag(tag.id)}
              className='oneLine'
            ><span
                className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ""}
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