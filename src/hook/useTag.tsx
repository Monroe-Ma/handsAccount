import { creatId } from 'lib/creatId';
import  {useState}from 'react';
type tagDataType = {
   id: number,
   name: string
   iconName:string
}
const defaultTagData = [
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
    ]
const useTag = () => {
    const [tags, setTag] = useState<tagDataType[]>(defaultTagData)
   const addTag = () => {
    const tagName = window.prompt("请输入标签名称")
    if(tagName!==null){
      setTag([...tags,{id:creatId() ,name:tagName , iconName:"other"}])
      }
   }
  const findTag = (id: number) => {
    // console.log(tags, id)
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
  const updateTag = (id: number, obj: {name:string})=>{
    const index = indexOfTag(id)
    const tagClone = JSON.parse(JSON.stringify(tags))
      tagClone.splice(index, 1, { id: id, name: obj.name })
      setTag(tagClone)
   }
  const deleteTag = (id: number, obj: { name: string }) => {
    const index = indexOfTag(id)
    const tagClone = JSON.parse(JSON.stringify(tags))
      tagClone.splice(index)
      setTag(tagClone)
  }
  
  return {tags,setTag,addTag,findTag,updateTag,deleteTag}
}
export default useTag