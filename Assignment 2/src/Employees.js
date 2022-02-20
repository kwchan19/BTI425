import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import MainContainer from './MainContainer';

class Employees extends Component {
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
            <MainContainer sidebar = 'Employees'>
                    <div>
                        <h1 className="page-header">Employees</h1>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td><b>Position</b></td>
                                    <td><b>Address</b></td>
                                    <td><b>Hire Date</b></td>
                                    <td><b>Salary Bonus</b></td>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.employees.map((name) => {
                                return (
                                        <tr>
                                            <td>{name.FirstName} {name.LastName}</td>
                                            <td>{name.Position.PositionName}</td>
                                            <td>{name.AddressStreet}, {name.AddressState}</td>
                                            <td>{moment(name.HireDate).format('YYYY-MM-DD')}</td>
                                            <td>${name.SalaryBonus}</td>
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

export default Employees;