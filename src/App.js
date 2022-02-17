import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row h-100 py-4 px-4 bg-light">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Coin Lists</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <h1>On Construction</h1> 
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div class="card shadow rounded p-5">

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Rank</th>
                      <th>Type</th>
                      <th>Active</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bitcoin</td>
                      <td>BTC</td>
                      <td>21</td>
                      <td>Coin</td>
                      <td>True</td>
                      <td><button class="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
                <h1>TEest</h1>
              </div>
              
            </div>

          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
