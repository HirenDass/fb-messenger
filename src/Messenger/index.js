import React from 'react';
import Threads from './Threads/index';
import users from "./../mocks/users";
//import messages from "./../mocks/messages";
import Conversation from "./Conversation/index";

// const filterMessageByUsername = ({ username } = {}) => message => {
//     return message.from === username || message.to === username;
//   }

class Messenger extends React.Component {
    constructor(props) {
        super(props);
        const selectedUser = users[0];
        this.state = {
          selectedUser: selectedUser,
          //conversation: messages.filter(filterMessageByUsername(selectedUser))
        };
    }

    selectUser = (user = {}) => {
        this.setState({
          selectedUser: user,
          //conversation: messages.filter(filterMessageByUsername(user))
        });
    }

    render() {

        return(
            <div className="messenger">
        
                <Threads toggleModal={this.props.toggleModal} users={users} selectUser={this.selectUser} />  
                <Conversation 
                //conversation={this.state.conversation} 
                selectedUser={this.state.selectedUser}                     
                />

          </div>
        )
    }
}

export default Messenger;