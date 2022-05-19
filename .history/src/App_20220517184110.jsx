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
                <div className="card-body">
                  <form className="mb-3 d-flex justify-content-between align-items-center">
                    <div>
                      
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="e.g Buy eggs"
                      />
                    </div>
                    <button className=" btn btn-success"> Add</button>
                  </form>
                </div>
                <ul className="list-group list-group-flush">
                
                </ul>

                <div className=" card-footer">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
