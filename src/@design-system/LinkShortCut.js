import React from 'react';

import PaperMui from '@mui/material/Paper';
import { Box, Link, Typography } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import { styled } from '@mui/material/styles';

const PaperStyled = styled(PaperMui)(({ theme }) => ({
  '&.MuiPaper-root': {
    cursor: 'pointer',
    height: theme.typography.pxToRem(160),
    width: theme.typography.pxToRem(160),
    background: 'inherit',
    borderRadius: theme.shape.borderRadiusXl,
    overflow: 'hidden',
    padding:  theme.spacing(3),
    position: 'relative',
    '&::before': {
      boxShadow: 'inset 0 0 2000px rgb(255 255 255 / 50%)',
      filter: 'blur(10px)',
    },
    '&:hover': {
      backgroundImage: 'linear-gradient(0deg, #ffffff 0%, #e3e0f3 100%)',
    }
  }
}));

const imgStyled = (theme) => ({
  width: '100%',
  height: '100%',
  borderRadius: theme.shape.borderRadius,
});

const nameStyled = (theme) => ({
  textShadow: '1px 1px 1px #000',
});

const linkStyled = () => ({
  textDecoration: 'none',
  textDecorationColor: 'unset',
  '-webkit-text-decoration': 'none',
});

function LinkShortCut({ children, icon, linkName, link, others}) {
  const theme = useTheme();
  const imgStyle = imgStyled(theme);
  const nameStyle = nameStyled(theme);
  let iconComponent = <Box />;
  
  if(icon) {
    iconComponent = <Box component="img" src={icon} sx={imgStyle} />
  }

  return (
    <Link rel="noreferrer" href={link} sx={linkStyled()}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <PaperStyled elevation={3} {...others} >
          {iconComponent}
        </PaperStyled>
        {
          linkName && 
          (
            <Box mt={1}>
              <Typography variant="body1" color="white" sx={nameStyle}>{linkName}</Typography>
            </Box>
          )
        }
      </Box>
    </Link>
  );
}

export default LinkShortCut;