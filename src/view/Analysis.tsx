import React from 'react'
import Layout from 'component/Layout'
import ExpendEcharts from './ExpendEcharts'
import { useRecords } from 'hook/useRecords'
import useTag from 'hook/useTag'
import day from 'dayjs'
import IncomeEcharts from './IncomeEcharts'
import ContrastEcharts from './ContrastEcharts'

const Analysis = () => {
  const { records } = useRecords()
  const { getTagName } = useTag()
  const today = new Date()
  const currentMouth = day(today).format('YYYY-MM')
  // 本月支出占比
  const expend = records.filter((r) => r.classification === '-')
  const tmpSeriesDataArray = expend
    .filter(
      (r) => day(new Date(r.createdAt)).format('YYYY-MM') === currentMouth
    )
    .map((r) => {
      const tagname = r.tagIds.map((tagIds) => getTagName(tagIds))[0]
      const outputVal = r.outputVal
      return { outputVal: outputVal, tagname: tagname }
    })
  let expendCategoryObj: { [K: string]: number } = {}
  tmpSeriesDataArray.forEach((item) => {
    const { tagname, outputVal } = item
    if (!expendCategoryObj.hasOwnProperty(tagname)) {
      expendCategoryObj[tagname] = outputVal
    } else {
      expendCategoryObj[tagname] = outputVal + expendCategoryObj[tagname]
    }
  })
  const seriesDataArr = Object.keys(expendCategoryObj).map((item) => {
    const value = expendCategoryObj[item]
    return { value, name: item }
  })
  // 本月收入占比
  const income = records.filter((r) => r.classification === '+')
  const currentMouthInDate = income
    .filter(
      (r) => day(new Date(r.createdAt)).format('YYYY-MM') === currentMouth
    )
    .map((r) => {
      const tagname = r.tagIds.map((tagIds) => getTagName(tagIds))[0]
      const outputVal = r.outputVal
      return { outputVal: outputVal, tagname: tagname }
    })
  const incomeObj: { [K: string]: number } = {}
  currentMouthInDate.forEach((item) => {
    const { tagname, outputVal } = item
    if (!incomeObj.hasOwnProperty(tagname)) {
      incomeObj[tagname] = outputVal
    } else {
      incomeObj[tagname] = outputVal + incomeObj[tagname]
    }
  })
  const incomeSeriesData = Object.keys(incomeObj).map((item) => {
    const value = incomeObj[item]
    return { value, name: item }
  })

  // 月度收入支出对比
  // 已有的数据
  // console.log("已有的数据");
  // console.log(records.map(r => _.pick(r, "createdAt", "outputVal", "classification")));

  //要构建的数据结构：{ month: '2022/07', '支出': 43.3, '收入': 85.8 },
  let needObjArr = []
  // let needObj: { [K: string]: number | string } = {}
  //创建从当前月往前推11个月，共计12个月
  for (let i = 0; i < 12; i++) {
    const yearMonthStr = day(today).subtract(i, 'month').format('YYYY-MM')
    // console.log("yearMonthStr");
    // console.log(yearMonthStr);
    //找到所有数据里是当年年月的数据
    const needRecords = records.filter(
      (item) => item.createdAt.indexOf(yearMonthStr) !== -1
    )
    // console.log("---needRecords:",needRecords)
    //找到当前年月里支出的数据和总钱数
    const expendRecords = needRecords.filter(
      (item) => item.classification === '-'
    )
    let expendAllMoney: number = 0
    expendRecords.forEach((item) => {
      expendAllMoney = expendAllMoney + item.outputVal
    })
    //找到当前年月里收入的数据和总钱数
    const incomeRecords = needRecords.filter(
      (item) => item.classification === '+'
    )
    let incomeAllMoney: number = 0
    incomeRecords.forEach((item) => {
      incomeAllMoney = incomeAllMoney + item.outputVal
    })
    // console.log('expendRecords:', expendAllMoney, '---', 'incomeAllMoney', incomeAllMoney)

    needObjArr.push({
      month: yearMonthStr,
      支出: expendAllMoney,
      收入: incomeAllMoney,
    })
  }

  needObjArr.sort((a, b) => {
    if (a.month === b.month) return 0
    if (a.month > b.month) return 1
    if (a.month < b.month) return -1
    return 0
  })

  const expendOption = {
    title: {
      text: '本月支出占比分析',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 'bottom',
    },
    series: [
      {
        name: '支出占比',
        type: 'pie',
        radius: '50%',
        data: seriesDataArr,
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          emphasis: {},
          normal: {
            color: function (params: any) {
              //自定义颜色
              var colorList = [
                '#C31615',
                '#FC8452',
                '#3BA272',
                '#FAC957',
                '#fa8c16',
                '#7cb305',
                '#1890ff',
                '#5470c6',
                '#fc8452',
                '#fac858',
                '#c41d7f',
                '#73c0de',
                '#ea7ccc',
              ]
              return colorList[params.dataIndex]
            },
          },
        },
      },
    ],
  }
  const incomeOption = {
    title: {
      text: '本月收入占比分析',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 'bottom',
    },
    series: [
      {
        name: '收入占比',
        type: 'pie',
        radius: '50%',
        data: incomeSeriesData,
        itemStyle: {
          color: '#73c0de',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          emphasis: {},
          normal: {
            color: function (params: any) {
              //自定义颜色
              var colorList = [
                '#3BA272',
                '#FAC957',
                '#fa8c16',
                '#7cb305',
                '#9a60b4',
                '#13c2c2',
                '#1890ff',
                '#5470c6',
                '#fc8452',
                '#fac858',
                '#c41d7f',
                '#73c0de',
                '#ea7ccc',
              ]
              return colorList[params.dataIndex]
            },
          },
        },
      },
    ],
  }

  const contrastOption = {
    title: {
      text: '月度收入支出对比',
      left: 'center',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 'bottom',
    },
    tooltip: {},
    dataset: {
      dimensions: ['month', '支出', '收入'],
      source: needObjArr,
    },
    xAxis: {
      type: 'category',
    },
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: [0],
        filterMode: 'filter',
        start: 80,
      },
    ],
    yAxis: { type: 'value' },
    series: [{ type: 'bar' }, { type: 'bar' }],
  }
  return (
    <Layout title="统计分析">
      <ContrastEcharts option={contrastOption} />
      <ExpendEcharts option={expendOption} />
      <IncomeEcharts option={incomeOption} />
    </Layout>
  )
}
export default Analysis
