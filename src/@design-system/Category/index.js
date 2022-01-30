import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Divider, Typography, Grid, IconButton } from "@mui/material";
import LinksLayout from './LinksLayout';

const useStyles = () => ({
  titleWrapper:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    '& > svg': {
      fontSize: '3rem',
    }
  },
  title: {
    textShadow: '1px 1px 1px #000',
  }
});

function Category({children, categoryName, ...others}) {
  const styles = useStyles();
  return (
    <Box mt={6} mb={6} {...others}>
      <Box mb={3} sx={styles.titleWrapper}>
        <Box sx={styles.titleSection}>
          <ChevronRightIcon />
          <Typography component="h3" variant="h3" sx={styles.title}>{categoryName}</Typography>
        </Box>
        <IconButton color="text">
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Divider />
      <Grid container spacing={2} sx={{marginBottom: 5, marginTop: 5}}>
        {children}
      </Grid>
    </Box>
  )
}

Category.Item = LinksLayout;

export default Category;