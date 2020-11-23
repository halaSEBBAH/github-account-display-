import React , {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function Hello({name}){
  return(
    <>
      <h1> welcome to {name} </h1>
      <h1> welcome to {name} </h1>
    </>
  );
}


function Apps(props){
  return(
    <div>
        { props.season == "summer" ?
        ( <Hello name = "dalia beach" />
        ) : props.season == "winter" ? (
          <Hello name="ifrane" />
        ) : (<h1>come back later</h1>)
        }
    </div>
  );
}


function State(){

  const [status , setStatus] = useState("Open");
 
  return (
    <div>
      <h1>Status : {status}</h1>
      <button onClick={() => (status == "Open") ?setStatus("Close"):setStatus("Open") }>
       {(status == "Open") ?"Close":"Open" }
      </button>
    </div>
  );
}



function GetUserAccount({ login }){
  const [data , setData] = useState(null);
  useEffect(() => { 
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
    }, []);
  
    if(data){
      return(
        <div>
          <h1>{data.login}</h1>
          <img src = {data.avatar_url}/>
        </div>
      ); 
    }
    return null;
}

function App3(){
  return <GetUserAccount login="halaSEBBAH"/>;
}

ReactDOM.render(
  
  <>
    <Apps season="lol" />
     <App3 /> 
  </>,
  document.getElementById('root')
);





