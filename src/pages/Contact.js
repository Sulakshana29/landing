import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useTheme } from '../context/ThemeContext'; 
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});
    const [success, setSuccess] = useState('');

    const { theme } = useTheme(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        if (!name) errors.name = "Name is required";
        if (!email) errors.email = "Email is required";
        if (!message) errors.message = "Message is required";
        if (Object.keys(errors).length) {
            setError(errors);
        } else {
            setSuccess("Message sent successfully!");
            setError({});
        }
    };

    return (
        <Container className={`container ${theme}`}>
            <Typography variant="h3">Contact Us</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    className="text-field"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    error={!!error.name}
                    helperText={error.name}
                    margin="normal"
                />
                <TextField
                    className="text-field"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    error={!!error.email}
                    helperText={error.email}
                    margin="normal"
                />
                <TextField
                    className="text-field"
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    error={!!error.message}
                    helperText={error.message}
                    margin="normal"
                />
                <Button className="button" type="submit" variant="contained" color="primary">Send</Button>
                {success && <Typography variant="body1" className="success-message">{success}</Typography>}
            </form>
           
            <div className="contact-info">
                <Typography variant="body1">Address: 123 Main St, Colombo07</Typography>
                <Typography variant="body1">Phone: (+94)716 232 956</Typography>
                <Typography variant="body1">Email: contact@thedealership.com</Typography>
            </div>
        </Container>
    );
};

export default Contact;
