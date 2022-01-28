import React, { useEffect, useState } from 'react';
import { Wrapper } from "./NumberSeaction/Wrapper";
import Caculate from "./NumberSeaction/Caculate"
type Props = {
  value:string;
  onChange: (value: string) => void
  onOk?:()=>void
}
const NumberSecation: React.FC<Props> = (props) => { 
  const [output, _setOutput] = useState(props.value)
  const setOutput = (output: string)=>{ 
    if (output.length >16) {
   output=output.slice(0, 16)
    } else if(output.length===0){
      output="0"
    }
    _setOutput(output)
  }
  const padWrapper = (e:React.MouseEvent) => { 
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) { return }
    if (text === "") { return }
     if (text === "保存") { 
       if (props.onOk) {
         props.onOk()
       }
        return
      }
    setOutput( Caculate(text, output)||"" )
  } 
   useEffect(() => {
    props.onChange(output)
  },[output])
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