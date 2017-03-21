var hbs = require("koahub-handlebars");
var helpers = require("handlebars-helpers");

module.exports = function(options) {

	helpers({
	    handlebars: hbs.handlebars
	});
	
    return hbs.middleware(options);
}
