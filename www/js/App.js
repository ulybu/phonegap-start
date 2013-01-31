// Copyright 2013, $ORGANIZATION
// All rights reserved.
enyo.kind({
	name: "App",
	kind: "Control",
	published: {
	},
	events: {
	},
	components: [
		{kind: "onyx.Toolbar", name: "toolbar"}
	],
	create: function() {
		this.inherited(arguments);
		// initialization code goes here
	}
});
