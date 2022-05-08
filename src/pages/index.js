import { useSetRecoilState } from 'recoil';

import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Container from '@/design-system/Layout';
import Category from '@/design-system/Category';
import useTheme from '@mui/system/useTheme';
import LinkShortCut from '@/design-system/LinkShortCut';

import DialogCategories from '@/components/Dialogs/Categories'

import categoriesList from '@/utils/cat_categories';

import { dialogCategoriesUi } from '@/recoil/atoms/ui';

const useStyles = (theme) => ({
  floatButton: {
    position: 'absolute',
    height: 'auto',
    bottom: theme.spacing(4),
    right: theme.spacing(5),
  },
});

export default function Home({ categories }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const setDialog = useSetRecoilState(dialogCategoriesUi);
  return (
    <Container>
      {
        categories.map((category) => (
          <Category categoryName={category.name} key={category.id}>
            {category.linksArray.map((link) => (
              <Category.Item key={link.name}>
                <LinkShortCut icon={link.icon} linkName={link.name} link={link.link} />
              </Category.Item>
            ))}
          </Category>
        ))
      }
      <Box sx={classes.floatButton}>
        <Fab color="secondary" aria-label="add" onClick={() => setDialog({ open: true, data: {}})}>
          <AddIcon />
        </Fab>
      </Box>
      <DialogCategories title="Categoría"/>
    </Container>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return { props: { categories: categoriesList } }
}