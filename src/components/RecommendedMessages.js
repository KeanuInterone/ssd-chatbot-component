import React from 'react';
import RecommendedMessage from './RecommendedMessage';

const RecommendedMessages = ({ messages, onMessageClick }) => {
    return (
        <div className="recommended-messages">
            {messages.map((message, index) => (
                <RecommendedMessage
                    key={index}
                    message={message}
                    onClick={onMessageClick}
                />
            ))}
        </div>
    );
};

export default RecommendedMessages;