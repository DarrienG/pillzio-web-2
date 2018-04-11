import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button, Nav, NavItem, NavLink } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';

class App extends Component {
        render() {
                return (
                        <div>
                                <Navigation />
                        </div>

                );
        }
}


// Tabs will go here when they are defined
function Navigation(props) {
        return (
                <Tabs>
                        <TabList>
                                <Tab>Welcome</Tab>
                                <Tab>Medication</Tab>
                                <Tab>Schedules</Tab>
                                <Tab>{props.isLoggedIn ? "Logout" : "Login"}</Tab>
                        </TabList>

                        <TabPanel>
                                <Welcome />
                        </TabPanel>
                        <TabPanel>
                                <h2>Enter a new medication here</h2>
                        </TabPanel>
                        <TabPanel>
                                <h2>Medication schedules</h2>
                        </TabPanel>
                        <TabPanel>
                                <h2>Login or logout here idk</h2>
                        </TabPanel>
                </Tabs>
        );
}

class Welcome extends Component {
        render() {
                return ( 
                        <div>
                                <Jumbotron>
                                        <h1 className="display-3">Pillzio</h1>
                                        <h2 className="display-5">Medication Management for the 21st century</h2>
                                        <p className="lead">As people get older, the cost of health care increases exponentially. The brunt of healthcare costs are incurred in the final quarter of a standard American’s life.</p>
                                        <p className="lead">Undertaking or overtaking prescriptions contributes greatly to this cost.</p>
                                        <hr className="my-2" />
                                        <p>Pillzio is the modern solution to this problem.</p>
                                </Jumbotron>
                        </div>
                        );
        }
}

export default App;
