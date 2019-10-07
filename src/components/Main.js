import React from 'react';
import UserCard from './UserCard';

class Main extends React.Component {
    render() {
        console.log(this.props);
        return !!this.props.user ? <UserCard userInfo={this.props.user}/> : 'loading..'
    }
}
export default Main;