import React, { useState } from 'react'
import Layout from 'component/Layout'
import styled from 'styled-components'
import ClassiFication from './Write/ClassiFication'
import Output from './Write/Output'
import TagsSection from './Write/TagsSection'
import NoteSection from './Write/NoteSection'
import NumberSection from './Write/NumberSection'
import { useRecords } from 'hook/useRecords'
import day from 'dayjs'
import { Alert } from 'pile-ui'
import { DatePicker } from 'antd-mobile-v2'
import Icon from 'component/Icon'
import px2vw from '.././lib/px2vw'
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const Handle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-top: ${px2vw(20)};
  justify-content: space-between;
  background-color: #fff;
  padding: ${px2vw(20)};
`
const Button = styled.button`
  background-color: #fff;
  font-size: ${px2vw(32)};
  padding: ${px2vw(20)};
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  margin-left: ${px2vw(10)};
  color: #333;
  border-radius: ${px2vw(6)};
  .icon {
    fill: #999;
    margin-left: ${px2vw(10)};
  }
`
type classification = '+' | '-'
const defaultData = {
  classification: '-' as classification,
  tagIds: [] as number[],
  note: '' as string,
  createdAt: day(new Date()).format('YYYY-MM-DD') as string,
}
const Write: React.FC = () => {
  const [selected, setSelected] = useState(defaultData)
  const [outputVal, setOutputVal] = useState<number>(0.0)
  const [createdAt, setCreatedAt] = useState(
    day(new Date()).format('YYYY-MM-DD')
  )
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }

  const { addRecounts } = useRecords()
  const submit = () => {
    if (addRecounts({ ...selected, outputVal: Number(outputVal), createdAt })) {
      Alert.show({
        title: '保存成功',
        btnText: '确定',
        type: 'success',
        callBack: function () {
          console.log('关闭了...')
        },
      })
      setSelected(defaultData)
      setOutputVal(0)
      setCreatedAt(day(new Date()).format('YYYY-MM-DD'))
    }
  }

  const [selectMonth, setSelectMonth] = useState<Date>(new Date())

  return (
    <MyLayout title="记一笔">
      <Output value={outputVal} onChange={setOutputVal} />
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      ></TagsSection>

      <Handle>
        <DatePicker
          mode="date"
          extra="Optional"
          onChange={(date) => setSelectMonth(date)}
        >
          <Button value={outputVal}>
            {defaultData.createdAt} <Icon name="xiajiantou" />
          </Button>
        </DatePicker>
        <ClassiFication
          value={selected.classification}
          onChange={(classification: '+' | '-') => onChange({ classification })}
        ></ClassiFication>
      </Handle>

      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <NumberSection value={outputVal} onChange={setOutputVal} onOk={submit} />
    </MyLayout>
  )
}
export default Write
