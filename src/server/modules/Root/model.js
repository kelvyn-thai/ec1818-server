const mongoose = require('mongoose');

class RootCollection {
  constructor() {
  }

  setModel(name, schema) {
    this.Model = mongoose.model(name, schema);
  }

  getModel() {
    return this.Model;
  }

  // setAutoIncrement(options, schema) {
  //   schema.plugin(this.autoIncrement.plugin, options.name);
  //   this.Model = this.connection.model(options.name, schema);
  // }

  find(conditions = {}, projection = '', options = {}) {
    return new Promise((resolve, reject) => {
      this.Model.find(conditions, projection, options, (err, docs) => {
        err ? reject(err) : resolve(docs);
      });
    })
  }

  findOne(conditions = {}, projection = '') {
    return new Promise((resolve, reject) => {
      this.Model.findOne(conditions, projection, (error, doc) => {
        error ? reject(error) : resolve(doc);
      });
    })
  }

  save(data) {
    return new Promise((resolve, reject) => {
      const newDoc = new this.Model({
        ...data,
        date_created: this.beforeCreate()
      });
      newDoc.save((error) => {
        error ? reject(error) : resolve(newDoc.save());
      })
    })
  }

  findByIdAndUpdate(id = '', data = {}, options = {
    new: true
  }) {
    return new Promise((resolve, reject) => {
      data.date_modify = this.beforeUpdate();
      this.Model.findByIdAndUpdate(id, data, options, (error, doc) => {
        error ? reject(error) : resolve(doc);
      });
    })
  }

  findById(id = '', projection = '') {
    return new Promise((resolve, reject) => {
      this.Model.findById(id, projection, (error, doc) => {
        error ? reject(error) : resolve(doc);
      });
    })
  }

  findByIdAndDelete(id = '', options = {}) {
    return new Promise((resolve, reject) => {
      this.Model.findByIdAndDelete(id, options, (err, doc) => {
        err ? reject(err) : resolve(doc);
      });
    })
  }

  remove(conditions = {}) {
    return new Promise((resolve, reject) => {
      this.Model.remove(conditions, (err) => {
        err ? reject(null) : resolve('Remove all docs');
      })
    })
  }

  beforeCreate() {
    return new Date().getTime();
  }
  beforeUpdate() {
    return new Date().getTime();
  }
}

module.exports = RootCollection;
