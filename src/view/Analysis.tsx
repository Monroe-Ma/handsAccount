import React, { useState } from 'react';
import Layout from 'component/Layout';
import AnalysisEcharts from './AnalysisEcharts';

const Analysis = () => { 
  const [option] = useState({
    
      title: {
    text: '本月支出占比图',
    left: 'left'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    bottom:'bottom'
  },
  series: [
    {
      name: '支出占比',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
  })
  return (
    <Layout title="统计分析">
      <AnalysisEcharts option={option }/>
    </Layout>
  )

}
export default Analysis;