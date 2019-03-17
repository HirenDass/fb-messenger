import React from 'react';
import StyledConversation from './StyledConversation';
import messages from "./../../mocks/messages";

const filterMessageByUsername = ({ username } = {}) => message => {
    return message.from === username || message.to === username;
  }

const Conversations = props => {

    const selectedUser = props.selectedUser;  
    const activeConversation = (user = {}) => messages.filter(filterMessageByUsername(user));  

    return(
        <div className="conversation">
        <div className="conversation-bar">
          <h2>
            {selectedUser.name &&
              `${selectedUser.name.first} ${selectedUser.name.last}`}
          </h2>
          <div className="conversation-menu">
            <i className="icon fas fa-phone" />
            <i className="icon fas fa-video" />
            <i className="icon fas fa-info-circle" />
          </div>
        </div>
        <div className="conversation-content">
          <div className="messages">
            <div className="list">
              {<StyledConversation selectedUser={selectedUser} conversation={activeConversation(selectedUser)} /> || <p>You have no messages</p>}
            </div>
            <div className="new-message">
              <input
                type="text"
                placeholder="Type your message..."
                className="message-box"
              />
              <button>Send</button>
            </div>
          </div>
          <div className="user-detail">
            <div className="user">
              <div>
                <img
                  className="avatar large"
                  src={`images/${selectedUser.username}_lg.jpg`}
                  alt={`${selectedUser.username}`}
                />
                <div className="user-title">
                  <div className="user-name">
                    {selectedUser.name &&
                      `${selectedUser.name.first} ${
                        selectedUser.name.last
                      }`}
                  </div>
                  <div className="last-active">
                    Active {Math.floor(Math.random() * 3) + 1}m ago
                  </div>
                </div>
              </div>
              <i className="icon fas fa-cog" />
            </div>
            <div>Options</div>
            <div>Facebook Profile</div>
          </div>
        </div>
      </div>
    )
}



export default Conversations;