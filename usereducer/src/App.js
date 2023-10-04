import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

function App() {

  function reducer(state, action){
    if(action.type==="incremented_age"){
      return{
        age:state.age+1
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <div>

      <button onClick={()=>{
        dispatch({type:'incremented_age'})
      }}>

        <p>this is button</p>

      </button>
      <p>This is changing {state.age} </p>

    </div>
  );
}

export default App;
