import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
type Prop = {
  option :object
}
const AnalysisEcharts: React.FC<Prop> = (props) => {
  
  const {option } =props
  const container = useRef<HTMLDivElement>(null);
  const chart = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    if (container&&container.current) {
      container.current.style.width = `${width - 20}px`
      container.current.style.height = `${(width - 20) * 1.2}px`
      chart.current = echarts.init(container.current, "dart")
    }
    
  
  }, []);

  useEffect(() => { 
    if (chart && chart.current) { 
      chart.current.setOption(option)
      }
  }, [option])
  
  return (
    <div
      ref={container}
    />
  )
}
export default AnalysisEcharts;
