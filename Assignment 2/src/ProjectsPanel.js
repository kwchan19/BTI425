import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

class ProjectsPanel extends Component {
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
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3 className="panel-title">Projects</h3>
                        </div>
                        <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                            <tbody>
                               {this.state.projects.map((name) => {
                                   return (
                                        <tr>
                                            <td>{name.ProjectName}</td>
                                            <td>Active  {moment().diff(moment(name.ProjectStartDate),'days')} Days</td>
                                        </tr>
                                   );
                               })}
                            </tbody>
                            </table>
                        </div>
                        <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                        </div>
                    </div>
                   
        );
    }
}

export default ProjectsPanel;