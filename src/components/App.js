import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';
import UsersList from './UsersList'
function App(props) {
  // Sử dụng hook useEffect để gọi getUsersRequest khi component được tạo
  useEffect(() => {
    props.getUsersRequest();
  }, []); // Thêm [] để đảm bảo useEffect chỉ chạy một lần khi component được tạo
  const users = props.users;

  return (
    <div style={{margin: '0 auto',padding: '10px', maxwidth:'600px'}}> 
      <UsersList users ={users.items}/>
    </div>
  );
}

export default connect(({users})=>({users}), {
  getUsersRequest
})(App);
