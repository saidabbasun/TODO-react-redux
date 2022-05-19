import TodoItems from "./components/todo-itams";
import TodosForm from "./components/todos-form";
import TodosFooter from "./components/todos-footer";
import {useSelector} from 'react-redux'
import TodosHeader from "./components/todos-header";
function App() {
  const TodoItems=useSelector(state=>state.todos)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
           <TodosHeader length={={TodoItems.leng}} />
           <TodosForm/>
           <TodoItems/>
           <TodosFooter/>
              </div>
            </div>
          </div>
        </div>
  
  );
}

export default App;
