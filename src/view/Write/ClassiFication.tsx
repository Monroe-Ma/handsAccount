import React, { useState } from 'react'
import styled from 'styled-components'
import px2vw from '../../lib/px2vw'
const Wrapper = styled.section`
  background: #fff;
  > ul {
    display: flex;
    justify-content: space-around;
    line-height: ${px2vw(40)};
    color: #999;
    > li {
      font-size: ${px2vw(32)};
      font-weight: 500;
      color: #999;
      position: relative;
      padding: ${px2vw(20)} ${px2vw(48)};
      background: #eeeeee;
      margin-right: ${px2vw(20)};
      border-radius: ${px2vw(40)};
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
