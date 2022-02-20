import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class TeamsPanel extends Component {
    constructor(){
        //Always call super()
        super();
        //Add new properties to the component's state bag
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        //Fetch...
        axios.get("https://lit-coast-73093.herokuapp.com/teams").then((res) => {
            //Success...
            this.setState({
                teams: res.data
            });
        }).catch((err) => {
            //not found...needs more code...
            console.log("error")
        });
    }

    render() {
        return (
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3 className="panel-title">Teams</h3>
                        </div>
                        <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                            <tbody>
                               {this.state.teams.map((name) => {   
                                   return (
                                        <tr>
                                            <td>{name.TeamName}</td>
                                            <td>{name.Employees.length} Employees</td>
                                        </tr>
                                   );
                               })}
                            </tbody>
                            </table>
                        </div>
                        <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                        </div>
                    </div>
                   
        );
    }
}

export default TeamsPanel;