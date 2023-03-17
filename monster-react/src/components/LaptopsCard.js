import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

 const LaptopsCard = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/data')
      .then(response => response.json())
      .then(res => setDataList(res))
  }, []);
  return (
    <div className='laptop-container'>
    {dataList.map(copiedData => {
      return (
        <Card className='card-container' key={copiedData.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div className='cardMedia'>
          <CardMedia
            className='cards-image'
            component="img"
            height="280"
            image={copiedData.images}
          />
        </div>
        <CardContent className='contentCard'>
          <Typography className='titleCard' gutterBottom variant="h5" component="div">
            {copiedData.title}
          </Typography>
        <hr/>
          <Typography className='descriptionCard' variant="body2" color="text.secondary">
            {copiedData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='cardsPrice'><h5>{copiedData.price}</h5></div>
      <CardActions className='actionCards'>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
      )
    })}
  </div> 
  );
}
export default LaptopsCard;