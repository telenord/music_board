import React, { Component } from 'react';
import * as firebase from 'firebase';



class SignInGoogle extends Component{
  constructor(props){
    super(props);
    this.state= {}
  }
  componentWillMount(){

    const provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider)
      .then(result=> {
        console.log(result);
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;

      })
  }
  render() {
    return (
      <div>
        <h1>SignIn Google</h1>


      </div>
    )
  }
}


export default SignInGoogle;