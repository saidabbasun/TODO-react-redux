import TodoItems from "./components/todo-itams";
import TodosForm from "./components/todos-form";
import TodosFooter from "./components/todos-footer";
import TodosHeader from "./components/todos-header";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-header">
              <h1>Todos: 0</h1>
              <div>
             
                <ul className="list-group list-group-flush">
                
                </ul>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
