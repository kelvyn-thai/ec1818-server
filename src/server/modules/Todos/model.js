const RootModel = require('../Root/model');
const schema = require('./schema');

class TodosModel extends RootModel {
    constructor() {
        super();
        this.setModel('Todos', schema);
    }

    static getTodosModel() {
        return new TodosModel();
    }
}


module.exports = TodosModel.getTodosModel();