import React from 'react'
import styled from 'styled-components'
import px2vw from '../../lib/px2vw'
const Wrapper = styled.section`
  background: #fff;
  padding-top: ${px2vw(30)};
  div {
    font-size: ${px2vw(58)};
    color: #fd9300;
    font-weight: 600;
    margin: 0 ${px2vw(10)};
    padding-bottom: ${px2vw(6)};
    padding: ${px2vw(14)};
    border-bottom: solid 1px #eee;
    span {
      font-size: ${px2vw(14)};
      color: #999;
      padding: ${px2vw(14)};
    }
  }
`

type Props = {
  value: number
  onChange: (value: number) => void
}

const Output: React.FC<Props> = (props) => {
  const displayValue = !props.value ? 0 : props.value
  return (
    <Wrapper>
      <div>
        <span>￥</span> {displayValue}
      </div>
    </Wrapper>
  )
}
export default Output
