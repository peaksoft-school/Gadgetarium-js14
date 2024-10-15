import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { banner, iphone, macBook, product } from '../../assets/icon';

const imageSets = [
  {
    background: banner,
    image:
      'https://s3-alpha-sig.figma.com/img/2499/26ce/a56b1431e4ac5d9fd0bb563d7abca245?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzuoE1TKhTVUhYSfOXqivF~Xv1aqxsAqnqYFFed-mqGh7FJ9h61QeS4cfFIXxeqAuhFE0wdE7TO5PeWClG2SPoCxUn7HHxVvuzlc4RzI44pSXAGM52HN9CgiO7m5Os6QMXNUSUbwOMStQAOPH8k7WDrXOozkNGZ4JH~RggLhpD8IjEzwxKfPqAEMcRzLTN1WtIewo115LXpJ6KROJd62u6jn~jNL3KukD2jLn4xCfzKOumVi15mVvYQLsZOCvYaZykKOrnR2SccyidyxJFA6p7neMrlcd-S19IBbfT3qVf34HywTrRANA9OMeOW3~v20hIVis9zQiQZyCgT0EbIY1Q__',
  },
  {
    background: iphone,
  },
  {
    background: macBook,
  },
  {
    background: product,
  },
];

const BannerSlider = () => {
  const [currentSet, setCurrentSet] = useState(imageSets[0]);
  const [fade, setFade] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSet((prev) => {
          const currentIndex = imageSets.indexOf(prev);
          const nextIndex = (currentIndex + 1) % imageSets.length;
          setActiveIndex(nextIndex);
          return imageSets[nextIndex];
        });
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <StyledBox
        fade={fade}
        style={{ backgroundImage: `url(${currentSet.background})` }}
      >
        {currentSet.image && <StyledImage src={currentSet.image} alt="" />}
      </StyledBox>
      <DotContainer>
        {imageSets.map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </DotContainer>
    </div>
  );
};

export default BannerSlider;

const StyledBox = styled(Box)(({ fade }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '500px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'opacity 0.5s ease-in-out',
  opacity: fade ? 0 : 1,
}));

const StyledImage = styled('img')(() => ({
  position: 'absolute',
  top: '30px',
  right: '480px',
  width: '243px',
  height: '470px',
  zIndex: 1,
}));

const DotContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '8px',
}));

const Dot = styled('div')(({ active }) => ({
  width: active ? '12px' : '7px',
  height: active ? '12px' : '7px',
  borderRadius: '50%',
  backgroundColor: active ? '#cb11ab' : '#e8c7e2',
  transition: 'background-color 0.3s, width 0.3s, height 0.3s',
}));
