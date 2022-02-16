import React, { useState } from 'react';
import Layout from 'component/Layout';
import AnalysisEcharts from './AnalysisEcharts';

const Analysis = () => { 
  const [option, setOption] = useState({
      title: {
    text: '本月收支数据',
    left: 'left'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'right',
    bottom: '40%'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      right: '50%',
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