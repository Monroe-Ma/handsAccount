import useTag  from 'hook/useTag';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../component/Icon';

const Wrapper = styled.section`
/* flex-grow: 1; */
  background: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
     display: flex;
    flex-wrap:Nowrap;
  >ul{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height:318px;
      padding: 10px 0;
      width: 100%;
    >li{
      width: 18%;
      padding:20px;
      color: #666;
      font-size: 14px;
      line-height: 22px;
      >p{
        margin-top: 6px;
      }
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
const TagsSection: React.FC<Props> = (props) => {
  const {tags,addTag }=useTag()
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
                /></span>
              <p>{tag.name}</p>
            </li> 
        )}
        <li onClick={addTag}><span><Icon name="add"/></span> <p>添加</p></li>
        </ul> 
    </Wrapper>
  )
}
export default TagsSection;