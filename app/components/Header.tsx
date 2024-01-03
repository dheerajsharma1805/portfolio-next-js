// import { Typography } from '@mui/material'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import styles from "@/app/page.module.css";

// import headerStyle from '@app/styles/Header/header.module.css';
// import Image from 'next/image';


const Header = () => {

  return (
    <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={7} style={{paddingLeft:"30px"}}>
          <Link
            href="/"
            target="_parent"
            rel="noopener noreferrer"
          >
            <Typography variant='h4'>
              <span style={{color:"red"}}>D</span>heeraj <span style={{color:"red"}}>S</span>harma
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid className={styles.magnifying} item xs={3}>
              <Link className="link" href={"/"} target='_parent'>
                <HomeIcon/>
                <Typography className={styles.menuItem} variant='h5'>
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid className={styles.magnifying} item xs={3}>
              <Link className="link" href={"/about"} target='_parent'>
                <AssignmentIndIcon/>
                <Typography className={styles.menuItem} variant='h5'>
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid className={styles.magnifying} item xs={3}>
              <Link className="link" href={"/contact"} target='_parent'>
                <ConnectWithoutContactIcon/>
                <Typography className={styles.menuItem} variant='h5'>
                  Contacts
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Header;