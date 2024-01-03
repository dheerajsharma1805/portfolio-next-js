import React from 'react';
import { skills } from '../tempFile/tempArray';
import { Grid } from '@mui/material';
import Cards from '../components/Cards';

const page = () => {
  return (
    <div>
        <Grid container justifyContent={"space-between"}>
            {
              skills.map((skill, index) => {
                return (
                  <Grid key={index} item xs={12} md={12} lg={6}>
                    <Cards skillTitle={skill.skillTitle} skillDescription={skill.skillDescription} imageUrl={skill.imageUrl}/>
                  </Grid>
                )
              })
            }
          </Grid>
    </div>
  )
}

export default page