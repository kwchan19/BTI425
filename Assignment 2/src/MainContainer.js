import React, { Component } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';


class MainContainer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar highlight={this.props.sidebar} />
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;

/*

                            <Switch>
                                <Route exact path='/' render={() => (
                                    <Overview />
                                )}/>
                                <Route exact path='/projects' render={() => (
                                    <Projects  />
                                )}/>
                                <Route exact path='/teams' render={() => (
                                    <Teams  />
                                )}/>
                                <Route exact path='/employees' render={() => (
                                    <Employees  />
                                )}/>
                
                                <Route render={() => (
                                    <h1>Not Found</h1>
                                )}/>
                            </Switch>

                            */