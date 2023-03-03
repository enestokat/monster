import React from 'react'
import MonsterStore from '../assets/images/monster-store.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const About = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 className='about' >About</h2>
        <hr />
      </div >
      <div className="about_card">
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="485"
              image={MonsterStore}
              alt="monster store"
              style={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="body3" fontSize={16} color="text.secondary">
                Monster Notebook is a technology brand specializing in high-performance laptops
                and gaming equipment. It has stores and technical services in Istanbul, Ankara,
                and Izmir, and also reaches customers across Turkey through online sales and
                support channels. The company began in 2000 with the goal of becoming a global
                brand, and has since expanded to Cyprus and Dubai. It operates Europe's largest
                gaming experience store in Berlin and plans to expand to the UK in 2022. <br />
                Monster Notebook's vision is to make the world a happier and more livable place 
                with the power of gaming, and its mission is to continuously innovate and break
                traditional methods to help gamers focus on the game and make themselves noticed.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default About;



