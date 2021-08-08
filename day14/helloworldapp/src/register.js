//now we need to create a new component(class) so we need to use react.component inbulit function 
//for that we need to import react here
import React from 'react';

//to create  a new component(class) we need to extend register class from React.component
class Register extends React.Component{
    //class definition
    render(){
        return(

            <div>

             <form action="/api/register" method="POST" >
                
                 <table>
                     <tr>
                         <td>id: </td>
                         <td><input id="newid" name="id" type="text" required /></td>
                     </tr>

                     <tr>
                         <td>First Name: </td>
                         <td><input id="fname" name="firstname" type="text" required/></td>
                     </tr>

                     <tr>
                         <td>Last Name: </td>
                         <td><input id="lname" name="lastname" type="text" required /></td>
                     </tr>

                     <tr>
                         <td>email: </td>
                         <td><input id="email" name="email" type="email" required /></td>
                     </tr>

                     <tr>
                         <td>Contact: </td>
                         <td><input id="contact" name="contact" type="text" required /></td>
                     </tr>

                     <tr>
                         <td></td>
                         <td><button id="register" type="submit" required >Register</button></td>
                     </tr>

                 </table>
                 
              </form>

            </div>

        );
    }

}


export default Register;