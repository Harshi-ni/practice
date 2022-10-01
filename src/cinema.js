import Axios from 'axios';

function Cinema(){
    const prom= new Promise((resolve,reject)=>
    {
       Axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then((res)=> {
            return(resolve(res.data))
        }
        )
        .catch(
            (error)=>
            {
                return(error)
            }

        )
        })
    prom.then(
        rets =>
        console.log(" i am rets.search",rets.Search)
    )
    prom.catch(
        err=>
        console.log(err)

    )
    
    
    
    
        /*Axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res=>
        console.log(res.data));*/
        return (
            <div>
                <h1 style={{backgroundColor:"yellow",color:"red"}}> I am Nice</h1>
            </div>
        )

    
}
export default Cinema;