import React from 'react';
import {Button, ListGroup,ListGroupItem} from 'reactstrap';
const UsersList = ({users,onDeleteUser}) => {
    console.log(users)
    return (
        <div>
            <h1>Danh sách user</h1>
            <ListGroup>
                {users.sort((a,b)=>{
                    if(a.firstName > b.lastName){
                        return 1;
                    }
                    else if(a.firstName < b.lastName){
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }).map((user) =>{
                    return <ListGroupItem key ={user.id}>
                            <section style={{display:'flex',margin:'auto 0'}}>
                                <div style={{flexGrow: 1 }}>
                                    {user.firstName} {user.lastName}
                                </div>
                                <div>
                                    <Button outline color='danger' onClick={()=> onDeleteUser(user.id)}>Delete</Button>
                                </div>
                            </section>
                        </ListGroupItem>
                })}
            </ListGroup>
        </div>
    )
};
export default UsersList;