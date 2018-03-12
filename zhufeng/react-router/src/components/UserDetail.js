import React, { Component } from 'react'

export default class UserDetail extends Component {
  render() {
      let id=this.props.match.params.id
      let userStr=localStorage.getItem('users')
      let users=userStr?JSON.parse(userStr):[]
      let user = users.find(user=>user.id==id)
    return (
      <table className="table table-responsive">
      <thead>
         <tr>
             
             <th>ID</th>
             <th>姓名</th>
             
             
         </tr>
         </thead>
         <tbody>
             <tr>
               <td>{user.id}</td>
               <td>{user.name}</td>
             </tr>
            
         </tbody>
      </table>
    )
  }
}
