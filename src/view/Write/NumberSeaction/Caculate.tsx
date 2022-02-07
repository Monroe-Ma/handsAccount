const Caculate = (text:string, output:string) => { 
    
    switch (text) { 
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if (output === "0") {
        return text
        } else {
         return  output + text
        }
 
          // console.log(output);
      case ".":
        if (output.indexOf(".") >= 0) {
          return output 
        } else { 
           return output + "."
        }

      case "清空":
        if (output.length > 1) {
          return ""
        }
        break
      case "删除":
        if (output.length === 1) {
          return "0"
        }
        else {
          return output.slice(0, -1)
        }
    }
} 
  
export default Caculate;