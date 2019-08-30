import StarBorderIcon from '@material-ui/icons/StarBorder';
//import Chip from '@material-ui/core/Chip';
import  "./style.scss"
import React , {useState} from "react"
function Todo(){
const [item,setItem]=useState("")
const [items,setItems]=useState([])
const [dones,setDones]=useState([])
const [deleted,setDeleted]=useState([])
const [visible,setVisible]=useState("all")
const [stars,setStarred]=useState([])
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
    {visible==="all"?<div>
    <h1>Todo App</h1>
    <input value={item} placeholder="Enter a value" onChange={(e)=>{setItem(e.target.value)}}></input>
    <button className="Add" onClick={()=>{
    let val=items.find(function(element){return element===item})

    val || item==="" ?setItems([...items]):setItems([...items,item])

    setItem("")
    console.log(items)
  }}>Add</button>
  </div>: ""}
  {
   visible==="all"?
   <div className="allTodos">
   <ul className="items">{ items.length===0?<p>No Todos To Do</p>  :
    items.map((item,index)=>(


   deleted.filter((del)=>(del===item)).length===0 &&  dones.filter((done)=>(done===item)).length===0 ?

      <li className="item"  key={index}><div>{item}</div>
    <button className="Delete" onClick={()=>{
  const newDeleted=items.filter((item,ind)=>(ind===index))
  setDeleted([...newDeleted,...deleted])

    //   const newItems=items.filter((item,ind)=>(ind!==index))

    // setItems(newItems)
    }}>Delete</button>
    <button className="Done" onClick={()=>{
        const newDones=items.filter((item,ind)=>(ind===index))
        setDones([...newDones,...dones])
  
    }}>Complete</button>

  {      stars.filter(star=>(star===item)).length===0?
      <StarBorderIcon
    

      onClick={()=>{
       
       const starred=stars.filter(star=>(star===item))

       starred.length===0? setStarred([...stars,item]):setStarred([...stars])
    
}}>
       </StarBorderIcon>:<StarBorderIcon className="clicked" 
        onClick={()=>{
       
          const starred=stars.filter(star=>(star!==item))
   
          starred.length===0? setStarred([...starred]):setStarred([...stars])
       
   }}
       ></StarBorderIcon> } 
 </li >:  deleted.filter((del)=>(del===item)).length===1 &&  dones.filter((done)=>(done===item)).length===0?
    <li className="deleteditem">
      {item }

{
  stars.filter((star)=>(star===item)).length!==0?  <StarBorderIcon>
 </StarBorderIcon> :""} 
     </li> : deleted.filter((del)=>(del===item)).length===0 &&  dones.filter((done)=>(done===item)).length===1 ?
     <li className="doneitem">
{item}
{
  stars.filter((star)=>(star===item)).length!==0?  <StarBorderIcon>
 </StarBorderIcon> :""} 
     </li>:""))  
  }</ul>

  </div>
  :""
  }
{
  visible==="dones"?<ul className="items">
  {dones.length===0? <p>No Dones Yet</p>:
    dones.map((done,index)=>(
    <li>{done}
      {stars.filter((star)=>(star===done)).length!==0?  <StarBorderIcon>
 </StarBorderIcon> :""} 
    </li>
    ))
  }
  </ul>:""
}
{
  visible==="deleted"?<ul className="items">
  {deleted.length===0? <p>No Deleted Yet</p>:
    deleted.map((del,index)=>(
    <li>{del}
          {stars.filter((star)=>(star===del)).length!==0?  <StarBorderIcon>
 </StarBorderIcon> :""} 
    </li>
    ))
  }
  </ul>:""
}
{
  visible==="starred"?<ul className="items">
  {stars.length===0? <p>No Starred Yet</p>:
    stars.map((star,index)=>(
    <li>{star}
             <StarBorderIcon>
 </StarBorderIcon>
    </li>
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