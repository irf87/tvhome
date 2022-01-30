import { styled } from '@mui/material/styles';
import ContainerMui from '@mui/material/Container';
import Box from '@mui/material/Box';
import useTheme from '@mui/system/useTheme';

const ContainerStyled = styled(ContainerMui)(() => ({
  '&.MuiContainer-root': {
    /*height: '100vh'*/
  }
}));

const WrapperStyle = (theme) => {
  return {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.green.main,
    backgroundImage: `linear-gradient(19deg, ${theme.palette.green.main}, ${theme.palette.purple.main} 100%)`,
    overflow: 'auto',
  }
}

function Layout({...others}) {
  const theme = useTheme();
  const useStyle = WrapperStyle(theme);
  return (
    <Box sx={useStyle}>
      <ContainerStyled {...others} />
    </Box>
  );
}

Layout.propTypes = {
  ...ContainerMui.propTypes,
};

export default Layout;