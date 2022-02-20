import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';

class Teams extends Component {
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
            <MainContainer sidebar = 'Teams'>
            <div>
                <h1 className="page-header">Teams</h1>
                 
                            <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td><b>Team Name</b></td>
                                    <td><b>Number of Employees</b></td>
                                    <td><b>Projects</b></td>
                                    <td><b>Team Leader</b></td>
                                </tr>
                            </thead>
                            <tbody>
                               {this.state.teams.map((name) => {   
                                   return (
                                        <tr>
                                            <td>{name.TeamName}</td>
                                            <td>{name.Employees.length} Employees</td>
                                            <td><ul>{name.Projects.map((name, i) => <li key={i}>{name.ProjectName}</li>)}</ul></td>
                                            <td>{name.TeamLead.FirstName} {name.TeamLead.LastName}</td>
                                        </tr>
                                   );
                               })}
                            </tbody>
                            </table>
                        </div>
                    </MainContainer>

          
        );
    }
}

export default Teams;