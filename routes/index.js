
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

exports.login = function(req, res) {
	res.render('login.html');
}

exports.createlogin = function(req, res) {
	res.render('createlogin.html');
}