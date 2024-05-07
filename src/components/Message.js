import React from "react";

const Message = ({ message, isUser }) => {
    return (
        <div className={isUser ? "user-message-container" : "bot-message-container"}>
          <div className={isUser ? "user-message" : "bot-message"}>
            {message}
          </div>
        </div>
      );
};

export default Message;