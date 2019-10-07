import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class Sidebar extends React.Component {

    render() {
        console.log(this.props);
        return (
            <List spacing={3}>
                    {!!this.props.usersList && this.props.usersList.map((item, index)=> {
                        return (
                            <ListItem key={item.login.uuid} xs={12} sm={12} onClick={() => this.props.handleOpenUserDetails(item)}>
                                <ListItemAvatar>
                                    <Avatar src={item.picture.thumbnail} alt={item.name.first}/>
                                </ListItemAvatar>
                                <ListItemText primary={item.name.title + ' ' + item.name.first + ' ' + item.name.last} secondary={'id: ' + item.id.name + '' + item.id.value} />
                            </ListItem>
                        )
                    })}
            </List>
        )
    }
}

export default Sidebar;