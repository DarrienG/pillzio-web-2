import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button, Nav, NavItem, NavLink, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';

class App extends Component {
        render() {
                return (
                        <div>
                                <Navigation isLoggedIn={false} />
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
                                {props.isLoggedIn ? <Tab>Medication</Tab> : null}
                                {props.isLoggedIn ? <Tab>Schedules</Tab> : null}
                                {props.isLoggedIn ? null : <Tab>Signup</Tab>}
                                <Tab>{props.isLoggedIn ? "Logout" : "Login"}</Tab>
                        </TabList>

                        <TabPanel>
                                <Welcome />
                        </TabPanel>
                        {props.isLoggedIn ? <TabPanel><h2>Enter a new medication here</h2></TabPanel> : null}
                        {props.isLoggedIn ? <TabPanel><h2>Medication schedules</h2></TabPanel> : null}
                {props.isLoggedin ? null : <TabPanel><SignupComp /></TabPanel>}
                        <TabPanel><LoginComp /></TabPanel>
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


function SignupComp() {
        return (
                <div>
                        <Jumbotron>
                                <h2 className="display-5">Join Pillzio today!</h2>
                                <p className="lead">Keep track of all of your medications using the Pillzio platform! All you need is an email and a password.</p>

                                <hr className="my-2" />
                                <div>
                                        <InputGroup>
                                                <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
                                                <Input />
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                                        <Input />
                                        </InputGroup>
                                </div>
                                <br />
                                <Button>Register</Button>
                        </Jumbotron>
                </div>
        );
}


function LoginComp() {
        return (
                <div>
                        <Jumbotron>
                                <h2 className="display-5">Welcome back to Pillzio!</h2>
                                <p className="lead">We missed you! We kept your reminders safe while you were gone.</p>

                                <hr className="my-2" />
                                <div>
                                        <InputGroup>
                                                <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
                                                <Input />
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                                        <Input />
                                        </InputGroup>
                                </div>
                                <br />
                                <Button>Login</Button>
                        </Jumbotron>
                </div>
        );
}

export default App;
