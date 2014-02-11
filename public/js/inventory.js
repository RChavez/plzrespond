var inventory_data = require("../data.json");

exports.addItem = function(req, res) {
	if(req.query.item_name == "") {
		res.render('tester', inventory_data);
	}
	else {
		var newItem = {
			"item_name": req.query.item_name,
			"quantity": req.query.quantity,
			"threshold": req.query.threshold,
			"modified_by": "Ryan Chavez" /* NEED TO CHANGE TO ACTUAL USER LATER */

		}
		inventory_data["items"].push(newItem);
		res.render('tester', inventory_data);
	}
}