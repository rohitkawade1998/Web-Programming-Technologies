
import React from 'react';
class Login extends React.Component{
    // class component
    render(){
        return(
             <div>

                <h3>Login Here: </h3>
                 <form action="/api/login" method="POST" >
                   <table>
                     <tr>
                         <td>User Name: </td>
                         <td><input type="text" id="username" name="username" required /></td>
                     </tr>

                     <tr>
                         <td>Password: </td>
                         <td><input type="password" id="password" name="password" required /></td>
                     </tr>

                     <tr>
                         <td></td>
                         <td><button id="login" type="submit" >Login</button></td>
                     </tr>
                     
                   </table>
                 </form>
             </div>
        );
    }
}

export default Login;