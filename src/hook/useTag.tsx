import React, {useState}from 'react';
type tagDataType = {
   id: string,
   name: string
   iconName:string
}
const useTag = () => {
    const [tags, setTag] = useState<Array<tagDataType>>([
    {id: "0",
      name: "餐饮",
      iconName:"eat"
    },
    {id: "1",
      name: "购物",
      iconName:"shopping"
    }, 
    {id: "2",
      name:"交通",
      iconName:"traffic"
    }, 
    {
      id: "3",
      name:"娱乐",
      iconName:"entertainment"
    }, 
    {
      id: "4",
      name:"日用",
      iconName:"daily"
    }, 
    {
      id: "5",
      name:" 医疗",
      iconName:"medical"
    }, 
    {
      id: "6",
      name:"零食",
      iconName:"snacks"
    }, 
    {
      id: "7",
      name:"房贷",
      iconName:"home"
    }, 
    {
      id: "8",
      name: "文教",
      iconName:"education"
    }, 
    ])
  return {tags,setTag}
}
export { useTag}