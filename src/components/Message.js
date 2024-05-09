import React from "react";
import { marked } from 'marked'

const Message = ({ message, isUser }) => {

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
        return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`;
    };

    if (isUser === false) {
        const htmlContent = marked.parse(message, { renderer });
        return (
            <div className="bot-message-container">
              <div className="bot-message" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
          );
    }
    return (
        <div className="user-message-container">
          <div className="user-message">
            {message}
          </div>
        </div>
      );
};

export default Message;