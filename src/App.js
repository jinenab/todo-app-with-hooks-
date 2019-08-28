import  "./style.scss"
import React , {useState} from "react"
function Todo(){
const [item,setItem]=useState("")
const [items,setItems]=useState([])
const [dones,setDones]=useState([])
const [visible,setVisible]=useState("all")
const todoDones= <ul>
{dones.length===0? <p>No Dones Yet</p>:
  dones.map((done,index)=>(
  <li>{done}</li>
  ))
}
</ul>
const todoAll=<ul className="items">{ items.length===0?<p>No Todos To Do</p>  :
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


return(<div className="main">

<div className="Navbar">

<div className="NavbarContent"><div className="User">   <h5>Abdelhak Jinen</h5>
<h6>jinenab123@gmail.com</h6></div>

<div className="All"><button   onClick={()=>{}}>All</button>

</div>

<div className="Filters">
<div className="Dones"><button  onClick={()=>{setVisible("dones")}}>Dones</button></div>
<div className="Deleted"><button>Deleted</button></div>
<div className="Starred"><button>Starred</button></div>
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
   visible==="all"?<ul className="items">{ items.length===0?<p>No Todos To Do</p>  :
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
  }</ul>:""
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

  </div>
</div>
</div>
)
}
export default Todo