"use client"
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import styles from '@/app/page.module.css';

interface CardsProps {
  skillTitle: string;
  skillDescription: string;
  imageUrl: string;
}

const Cards: React.FC<CardsProps> = ({ skillTitle, skillDescription, imageUrl }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: '20px' }} className={styles.magnifying}>
      <Card style={{ backgroundColor: '#000', color: '#fff' }} sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {skillTitle}
          </Typography>
          <Typography variant="body2" title={skillDescription} className={styles.ellipsis}>
            {skillDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={handleOpen}>
            Details
          </Button>
        </CardActions>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <DialogContent style={{ backgroundColor: '#000', color: '#fff' }} >
            <Card style={{ backgroundColor: '#000', color: '#fff' }}>
              <CardMedia sx={{ height: 300 }} image={imageUrl} title="Expanded Image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {skillTitle}
                </Typography>
                <Typography variant="body1">{skillDescription}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </CardActions>
            </Card>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
};

export default Cards;
