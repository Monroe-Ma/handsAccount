import { useState } from "react";
import { useEffect } from "react";
import useUpdate from "./useUpdate";
export type RecordsItem = {
  tagIds: number[];
  note: string;
  classification: "-" | "+";
  outputVal: number;
  createdAt: string;
};

const useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);
  const addRecords = (record: RecordsItem) => {
    if (record.outputVal <= 0) {
      alert("请输入金额");
      return false;
    }
    if (record.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    setRecords([...records, record]);
    return true;
  };
  return { addRecords, records };
};

export { useRecords };
