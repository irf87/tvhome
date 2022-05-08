import categoriesList from '@/utils/cat_categories';
import dbInstance from 'model/sqliteController';
import LinksCategories from 'model/linksCategoriesController';

const ctrl = new LinksCategories(dbInstance);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await ctrl.createCategory(req.body);
    res.status(200).json({ success: result });
  }

  if (req.method === 'GET') {
    const result = await ctrl.getCategories(req.params?.id);
    res.status(200).json({ success: result });
  }

  if (req.method === 'PUT') {
    const result = await ctrl.updateCategory(req.params?.id, req.body);
    res.status(200).json({ success: result });
  }

  if (req.method === 'DELETE') {
    const result = await ctrl.deleteCategory(req.params?.id);
    res.status(200).json({ success: result });
  }

  res.status(400).json({ success: fase, error: 'Unknow method'});
}
