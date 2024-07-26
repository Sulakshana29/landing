import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import './About.css';

const lightTheme = {
  backgroundColor: '#f9f9f9',
  textColor: '#333',
  cardBackgroundColor: '#fff',
  cardTextColor: '#000',
};

const darkTheme = {
  backgroundColor: '#3b3b3b', // Ash color
  textColor: '#fff',
  cardBackgroundColor: '#444',
  cardTextColor: '#fff',
};

const About = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <Container className="about-container" style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.textColor }}>
        <Typography variant="h3" className="about-heading" style={{ color: currentTheme.textColor }}>About Us</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="about-card" style={{ backgroundColor: currentTheme.cardBackgroundColor, color: currentTheme.cardTextColor }}>
              <CardMedia
                component="img"
                alt="Company History"
                height="350"
                image="/images/lambo.jpg"
                className="about-image"
              />
              <CardContent>
                <Typography variant="h5" className="about-card-heading" style={{ color: currentTheme.cardTextColor }}>Our History</Typography>
                <Typography variant="body2" style={{ color: currentTheme.cardTextColor }}>We have a rich history of excellence and innovation that dates back to our founding in 1990...</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="about-card" style={{ backgroundColor: currentTheme.cardBackgroundColor, color: currentTheme.cardTextColor }}>
              <CardMedia
                component="img"
                alt="Our Mission"
                height="350"
                image="/images/factory.jpeg"
                className="about-image"
              />
              <CardContent>
                <Typography variant="h5" className="about-card-heading" style={{ color: currentTheme.cardTextColor }}>Our Mission</Typography>
                <Typography variant="body2" style={{ color: currentTheme.cardTextColor }}>Our mission is to deliver high-quality products that bring value to our customers and improve their lives...</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="about-card" style={{ backgroundColor: currentTheme.cardBackgroundColor, color: currentTheme.cardTextColor }}>
              <CardMedia
                component="img"
                alt="Our Team"
                height="350"
                image="/images/team.jpg"
                className="about-image"
              />
              <CardContent>
                <Typography variant="h5" className="about-card-heading" style={{ color: currentTheme.cardTextColor }}>Our Team</Typography>
                <Typography variant="body2" style={{ color: currentTheme.cardTextColor }}>Meet the talented individuals behind our success...</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="about-card" style={{ backgroundColor: currentTheme.cardBackgroundColor, color: currentTheme.cardTextColor }}>
              <CardMedia
                component="img"
                alt="Our Values"
                height="350"
                image="/images/values.png"
                className="about-image"
              />
              <CardContent>
                <Typography variant="h5" className="about-card-heading" style={{ color: currentTheme.cardTextColor }}>Our Values</Typography>
                <Typography variant="body2" style={{ color: currentTheme.cardTextColor }}>We uphold values of integrity, quality, and innovation in everything we do...</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StyledThemeProvider>
  );
};

export default About;
