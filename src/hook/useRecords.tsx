import  { useState } from 'react';
import { useEffect } from 'react';
import useUpdate from './useUpdate';
import { Alert } from 'pile-ui';
import '@pile-ui/theme-default/lib/alert.min.css'
export type RecordsItem = {
  tagIds: number[];
  note: string;
  classification: "-" | "+";
  outputVal: number ;
  createdAt: string;
}
// export type NewRecordsItem = Omit<RecordsItem, "createdAt">
const useRecords = () => {
  const [records, setRecords] = useState < RecordsItem[]>([]);
  useEffect(() => {
      setRecords( JSON.parse(window.localStorage.getItem("records")||"[]"))
     },[]
  )
  useUpdate(()=>{
    window.localStorage.setItem("records",JSON.stringify(records))},[records]
  )
  const  addRecounts = (record: RecordsItem) => {
    // console.log(newrecord)
    if (record.outputVal <= 0) {
        Alert.show({
      title: '请输入金额',
      btnText:'确定',
      type:'warnning',
      callBack: function() {
        console.log('关闭了...');
      }
    });
        return false
      }
      if (record.tagIds.length=== 0) {
      Alert.show({
      title: '请选择标签',
      btnText:'确定',
      type:'warnning',
      callBack: function() {
      console.log('关闭了...');
      }
    });
        return false
      }
      // const record = {...newrecord,createdAt:(new Date()).toISOString()}
      setRecords([...records, record]);
      return true

   }
  return { addRecounts: addRecounts, records, }
  
  
 }

export { useRecords}