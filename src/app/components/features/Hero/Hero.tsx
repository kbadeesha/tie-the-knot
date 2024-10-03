// src/components/Hero.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Hero: React.FC = () => {
  return (
    <Box 
        sx={{ 
            position: 'relative', 
            overflow: 'hidden',
            height: '100vh', // Adjust as needed
        }}
    >
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
        >
            <source src="/assets/video/hero.mp4" type="video/mp4" /> {/* Replace with your video path */}
            Your browser does not support the video tag.
        </video>

        <Container maxWidth="md" sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'white', // Adjust text color as needed
        }}>
            <Typography variant="h2" component="h1" gutterBottom className="text-4xl sm:text-6xl font-bold">
                Welcome to My Website
            </Typography>
            <Typography variant="h5" component="h2" className="text-xl sm:text-2xl">
                Your captivating tagline goes here
            </Typography>
        </Container>
    </Box>
  );
};

export default Hero;