import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState, useEffect } from 'react';

const AccessoriesCard = () => {
  const [apiData, setApiData] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3004/posts')
      .then(response => response.json())
      .then(res => setApiData(res))
  }, []);
  return (
    <div className='map-container'>
    {apiData.map(copyData => {
      return (
        <Card className='muiCard' key={copyData.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          className='cardImage'
          component="img"
          height="210"
          image={copyData.images}
          alt="green iguana"
        />
        <CardContent className='cardContent'>
          <Typography className='cardTitle' gutterBottom variant="h5" component="div">
          {copyData.title}
          </Typography>
          <Typography className='cardDescription' variant="body2" color="text.secondary">
            {copyData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='cardPrice'><h5>{copyData.price}</h5></div>
      <CardActions className='cardActions'>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
      )
    })} 
  </div>
  );
};
export default AccessoriesCard;