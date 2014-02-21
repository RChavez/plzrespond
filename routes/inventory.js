var models = require('../models')

function compareDate(a,b) {
  if (a.last_modified > b.last_modified)
     return -1;
  if (a.last_modified < b.last_modified)
    return 1;
  return 0;
}

exports.findAll = function(req, res) {
    models.Item
        .find()
        .exec(afterFind);

    function afterFind(err, items) {
        var invItems = { 
            "items": [
            ], 
            "name" : req.session.name
        }
        var i;
        for(i=0; i < items.length; i++) {
            invItems["items"].push(items[i]);
        }
        invItems["items"].sort(compareDate);
        res.render('inventory', invItems);
    }
}

exports.addItem = function(req, res) {
    var newItem = new models.Item({
        item_name: req.query.item_name,
        quantity: parseInt(req.query.quantity, 10),
        threshold: parseInt(req.query.threshold, 10),
        modified_by: req.query.modified_by
    })

    newItem.save(afterAdd);

    function afterAdd(err, items) {
        res.redirect('/inventory')
    }
}

exports.removeItem = function(req, res) {
    models.Item
        .find({ "_id": req.query.item_id})
        .remove()
        .exec(afterRemove);

    function afterRemove(err, items) {
        if(err) {
            console.log(err);
            res.send(500);
        }
        res.redirect('/inventory')
    }
}

exports.search = function(req, res) {
    if (req.query.item_name == "") {
        res.redirect('inventory');
    }
    var target = req.query.item_name;
    models.Item
        .find({ "item_name": { $regex: new RegExp(".*"+ target +".*", "i") } })
        .exec(afterSearch);

    function afterSearch(err, items) {
        console.log(items);
        var invItems = { 
            "items": [
            ]
        }
        var i;
        for(i=0; i < items.length; i++) {
            invItems["items"].push(items[i]);
        }
        invItems["items"].sort(compareDate);
        res.render('inventory', invItems);
    }
}

function compareName(a,b) {
  if (a.item_name < b.item_name)
     return -1;
  if (a.item_name > b.item_name)
    return 1;
  return 0;
}

function compareQuantity(a,b) {
  if (a.quantity < b.quantity)
     return -1;
  if (a.quantity > b.quantity)
    return 1;
  return 0;
}

function compareThreshold(a,b) {
  if (a.threshold < b.threshold)
     return -1;
  if (a.threshold > b.threshold)
    return 1;
  return 0;
}

exports.sortByName = function(req, res) {
    models.Item
        .find()
        .exec(afterFind);

    function afterFind(err, items) {
        var invItems = { 
            "items": [
            ], 
            "name" : req.session.name
        }
        var i;
        for(i=0; i < items.length; i++) {
            invItems["items"].push(items[i]);
        }
        invItems["items"].sort(compareName);
        res.render('inventory', invItems);
    }
}

// ADD THESE BACK FOR MORE SORTING FUNCTIONALITY
exports.sortByQuantity = function(req, res) {
    models.Item
        .find()
        .exec(afterFind);

    function afterFind(err, items) {
        var invItems = { 
            "items": [
            ], 
            "name" : req.session.name
        }
        var i;
        for(i=0; i < items.length; i++) {
            invItems["items"].push(items[i]);
        }
        invItems["items"].sort(compareQuantity);
        res.render('inventory', invItems);
    }
}

exports.sortByThreshold = function(req, res) {
    models.Item
        .find()
        .exec(afterFind);

    function afterFind(err, items) {
        var invItems = { 
            "items": [
            ], 
            "name" : req.session.name
        }
        var i;
        for(i=0; i < items.length; i++) {
            invItems["items"].push(items[i]);
        }
        invItems["items"].sort(compareThreshold);
        res.render('inventory', invItems);
    }
}

exports.sortByModified = function(req, res) {
    models.Item
        .find()
        .exec(afterFind);

    function afterFind(err, items) {
        var invItems = { 
            "items": [
            ], 
            "name" : req.session.name
        }
        var i;
        for(i=0; i < items.length; i++) {
            invItems["items"].push(items[i]);
        }
        invItems["items"].sort(compareModifiedBy);
        res.render('inventory', invItems);
    }
}