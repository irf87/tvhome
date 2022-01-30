import React from 'react';
import Grid from '@mui/material/Grid';

function LinksGrid({ children, others }) {
  return (<Grid item xs={12} sm={5} md={3} lg={2} {...others} > {children} </Grid>);
}

export default LinksGrid;