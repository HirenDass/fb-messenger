import React from 'react';

const StyledConversation = props => (

    props.conversation.map((message, i) => (
        <div
          key={i}
          className={`message-wrapper ${
            message.from === "you" ? "sent" : "received"
          }`}
        >
          {message.to === "you" && (
            <img
              src={`images/${props.selectedUser.username}_lg.jpg`}
              alt={`${props.selectedUser.username}`}
              className="avatar medium"
            />
          )}
          <div className="message">{message.message}</div>
          {message.from === "you" && (
            <div className="message-read">
              <i className="icon fa fa-check-circle" />
            </div>
          )}
        </div>
      ))
          
)

export default StyledConversation;