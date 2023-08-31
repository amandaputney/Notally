import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    //public instance field that lives in every object
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    };
//go to approach for making sure that "this" is bound to the component instance
    // handleChange = (evt) => {
    //     alert(JSON.stringify(this.state))
    // }
    //  handleSubmit = (evt) => {
    //         evt.preventDefault();
    //         alert(JSON.stringify(this.state))

    // };
        handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value,
            error: '' //clears out error message when they start typing
        });
        };

        handleSubmit = async (evt) => {
            evt.preventDefault();   //prevents form from being submitted to server & triggering a full page reload in our SPA
            try {
              const {name, email, password} = this.state;  //desctructure assigmnment 
              const formData = {name, email, password};
              //The Promise returned by the signUp service method 
              //will resolve to the user object included in the payload of the
              //JSON Web TOekn (JWT)
              const user = await signUp(formData);
              this.props.setUser();
            } catch {
            //an error occured --> maybe a duplicate email
            this.setState({error: 'Sign-Up failed, please try again.'})
            }
         };
          

//overrides the built in render method that we inherit from component
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}
}


//    render() {
//         //returns UI as JSX
//         return (
//             <div>
//                 SignUpForm
//                 {/* <p>{this.state.name}</p> */}
//             </div>
//         );
//     }
// 