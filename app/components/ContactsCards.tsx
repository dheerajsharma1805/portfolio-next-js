import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from "@/app/page.module.css";

interface Props {
  title: string;
  visitTitle: string;
  url: string;
  cardStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
  children: React.ReactNode; // Define children in the Props interface
}

const ContactsCards: React.FC<Props> = ({
  title,
  visitTitle,
  url,
  cardStyle,
  children, // Destructure children from props
}) => {
  return (
    <Card style={cardStyle} className={styles.magnifying}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {/* Wrap children and visitTitle within a container */}
          <div>
            {children}
            <span style={{color:"#fff"}}>{visitTitle}</span>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ContactsCards;
