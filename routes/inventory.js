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

exports.addItem = function(req, res) {
    var newItem = new models.Item({
        item_name: req.query.item_name,
        quantity: req.query.quantity,
        threshold: req.query.threshold,
        modified_by: "Joshua K. Liu"
    })

    newItem.save(afterAdd);

    function afterAdd(err, items) {
        res.redirect('/inventory')
    }
}

exports.removeItem = function(req, res) {
    console.log("attempting to remove" + req.query.item_id);
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