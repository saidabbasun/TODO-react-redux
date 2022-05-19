import TodoItems from "./components/todo-itams";
import TodosForm from "./components/todos-form";
import TodosFooter from "./components/todos-footer";
import {useSelector} from 'react-redux'
import TodosHeader from "./components/todos-header";
import { useEffect,useD } from "react";
import { initializeTodos } from "./actions/todos";
function App() {
  useEffect(()=>{
   console.log(localStorage.getItem('todos'))
  },[])
  const todoItems=useSelector(state=>state.todos)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
           <TodosHeader length={todoItems.length} />
           <TodosForm/>
           <TodoItems/>
           <TodosFooter/>
              </div>
            </div>
          </div>
        </div>
  
  );
}
import { initializeTodos } from "./actions/todos";

export default App;
