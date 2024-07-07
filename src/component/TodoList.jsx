import React ,{useState}from 'react'
import './Todolist.css'

function TodoList() {
    const[inputVal, setInput]=useState('');
    const[list, setList]=useState([]);
    

    const addItem=()=>{
        setList([...list,inputVal]);
        setInput('')
    }

    const deleteArr=(id)=>{
        const newArr=list.filter((val,ind)=>{
            return id!==ind
        });
       setList(newArr) 
    }
    const deleteAll=(id)=>{
      
     setList([]) 
  }
   
 


  return (
    <div className='container'>
      <h1>TO-DO List</h1>
      <div className="input-group mb-3">
        
        <input type="text"  value={inputVal} onChange={e=>{setInput(e.target.value)}}  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter Your To do Work'/>
        </div>
        <button type="button" onClick={addItem} className="btn btn-primary">Add</button>
        <div>
            <ul className='list-group list-group-flush'>
                {
                list.map((val,ind)=>{
                    return <li className='list-group-item' key={ind}>{val}<button className='btn btn-primary del' onClick={()=>deleteArr(ind) }>Delete</button></li>
                    
                           })
                }
                
                
            </ul>
            <button className='btn btn-danger clr' onClick={deleteAll}>Clear All</button>
        </div>
    </div>
  )
}

export default TodoList
