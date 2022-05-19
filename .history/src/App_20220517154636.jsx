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
   <div> <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g Buy eggs"/>
</div>
  <button className=" btn btn-success"> Add</button>
</form>
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                  <div>
                  <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                       Default checkbox
                    </label>
                  </div>
                  <button className="btn btn-danger">Remove</button>
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
