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
                <form class="mb-3 d-flex justify-content-between align-items-center">
   <div> <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g bu"/>
</div>
  <button className=" btn btn-succes"> Add</button>
</form>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                       Default checkbox
                    </label>
                    </li>
                    
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
