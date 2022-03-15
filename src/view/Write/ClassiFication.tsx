import React, { useState } from 'react'
import styled from 'styled-components'
const Wrapper = styled.section`
  background: #fff;
  > ul {
    display: flex;
    justify-content: space-around;
    line-height: 20px;
    color: #999;
    > li {
      font-size: 16px;
      font-weight: 500;
      color: #999;
      position: relative;
      padding: 10px 24px;
      background: #eeeeee;
      margin-right: 20px;
      border-radius: 40px;
      &.selected {
        color: #fff;
        background: #fd9300;
      }
    }
  }
`
type Props = {
  value: '+' | '-'
  onChange: (value: '+' | '-') => void
}
const ClassiFication: React.FC<Props> = (props) => {
  const ClassiFicationMap = { '+': '收入', '-': '支出' }
  const [ClassiFicationMapList] = useState<('+' | '-')[]>(['+', '-'])
  const ClassiFication = props.value
  return (
    <Wrapper>
      <ul>
        {ClassiFicationMapList.map((c, index) => (
          <li
            key={index}
            className={ClassiFication === c ? 'selected' : ''}
            onClick={() => props.onChange(c)}
          >
            {ClassiFicationMap[c]}{' '}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
export default ClassiFication
