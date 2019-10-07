import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function userCard({...props}) {
    console.log(props)
    return (
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            <img src={props.userInfo.picture.medium} />
                        </Avatar>
                    }

                    title={props.userInfo.name.title + ' ' + props.userInfo.name.first + ' ' + props.userInfo.name.last}
                    subheader={'email: '+ props.userInfo.email}
                />
                <CardContent>
                    <List spacing={3}>
                        <ListItem>Gender: {props.userInfo.gender}</ListItem>
                        <ListItem>Age: {props.userInfo.dob.age} , Date: {props.userInfo.dob.date}</ListItem>
                        <ListItem>Gender: {props.userInfo.gender}</ListItem>
                        <ListItem>Phone: {props.userInfo.phone}</ListItem>
                        <ListItem>ID: {props.userInfo.id.name + '' + props.userInfo.id.value}</ListItem>
                        <ListItem>Country: {props.userInfo.location.country}</ListItem>
                        <ListItem>State: {props.userInfo.location.state}</ListItem>
                        <ListItem>City: {props.userInfo.location.city}</ListItem>
                    </List>
                </CardContent>
            </Card>
    )
}