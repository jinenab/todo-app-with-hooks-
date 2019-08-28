import  "./style.scss"
import React , {useState} from "react"
import { element } from "prop-types";
function Todo(){
const [item,setItem]=useState("")
const [items,setItems]=useState([])
const [dones,setDones]=useState([])
return(<div className="Todo">
  <h1>Todo App</h1>
  <input value={item} placeholder="Enter a value" onChange={(e)=>{setItem(e.target.value)}}></input>
  <button className="Add" onClick={()=>{
  let val=items.find(function(element){return element===item})
  
  val || item==="" ?setItems([...items]):setItems([...items,item])
  
  setItem("")
  console.log(items)
 }}>Add</button>

  <ul className="items">{ items.length===0?<p>No Todos To Do</p>  :  
  items.map((item,index)=>(
   
    <li className="item"  key={index}><div>{item}</div>
  <button className="Delete" onClick={()=>{
    
    const newItems=items.filter((item,ind)=>(ind!==index))
  setItems(newItems)
  }}>Delete</button>
  <button className="Done" onClick={()=>{
      const newDones=items.filter((item,ind)=>(ind===index))
    
      setDones([...newDones,...dones])
      const newItems=items.filter((item,ind)=>(ind!==index))
      setItems(newItems)
  }}>Done</button>

  </li >))
}</ul>
 <h4>Dones:</h4>

<ul>
{dones.length===0? <p>No Dones Yet</p>:
  dones.map((done,index)=>(
    <li>{done}</li>
  ))
}
</ul>

</div>)
}
export default Todo