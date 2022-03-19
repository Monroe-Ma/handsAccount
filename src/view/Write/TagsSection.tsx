import useTag from 'hook/useTag'
import React from 'react'
import styled from 'styled-components'
import Icon from '../../component/Icon'
import px2vw from '../../lib/px2vw'
const Wrapper = styled.section`
  background: #fff;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: ${px2vw(508)};
    padding: ${px2vw(20)} 0;
    width: 100%;
    overflow: scroll;
    > li {
      width: 18%;
      padding: ${px2vw(20)};
      color: #666;
      font-size: ${px2vw(28)};
      line-height: ${px2vw(28)};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > p {
        margin-top: ${px2vw(24)};
      }
      > span {
        display: block;
        width: ${px2vw(56)};
        height: ${px2vw(56)};
        border-radius: ${px2vw(28)};
        background-color: #f6f6f6;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: ${px2vw(36)};
          height: ${px2vw(36)};
          fill: #ddd;
        }
        &.selected {
          background-color: #fff2e9;
          .icon {
            fill: #ff9400;
          }
        }
      }
    }
  }
`
type Props = {
  value: number[]
  onChange: (value: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTag()
  const selectedTagIds = props.value
  const onToggleTag = (tag: number) => {
    const index = selectedTagIds.indexOf(tag)
    if (index >= 0) {
      props.onChange(selectedTagIds.filter((t) => t !== tag))
    } else {
      props.onChange([...selectedTagIds, tag])
    }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
            className="oneLine"
          >
            <span
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
            >
              <Icon name={tag.iconName} />
            </span>
            <p>{tag.name}</p>
          </li>
        ))}
        <li onClick={addTag}>
          <span>
            <Icon name="add" />
          </span>{' '}
          <p>添加</p>
        </li>
      </ul>
    </Wrapper>
  )
}
export default TagsSection
