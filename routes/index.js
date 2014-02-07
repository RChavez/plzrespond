
exports.index = function (req, res) {
	res.render('index.html');
}

exports.inventory = function(req, res) {
	res.render('inventory.html');
}

exports.chat = function(req, res) {
	res.render('chat.html');
}

exports.logout = function(req, res) {
	res.render('logout.html');
}