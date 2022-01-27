
let id =parseInt(window.localStorage.getItem("idMax") ||"0") ;
const creatId = ():number => { 
  id += 1;
  window.localStorage.setItem("idMax", JSON.stringify(id));
  return id;
}
export {creatId }