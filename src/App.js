import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import  "./style.scss"
import React , {useState} from "react"
function Todo(){
const [item,setItem]=useState("")
const [items,setItems]=useState([])
const [dones,setDones]=useState([])
const [deleted,setDeleted]=useState([])
const [visible,setVisible]=useState("all")
return(<div className="main">

<div className="Navbar">

<div className="NavbarContent"><div className="User">   <h5>Abdelhak Jinen</h5>
<h6>jinenab123@gmail.com</h6></div>

<div className="All"><button   onClick={()=>{setVisible("all")}}>All</button>

</div>

<div className="Filters">
<div className="Dones"><button  onClick={()=>{setVisible("dones")}}>Dones</button></div>
<div className="Deleted"  onClick={()=>{setVisible("deleted")}}><button>Deleted</button></div>
<div className="Starred"  onClick={()=>{setVisible("starred")}}><button>Starred</button></div>
</div>

</div>

</div>

  <div className="Todo">
    <div className="Todocontent">
    <h1>Todo App</h1>
    <input value={item} placeholder="Enter a value" onChange={(e)=>{setItem(e.target.value)}}></input>
    <button className="Add" onClick={()=>{
    let val=items.find(function(element){return element===item})

    val || item==="" ?setItems([...items]):setItems([...items,item])

    setItem("")
    console.log(items)
  }}>Add</button>
  {
   visible==="all"?
   <div className="allTodos">
   <ul className="items">{ items.length===0?<p>No Todos To Do</p>  :
    items.map((item,index)=>(
      <li className="item"  key={index}><div>{item}</div>
    <button className="Delete" onClick={()=>{
  const newDeleted=items.filter((item,ind)=>(ind===index))
  setDeleted([...newDeleted,...deleted])

      const newItems=items.filter((item,ind)=>(ind!==index))

    setItems(newItems)
    }}>Delete</button>
    <button className="Done" onClick={()=>{
        const newDones=items.filter((item,ind)=>(ind===index))
  
        setDones([...newDones,...dones])
        const newItems=items.filter((item,ind)=>(ind!==index))
        setItems(newItems)
    }}>Complete</button>
  
    </li >))
    
  }</ul>
  <p>Dones:</p>
  <ul className="donesTodos">
    {
     
     
     dones.map(element=>
     ( <li>
      <Chip label={element} variant="outlined" clickable size="medium"  />

     </li>))
      
     
     }
  </ul>
 
  

  <p>Deleted</p>
  <ul className="deletedTodos">
    {
     
     
     deleted.map(element=>
     ( <li>{element}</li>))
      
     
     }
  </ul>
  </div>
  :""



  }
{
  visible==="dones"?<ul>
  {dones.length===0? <p>No Dones Yet</p>:
    dones.map((done,index)=>(
    <li>{done}</li>
    ))
  }
  </ul>:""
}
{
  visible==="deleted"?<ul>
  {deleted.length===0? <p>No Deleted Yet</p>:
    deleted.map((del,index)=>(
    <li>{del}</li>
    ))
  }
  </ul>:""
}
  </div>
</div>
</div>
)
}
export default Todo