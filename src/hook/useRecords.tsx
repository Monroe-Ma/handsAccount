import  { useState } from 'react';
import { useEffect } from 'react';
import useUpdate from './useUpdate';
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
  const addRecounds = (record: RecordsItem) => {
    // console.log(newrecord)
    if (record.outputVal <= 0) {
        alert("请输入金额")
        return false
      }
      if (record.tagIds.length=== 0) {
        alert("请选择标签")
        return false
      }
      // const record = {...newrecord,createdAt:(new Date()).toISOString()}
      setRecords([...records, record]);
      return true

   }
  return {addRecounts: addRecounds,records,}
 }

export { useRecords}