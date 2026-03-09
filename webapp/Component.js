sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel", 
	"demo/walkthrough/controller/HelloDialog"
], (UIComponent, JSONModel, HelloDialog) => {
	"use strict";

	return UIComponent.extend("demo.walkthrough.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model on view
			const oData = {
				recipient: {
					name: "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		exit: function() {
			if (this._helloDialog) {
				this._helloDialog.destroy();
			}	
		},

		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});

});
