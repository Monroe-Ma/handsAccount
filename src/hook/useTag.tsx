import { creatId } from 'lib/creatId';
import  {useEffect, useState}from 'react';
import useUpdate from './useUpdate';
type tagDataType = {
   id: number,
   name: string
   iconName?:string
}
const useTag = () => {
  const [tags, setTag] = useState<tagDataType[]>([])
  useEffect(() => { 
   let localStorage = JSON.parse(window.localStorage.getItem("tags") || "[]")
    if (localStorage.length ===0) {
       localStorage = [
    {id: creatId(),
      name: "餐饮",
      iconName:"eat"
    },
    {id: creatId(),
      name: "购物",
      iconName:"shopping"
    }, 
    {id: creatId(),
      name:"交通",
      iconName:"traffic"
    }, 
    {
      id:creatId(),
      name:"娱乐",
      iconName:"entertainment"
    }, 
    {
      id: creatId(),
      name:"日用",
      iconName:"daily"
    }, 
    {
      id:creatId(),
      name:" 医疗",
      iconName:"medical"
    }, 
    {
      id: creatId(),
      name:"零食",
      iconName:"snacks"
    }, 
    {
      id: creatId(),
      name:"房贷",
      iconName:"home"
    }, 
    {
      id: creatId(),
      name: "文教",
      iconName:"education"
         }, 
    {
      id: creatId(),
      name: "保险",
      iconName:"insurance"
         }, 
    {
      id: creatId(),
      name: "酒店",
      iconName:"hotel"
         }, 
    {
      id: creatId(),
      name: "转账",
      iconName:"count"
         }, 
    {
      id: creatId(),
      name: "旅游",
      iconName:"lvyou"
         },
       {
      id: creatId(),
      name: "运动",
      iconName:"sport"
    },
    ]
    }
    setTag(localStorage)
  },[])
  useUpdate(() => { 
   window.localStorage.setItem("tags",JSON.stringify(tags))
  },[tags])
   const addTag = () => {
    const tagName = window.prompt("请输入标签名称")
    if(tagName!==null){
      setTag([...tags,{id:creatId() ,name:tagName , iconName:"other"}])
      }
   }
  const findTag = (id: number) => {
    console.log(tags, id)
     return tags.filter(tag => tag.id === id)[0]
  }
  const indexOfTag = (id: number) => {
    let reslut=-1
    for (let i = 0; i < tags.length;i++) { 
      if (tags[i].id === id) { 
        reslut = i;
        break;
      }
       return reslut
    }
  }
  const updateTag = (id: number, obj: { name: string },) => {
    setTag(tags.map(tag => tag.id === id ? { id, name: obj.name, iconName:tag.iconName } : tag),)
  }
  const getIconName = (id: number) => { 
    const tag =tags.filter(tag => tag.id === id)[0]
    return  tag ? tag.iconName : ""
  }
   const getTagName = (id: number) => { 
    const tag =tags.filter(tag => tag.id === id)[0]
    return  tag ? tag.name: ""
  }
  const deleteTag = (id: number) => {
    setTag(tags.filter(tag=> tag.id!==id))
  }
  
  return {tags,setTag,addTag,findTag,updateTag,deleteTag,getIconName,getTagName,indexOfTag}
}
export default useTag