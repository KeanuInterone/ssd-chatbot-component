import React from 'react';

const RecommendedMessage = ({ message, onClick }) => {
    return (
        <div className="recommended-message" onClick={() => onClick(message)}>
            {message}
        </div>
    );
};

export default RecommendedMessage;