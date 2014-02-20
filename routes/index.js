var inventory_data = require("../data.json");

exports.index = function (req, res) {
	console.log("HERE " + req.session.name);
	res.render('index', { 'name' : req.session.name });
}

exports.inventory = function(req, res) {
	res.render('inventory', inventory_data);
}

exports.chat = function(req, res) {
	res.render('chat', { 'name' : req.session.name });
}

exports.logout = function(req, res) {
	res.render('logout');
}

exports.login = function(req, res) {
	console.log(req.session.name);
	res.render('login');
}

exports.createlogin = function(req, res) {
	res.render('createlogin');
}

exports.accounttype = function(req, res) {
	res.render('accounttype');
}

exports.createteam = function(req, res) {
	res.render('createteam');
}

exports.newteamconfirm = function(req, res) {
	res.render('newteamconfirm');
}

exports.teamcode = function(req, res) {
	res.render('teamcode');
}

exports.soloconfirm = function(req, res) {
	res.render('soloconfirm');
}

exports.success = function(req, res) {
	res.render('success');
}