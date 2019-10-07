import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import '../App.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: null,
            currUser: null
        }
    }

    getUsersList = () => {
        fetch(`https://randomuser.me/api/?page=1&results=20&seeds=abc`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                //'Content-Type': 'application/json'
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" // otherwise $_POST is empty
            },
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json.results,
                })
            })

    }

    getRandomUser = () => {
        fetch(`https://randomuser.me/api/`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                //'Content-Type': 'application/json'
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" // otherwise $_POST is empty
            },
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    currUser: json.results[0],
                })
            })

    }

    componentDidMount() {
        this.getUsersList();
        this.getRandomUser();
    }

    handleOpenUserDetails = (item) => {
        this.setState({
            currUser: item
        })
    }

    render(){
      return (
        <Router>
            <>
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Sidebar usersList={!!this.state.data && this.state.data} handleOpenUserDetails={this.handleOpenUserDetails} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Route exact path="/" render={(props) => <Main {...props}  user={!!this.state.currUser && this.state.currUser}/>} />
                    </Grid>
                </Grid>
            </Container>
            </>
        </Router>
      );
}}

export default App;
