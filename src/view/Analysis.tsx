import React from "react";
import Layout from "component/Layout";
import ExpendEcharts from "./ExpendEcharts";
import { useRecords } from "hook/useRecords";
import useTag from "hook/useTag";
import day from "dayjs"
import IncomeEcharts from "./IncomeEcharts";
import ContrastEcharts from "./ContrastEcharts";
const Analysis = () => {
  const { records } = useRecords()
  const { getTagName } = useTag()
  const expend = records.filter(r => r.classification === "-")
  const today = new Date()
  const currentMouth = day(today).format("YYYY-MM")
  const tmpSeriesDataArray = expend.filter(r =>
   day(new Date(r.createdAt)).format("YYYY-MM") === currentMouth )
    .map(r => {
    const tagname = r.tagIds.map((tagIds) => getTagName(tagIds))[0]
    const outputVal = r.outputVal
    return { outputVal: outputVal, tagname: tagname }
  })
  let expendCategoryObj: { [K: string]: number } = {}
  tmpSeriesDataArray.forEach((item) => {
    const { tagname, outputVal } = item;
    if (!expendCategoryObj.hasOwnProperty(tagname)) {
      expendCategoryObj[tagname] = outputVal;
    } else {
      expendCategoryObj[tagname] = outputVal + expendCategoryObj[tagname];
    }
  });

  const seriesDataArr = Object.keys(expendCategoryObj).map((item) => {
    const value = expendCategoryObj[item];
    return { value, name: item }
  })
   
  const expendOption = {
    title: {
      text: '本月支出占比分析',
      left: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 'bottom'
    },
    series: [
      {
        name: '支出占比',
        type: 'pie',
        radius: '50%',
        data: seriesDataArr,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  const incomeOption = {
    title: {
      text: '本月收入占比分析',
      left: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 'bottom'
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
  };

 const  contrastOption = {
   legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['month', '支出', '收入', ],
    source: [
      { month: '2022/07', '支出': 43.3, '收入': 85.8 },
      { month: '2022/08', '支出': 83.1, '收入': 73.4},
      { month: '2022/09', '支出': 86.4, '收入': 65.2 },
      { month: '2022/10', '支出': 72.4, '收入': 53.9, }
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [ { type: 'bar' }, { type: 'bar' }]
};



  return (
    <Layout title="统计分析">
      <ExpendEcharts option={expendOption} />
      <IncomeEcharts option={incomeOption} />
       <ContrastEcharts option={contrastOption} />
    </Layout>
  );

};
export default Analysis;
