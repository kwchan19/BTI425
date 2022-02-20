import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EmployeesPanel extends Component {
    constructor(){
        //Always call super()
        super();
        //Add new properties to the component's state bag
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        //Fetch...
        axios.get("https://lit-coast-73093.herokuapp.com/employees").then((res) => {
            //Success...
            this.setState({
                employees: res.data
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
                        <h3 className="panel-title">Employees</h3>
                        </div>
                        <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                            <tbody>
                               {this.state.employees.map((name) => {
                                   return (
                                        <tr>
                                            <td>{name.FirstName} {name.LastName}</td>
                                            <td>{name.Position.PositionName}</td>
                                        </tr>
                                   );
                               })}
                            </tbody>
                            </table>
                        </div>
                        <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                        </div>
                    </div>
                   
        );
    }
}

export default EmployeesPanel;