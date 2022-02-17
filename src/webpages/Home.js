import axios from "axios";
import React from "react";

class Home extends React.Component{
    constructor(){
        super()
        this.state ={
            coins : []
        }
    }
    componentWillMount(){
        const url = 'https://api.coinpaprika.com/v1/coins/'
        axios.get(url)
            .then(coins=>{
                console.log(coins.data)
                this.setState({
                    coins : coins.data
                })
            })
    }
    render(){
        return(
                <div class="row w-100 py-4 px-4 bg-light">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Coin Lists</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h1>Masih dalam tahap pengembangan</h1>
                    
                    </div>
                    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="card shadow rounded p-4">
                            <h3 class="text-secondary">Coin List</h3>
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Symbol</th>
                                                <th>Rank</th>
                                                <th>Type</th>
                                                <th>Active</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.coins.map(coin=>{
                                                return(
                                                    <tr key={coin.id}>
                                                        <td>{coin.name}</td>
                                                        <td>{coin.symbol}</td>
                                                        <td>{coin.rank}</td>
                                                        <td>{coin.type}</td>
                                                        <td>{coin.is_active}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}


export default Home;
