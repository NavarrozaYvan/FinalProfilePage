import React from 'react';

const SubmissionSuccess = ({name, email, message}) => {
    return(
        <div className = "container">
            <h2 className = "text-center">Submission Successful</h2>
            <p>Thank you, {name}! Your message has been sent.</p>
            <h3>Your submitted data: </h3>
            <ul>
                <li><strong>Name:</strong>{name}</li>
                <li><strong>Email:</strong>{email}</li>
                <li><strong>Message:</strong>{message}</li>
            </ul>
        </div>
    )
}

export default SubmissionSuccess