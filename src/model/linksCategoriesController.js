import Controller from './classController';

const table = 'links_categories';

class LinksCategories extends Controller {
  async createCategory (params) {
    const response = await this.create(table, params);
    return response.changes >= 1;
  }

  async updateCategory (id, params) {
    const condition = `id=${id}`;
    const response = await this.update(table, id, params, condition);
    return response.changes;
  }

  async deleteCategory (id) {
    const response = await this.delete(`DELETE FROM ${table} WHERE id=${id}`);
    return response.changes;
  }

  async getCategories (id) {
    let query = `SELECT * FROM ${table}`;
    if (id) {
      query += ` where id = ${id}`;
    }
    return this.get(query);
  }
}

export default LinksCategories;