import React from "react";
import Layout from "component/Layout";
import AnalysisEcharts from "./AnalysisEcharts";
import { useRecords } from "hook/useRecords";
import useTag from "hook/useTag";

const Analysis = () => {
  const { records } = useRecords()
  const { getTagName } = useTag()
  const expend = records.filter(r => r.classification === "-")
  // console.log("expend");
  // console.log(expend);
  
  const tmpSeriesDataArray = expend.map(r => {
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
  
  console.log("seriesDataArr");
  console.log(seriesDataArr);

  
  const option = {
    title: {
      text: '支出占比分析',
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
  return (
    <Layout title="统计分析">
      <AnalysisEcharts option={option} />
    </Layout>
  );

};
export default Analysis;