'use client'
import { Grid } from '@mui/material'
import Cards from './components/Cards'
import Link from 'next/link';
import { skills } from './tempFile/tempArray';
import React from 'react';

export default function Home() {
  const [showAllSkills, setShowAllSkills] = React.useState(false)

  const skillToShow = skills.slice(0, 4);
  return (
    <main>
        <div>
          <Grid container justifyContent={"space-between"}>
            {
              showAllSkills ? skills.map((skill, index) => {
                return (
                  <Grid key={index} item xs={12} md={12} lg={6}>
                    <Cards skillTitle={skill.skillTitle} skillDescription={skill.skillDescription} imageUrl={skill.imageUrl}/>
                  </Grid>
                )
              }) :
              skillToShow.map((skill, index) => {
                return (
                  <Grid key={index} item xs={12} md={12} lg={6}>
                    <Cards skillTitle={skill.skillTitle} skillDescription={skill.skillDescription} imageUrl={skill.imageUrl}/>
                  </Grid>
                )
              })
            }
          </Grid>
          { skills.length > 4 ? <div style={{textAlign: "center", color:"red"}}>
            <div style={{cursor:"pointer"}} onClick={() => setShowAllSkills(!showAllSkills)}>
              { showAllSkills? "View less" : `View all Skills` }
            </div>
          </div> : ""}
        </div>
    </main>
  )
}
