//
// CHANT Core Script
// Build script by Alexander Movsisyan
// Site: http://chantlive.com
// All rights reserved
// Revision: 2.0.1
//

var XCore = {

	Regex : {
		mail : /\*/g
	},

	Start : function() {

		window.$ = window['$'] = this.$;
		window.$$ = window['$$'] = this.$$;
		window.a = window['a'] = this.a;
	},

	// CSS most used selector
	$ : function() {
		alert('$');
	},

	// CSS most used selector
	$$ : function() {
		alert('$');
	},

	// Alert() function alias
	a : function(value) {
		alert(value || "NULL");
	},

	// Current version
	Ver : "1.0.1"
}

XCore.Start();
