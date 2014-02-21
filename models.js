var Mongoose = require('mongoose');


var inventorySchema = Mongoose.Schema({
  item_name: String,
  quantity: String,
  threshold: String,
  modified_by: String,
  last_modified: {type: Date, default: Date.now}
});

exports.Item = Mongoose.model('Item', inventorySchema);