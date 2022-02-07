import  { useState } from 'react';
import { useEffect } from 'react';
import useUpdate from './useUpdate';
export type RecordsItem = {
  tagIds: number[];
  note: string;
  classification: "-" | "+";
  outputVal: number ;
  createdAt:string
}
export type NewRecordsItem = Omit<RecordsItem, "createdAt">
const useRecords = () => {
  const [records, setRecords] = useState < RecordsItem[]>([]);
  useEffect(() => {
      setRecords( JSON.parse(window.localStorage.getItem("records")||"[]"))
     },[]
  )
  useUpdate(()=>{
    window.localStorage.setItem("records",JSON.stringify(records))},[records]
  )
  const addRecounds = (newrecord: NewRecordsItem) => {
    // console.log(newrecord)
    if (newrecord.outputVal <= 0) {
        alert("请输入金额")
        return false
      }
      if (newrecord.tagIds.length=== 0) {
        alert("请选择标签")
        return false
      }
      const record = {...newrecord,createdAt:(new Date()).toISOString()}
      setRecords([...records, record]);
      return true

   }
  return {addRecounds,records,}
 }

export { useRecords}