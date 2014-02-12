var inventory_data = require("../data.json");

exports.addItem = function(req, res) {
	if(req.query.item_name == "") {
		res.redirect('/inventory');
	}
	else {
		var newItem = {
			"item_name": req.query.item_name,
			"quantity": req.query.quantity,
			"threshold": req.query.threshold,
			"modified_by": "Ryan Chavez"

		}
		inventory_data["items"].unshift(newItem);
		res.redirect('/inventory');
	}
}

exports.search = function(req, res) {
	if (req.query.item_name == "") {
		res.redirect('inventory');
	}
	var i;
	var results = 
		{ 
			"items": [
			]
	}
	for (i = 0; i < inventory_data["items"].length; i++) {
		var searchField = req.query.item_name.toLowerCase();
		var iterator = inventory_data["items"][i].item_name.toLowerCase();
		if (iterator.indexOf(searchField) != -1) {
			results["items"].unshift(inventory_data["items"][i]);
		}
	}
	res.render('inventory', results);
}