'use client'
import React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import styles from "@/app/page.module.css";
import ContactsCards from "../components/ContactsCards";

const ContactsPage: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    maxWidth: 300,
    margin: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: "#000",
    color: "#fff",
  };

  const iconStyle: React.CSSProperties = {
    marginRight: "8px",
    fontSize: "28px",
    verticalAlign: "middle",
    color: "#007bff",
  };

  const contactData = [
    {
      title: "GitHub",
      visitTitle: "Visit GitHub",
      url: "https://github.com/dheerajsharma1805",
      icon: <GitHubIcon style={iconStyle} />
    },
    {
      title: "LinkedIn",
      visitTitle: "Visit LinkedIn",
      url: "https://www.linkedin.com/in/dheeraj-sharma-2b2053162/",
      icon: <LinkedInIcon style={iconStyle} />
    },
    {
      title: "Twitter",
      visitTitle: "Visit Twitter",
      url: "https://twitter.com/I__am_dheeraj",
      icon: <TwitterIcon style={iconStyle} />
    },
    {
      title: "Email",
      visitTitle: "Send Email",
      url: "mailto:dheerajsharma2709@gmail.com",
      icon: <EmailIcon style={iconStyle} />
    }
  ];

  return (
    <div>
      <Typography textAlign={"center"} variant="h1" style={{ color: "#885239",  marginBottom:"50px"}}>
        Lets Connect!
      </Typography>
      <Grid container justifyContent="center">
        {contactData.map((data, index) => (
          <ContactsCards
            key={index}
            title={data.title}
            visitTitle={data.visitTitle}
            url={data.url}
            cardStyle={cardStyle}
            iconStyle={iconStyle}
          >
            {data.icon}
          </ContactsCards>
        ))}
      </Grid>
    </div>
  );
};

export default ContactsPage;
