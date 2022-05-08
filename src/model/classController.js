class Controller  {
  constructor(dbInstance) {
    this.instance = dbInstance;
  }

  async create(table, params) {
    const newRecord = this.instance.prepareInsert(table, params);
    return newRecord.run(...Object.values(params));
  }

  async update(table, id, params = {}, condition) {
    const updateRecord = this.instance.prepareUpdate(table, params, condition);
    return updateRecord.run();
  }

  async delete(query) {
    const removeRecord = this.instance.execute(query);
    return removeRecord.run();
  }

  async get(query) {
    const row = this.instance.execute(query);
    return row.all();
  }
}

export default Controller;