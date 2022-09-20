//import logo from './logo.svg';
import './App.css';
import Great from './fetch';


function App() {
  let list=[
    {
    id:1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvs6BpyeQnxmuzwR-7GndQtwtC28OXP13XQ&usqp=CAU",
    course:"Cloud COmputing",
    head:"Arman hmed",
    description:"With Predictable Stability & Dependable Performance, Confluence is Online When You Need it. Spend Time Getting Stuff Done & Less Time Waiting on Pages To Load. Choose Confluence. View Product Guide.now days these technologies become according to our Browse Template"
    },
    {
    id:2,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvs6BpyeQnxmuzwR-7GndQtwtC28OXP13XQ&usqp=CAU",
    course:"Web Devlopement",
    head:"Arman hmed",
    description:"With Predictable Stability & Dependable Performance,  Confluence is Online When You Need it. Spend More Time Getting Stuff Done & Less Time Waiting on Pages To Load. Choose Confluence. View Product Guide.now days these technologies become"      },
    {
    id:3,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvs6BpyeQnxmuzwR-7GndQtwtC28OXP13XQ&usqp=CAU",
    course:"Artificial Intelligence",
    head:"Arman hmed",
    description:"With Predictable Stability & Dependable Performance, Confluence is Online When You Need it. Spend More Time Getting Stuff Done & Less Time Waiting on Pages To Load.  Choose Confluence. View Product Guide.now days these technologies becomeaccording to our Browse Template"
    }, 
    {
    id:4,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvs6BpyeQnxmuzwR-7GndQtwtC28OXP13XQ&usqp=CAU",
    course:"Machine Learning",
    head:"Arman hmed",
    description:"With Predictable Stability & Dependable Performance, Confluence is Online When You Need it. Spend More  Time Getting Stuff Done & Less Time Waiting on Pages To Load.  Choose Confluence. View Product Guide.now days these technologies becomeaccording to our Browse Template"
    }
                
    
]
  return (
    <div className="App">
      {
      list.map((list,index) =>
      <Great key={index} list1= {list} />
      )
}

      </div>
  );
}

export default App;
