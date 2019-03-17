import React, { Component } from "react";
import "./App.css";
import Modal from "./Modal";
import Footer from "./Footer";
//import LeanJSLogo from "./LeanJSLogo";
import users from "./mocks/users.js";
//import messages from "./mocks/messages.js";
import TopBar from "./TopBar";
import Messenger from "./Messenger/index";

// const filterMessageByUsername = ({ username } = {}) => message => {
//   return message.from === username || message.to === username;
// }
  

class App extends Component {
  constructor() {
    super();
    //const selectedUser = users[0];
    this.state = {
      //selectedUser: selectedUser,
      //conversation: messages.filter(filterMessageByUsername(selectedUser)),
      showModal: false
    };
  }

  // selectUser = (user = {}) => {
  //   this.setState({
  //     selectedUser: user,
  //     conversation: messages.filter(filterMessageByUsername(user))
  //   });
  // };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }));
  };

  // showSettings = () => {
  //   this.toggleModal();
  // };

  render() {
    //const selectedUser = this.state.selectedUser;   
    const { showModal } = this.state;

    return (
      <div className="app">
        <Modal show={showModal} toggleModal={this.toggleModal} />
        <TopBar toggleModal={this.toggleModal} userPosition={this.userPosition} />
        <Messenger toggleModal={this.toggleModal} />
        <Footer />
      </div>
    );
  }
}

export default App;
