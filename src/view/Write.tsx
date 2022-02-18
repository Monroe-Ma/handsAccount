import React, { useState } from 'react';
import Layout from 'component/Layout';
import styled from 'styled-components';
import ClassiFication from "./Write/ClassiFication"
import Output from "./Write/Output"
import TagsSection from "./Write/TagsSection"
import NoteSection from "./Write/NoteSection"
import NumberSection from './Write/NumberSection';
import { useRecords } from 'hook/useRecords';
import { Input } from 'component/Input';
import day from 'dayjs';
import { Alert } from 'pile-ui'
import { DatePicker } from 'antd-mobile-v2';
import Icon from 'component/Icon';


const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
const InputWrapper = styled.div`
  background-color: #fff;
  margin-top:10px;
  padding: 10px 0;
  display: flex;
  align-items:center;
  justify-content: space-between;
  .icon{
    margin-right: 20px;
  }
`;
type classification = "+" | "-";
const defaultData = {
  classification: "-" as classification,
  tagIds: [] as number[],
  note: "" as string,
 createdAt:  day(new Date()).format("YYYY-MM-DD") as string
}
const Write: React.FC = () => { 
   const [monthPicker, setMonthPicker] = useState<Date>()
  const [selected, setSelected] = useState(defaultData)
  const [outputVal, setOutputVal] = useState<number>(0.00)
  const [createdAt,setCreatedAt] = useState(day(new Date()).format("YYYY-MM-DD"))
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }

  const{ addRecounts }=useRecords()
  const submit = () => { 
    // console.log(selected, outputVal)
    if (addRecounts({ ...selected, outputVal: Number(outputVal), createdAt })) { 
    Alert.show({
      title: '保存成功',
      
      btnText:'确定',
     
      type:'success',
      callBack: function() {
        console.log('关闭了...');
      }
    })
      setSelected(defaultData);
      setOutputVal(0)
      setCreatedAt(day(new Date()).format("YYYY-MM-DD"))
    }
  }
  return (
    <MyLayout title="记一笔">
      <ClassiFication
        value={selected.classification}
        onChange={(classification: "+" | "-") => onChange( {classification} )}
      >
      </ClassiFication >
      <Output
        value={outputVal}
        onChange={setOutputVal}
      />
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({tagIds})}
      >
      </TagsSection >
          <DatePicker
          mode="date"
          extra="Optional"
          onChange={date => setMonthPicker(date )}
        >
         <InputWrapper >
      <Input label='' type='text' defaultValue={defaultData.createdAt}
          onChange={(e) => setCreatedAt(e.target.value)} />  <Icon name="ArrowRight" />
      </InputWrapper>
    </DatePicker>
     
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({note})}
      />
      <NumberSection
        value={outputVal}
        onChange={setOutputVal}
        onOk={submit}
      />
      </MyLayout>

  )
}
export default Write




