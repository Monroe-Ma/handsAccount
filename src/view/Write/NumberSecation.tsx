import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
background: #f6f6f6;
 .pad{
   text-align: center;
  >button{
     background: #fff;
     border: none;
     width: 24%;
     padding: 18px 0;
     text-align: center;
     float: left;
     margin: 2px;
     border-radius:8px;
     font-weight: 600;
     font-size: 18px;
     color: #333;
      }
    .zero{
      width: 49%;
    }
    .save{
      height: 110px;
      color: #fff;
      background: #FF9400;
      float: right;
    }
   }
`;
type Props = {
  value:string;
  onChange: (value:string) => void
}
const NumberSecation: React.FC<Props> = ({ value, onChange }) => { 
  const [output, setOutput] = useState(value)
  const padWrapper = (e:React.MouseEvent) => { 
    const text = (e.target as HTMLButtonElement).textContent
    // console.log(text);
    if (text === null) { return }
    switch (text) { 
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        setOutput(output + text)
        break;
      case ".":
        if (text.indexOf(".")>= 0) { 
          setOutput(output + ".")
        }
        break;
      case "清空":
        if (text.length >1) {
          setOutput("")
        }
         break;
      case "删除":
        if (text.length === 1) { setOutput("0") }
        else { text.slice(0, -1) }
        break;
      case "OK":
         break;
    }
  } 
   useEffect(() => {
    onChange(output)
  }, [output])
  return (
    <Wrapper>
      <div className='pad clearfix' onClick={padWrapper} >
      <button >1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='save'>保存</button>
      <button className='zero'>0</button>
      <button>.</button>
      </div>
    </Wrapper>
  )
}
export default NumberSecation;