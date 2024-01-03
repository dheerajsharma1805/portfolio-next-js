import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "@/app/page.module.css";

const MySummary = () => {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <Grid container>
        <Grid item width={500}>
          <div>
            <Grid item className={styles.gridItem}>
              <Image
                src="/selfPic.jpeg"
                width={300}
                height={200}
                alt="Profile"
                className={styles.profileImage}
              />
            </Grid>
          </div>
          <Typography variant="h3">Software Developer</Typography>
          <Typography variant="body1">
            Hi there! My name is Dheeraj Sharma and I’m a software engineer with
            over 2 years of experience in the industry. I love all the things 
            related to tech and coding, and I’m open to learn and share my learnings with you .
          </Typography>
          <br />
          <br />
          <Typography>
            I thrive on problem-solving, embracing challenges with a logical
            approach and transforming complexities into efficient and scalable
            solutions. Continuous learning and collaboration are integral parts
            of my journey, ensuring that I stay at the forefront of
            technological advancements.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default MySummary;
//   <Grid
//     container
//     justifyContent="center"
//     alignItems="center"
//   >
//     <Grid item xs={10} md={6}>
//       <Paper elevation={3}>
//         <Typography variant="h4">
//           Software Developer Portfolio
//         </Typography>
//         <Typography variant="body1">
//           As a dedicated software developer, I am passionate about crafting
//           innovative solutions using cutting-edge technologies. My expertise
//           spans across various domains including front-end development with
//           HTML, CSS, and JavaScript, as well as back-end proficiency with
//           languages like Python, Java, and Node.js.
//         </Typography>
//         <Typography variant="body1">
//   I thrive on problem-solving, embracing challenges with a logical
//   approach and transforming complexities into efficient and scalable
//   solutions. Continuous learning and collaboration are integral
//   parts of my journey, ensuring that I stay at the forefront of
//   technological advancements.
//         </Typography>
//       </Paper>
//     </Grid>
//   </Grid>
