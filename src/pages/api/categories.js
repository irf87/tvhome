import categoriesList from '@/utils/cat_categories';

export default function handler(req, res) {
  res.status(200).json(categoriesList);
}
