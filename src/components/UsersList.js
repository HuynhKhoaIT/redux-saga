import React from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
const UsersList = ({users}) => {
    console.log(users)
    return (
        <div>
            <h1>Danh sách user</h1>
            <ListGroup>
                {users.map((user) =>{
                    return <ListGroupItem key ={user.id}>{user.name}</ListGroupItem>
                })}
            </ListGroup>
        </div>
    )
};
export default UsersList;