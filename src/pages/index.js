import { Box } from '@mui/material';
import Container from '@/design-system/Layout';
import Category from '@/design-system/Category';
import LinkShortCut from '@/design-system/LinkShortCut';

import categoriesList from '@/utils/cat_categories';

export default function Home({ categories }) {
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
    </Container>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return { props: { categories: categoriesList } }
}