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
