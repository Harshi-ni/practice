//import React from 'react';
import './fetch.css'

function Great( props)
{
    let list ={props}
    let users=list.props.list1
   return(
    <a href="#" className="card">
          <div className="outerd">
            <img className="imag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvs6BpyeQnxmuzwR-7GndQtwtC28OXP13XQ&usqp=CAU" />
              <h2 className="h2p" style={{color:"black"}}> Cloud COmputing </h2>
              <span className="h2p" style={{color:"blue"}}>Arman hmed |</span><span style={{color:"black"}}> 05 Jun 2022 </span>
              <p className="h2p" style={{color:"rgb(208, 197, 180)"}}>
                With Predictable Stability & Dependable Performance,
                Confluence is Online When You Need it. Spend More
                Time Getting Stuff Done & Less Time Waiting on Pages To Load.
                Choose Confluence. View Product Guide.now days these technologies become
                according to our Browse Template
              </p>
          </div>
        </a>
    
   )

    
   
   
}

export default Great;
