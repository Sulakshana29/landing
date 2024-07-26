import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import './Home.css';

const lightTheme = {
  background: 'url(/images/mustangs.jpg) no-repeat center center/cover',
  color: '#000',
  heroBoxColor: 'rgb(255, 255, 255, 0.5)', 
  heroTextColor: '#000', 
  additionalContentBackground: '#f0f0f0',
  additionalContentTextColor: '#000',
};

const darkTheme = {
  background: 'url(/images/audi.jfif) no-repeat center center/cover',
  color: '#fff',
  heroBoxColor: 'rgba(0, 0, 0, 0.3)', 
  heroTextColor: '#fff', 
  additionalContentBackground: '#000',
  additionalContentTextColor: '#fff',
};

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const { theme } = useTheme();

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setWelcomeMessage('Good Morning!');
    } else if (hours < 18) {
      setWelcomeMessage('Good Afternoon!');
    } else {
      setWelcomeMessage('Good Evening!');
    }
  }, []);

  useEffect(() => {
    document.title = welcomeMessage;
  }, [welcomeMessage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <div className="home-container">
        <motion.div
          className="hero-section"
          style={{ background: currentTheme.background, color: currentTheme.heroTextColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content" style={{ backgroundColor: currentTheme.heroBoxColor }}>
            <h1 className="hero-heading" style={{ color: currentTheme.heroTextColor }}>{welcomeMessage}</h1>
            <h5 className="hero-subheading" style={{ color: currentTheme.heroTextColor }}>Welcome to THE DEALERSHIP</h5>
            <h2 className="current-time" style={{ color: 'orange' }}>{currentTime}</h2>
            <button className="cta-btn">
              <i className="fa fa-arrow-right"></i> Get Started
            </button>
          </div>
        </motion.div>
        <div
          className="additional-content"
          style={{
            backgroundColor: currentTheme.additionalContentBackground,
            color: currentTheme.additionalContentTextColor
          }}
        >
          <h2>All your preferred car brands in one place</h2>
          <div className="logo-container">
            {['ford', 'toyota', 'ferrari', 'vw', 'nissan', 'alfa', 'chevy', 'kia', 'audi2', 'bugatti', 'abarth', 'benz', 'ford2', 'jaguar', 'renault', 'mitsu', 'skoda', 'subaru'].map((brand, index) => (
              <motion.div
                key={index}
                className="logo-box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={`/images/${brand}.png`} alt={`${brand} logo`} className="logo" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </StyledThemeProvider>
  );
};

export default Home;
