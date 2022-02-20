import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import MainContainer from './MainContainer';

class Projects extends Component {
    constructor(){
        //Always call super()
        super();
        //Add new properties to the component's state bag
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        //Fetch...
        axios.get("https://lit-coast-73093.herokuapp.com/projects").then((res) => {
            //Success...
            this.setState({
                projects: res.data
            });
        }).catch((err) => {
            //not found...needs more code...
            console.log("error")
        });
    }

    render() {
        return (
            <MainContainer sidebar = "Projects">
            <div>
                <h1 className="page-header">Projects</h1>
                            <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td><b>Description</b></td>
                                    <td><b>Start Date</b></td>
                                    <td><b>End Date</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                
                               {this.state.projects.map((name) => {
                                   return (
                                        <tr>
                                            <td>{name.ProjectName}</td>
                                            <td>{name.ProjectDescription}</td>
                                            <td>{moment(name.ProjectStartDate).format('YYYY-MM-DD')}</td>
                                            <td>{moment(name.ProjectEndDate).format('YYYY-MM-DD')}</td>
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

export default Projects;