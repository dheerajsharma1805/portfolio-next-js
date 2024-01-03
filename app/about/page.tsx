import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

interface Experience {
  companyName: string;
  duration: string;
  learned: Array<string>;
}

const experiences: Experience[] = [
  { companyName: "Newput Infotech Pvt. Ltd.", duration: "April 2022 - Present", learned: ["React", "NodeJs", "Express", "Mongodb", "NextJs", "Javascript", "HTML", "CSS"]},
  { companyName: "SGSITS, Indore (M.P.)", duration: "Mar 2017 - Nov 2021", learned: ["C"] },
  // Add more experiences as needed
];

const page: React.FC = () => {
  return (
    <div>
      <Grid
        container
        paddingTop={3}
      >
        <Grid item xs={10} md={8}>
            <Typography variant="h4" gutterBottom>
              Experience
            </Typography>
            {experiences.map((experience, index) => (
              <div key={index} style={{ marginBottom: "1em" }}>
                <Typography variant="h5">{experience.companyName}</Typography>
                <Typography variant="body1">{experience.duration}</Typography>
                <Typography variant="h6">Learnings</Typography>
                {
                  experience.learned.map((learning, index) => {
                    return (
                      <span key={index}>{learning + (index == learning.length - 1 ? " " : ", ")}</span> 
                    )
                  })
                }
                {/* Add more details like roles, responsibilities, etc. if needed */}
              </div>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
