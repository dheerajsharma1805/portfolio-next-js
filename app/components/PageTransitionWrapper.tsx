'use client'
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/app/page.module.css"; 

interface Props {
    children: ReactNode; 
  }
  

const PageTransitionWrapper: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsAnimating(false);
    }, 500)
  }, [router]);

  return (
    <div className={`${styles.pageTransition} ${isAnimating ? styles.isAnimating : ''}`}>
      {children}
    </div>
  );
};

export default PageTransitionWrapper;
