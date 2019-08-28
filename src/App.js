import  "./style.scss"
import React , {useState} from "react"
function Todo(){
const [item,setItem]=useState("")
const [items,setItems]=useState([])
const [dones,setDones]=useState([])
return(<div className="main">
<div className="Navbar">

<div className="NavbarContent"><div className="User">   <h5>Abdelhak Jinen</h5>
<h6>jinenab123@gmail.com</h6></div>

<div className="All"><p>All</p></div>

<div className="Filters">
<div className="Dones"><p>Done</p></div>
<div className="Deleted"><p>Deleted</p></div>
<div className="Starred"><p>Starred</p></div>
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
  </div>
</div>
</div>
)
}
export default Todo