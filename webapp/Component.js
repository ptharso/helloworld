sap.ui.define([	"sap/ui/core/UIComponent", "sap/ui/Device", "ns/helloworld/model/models", "ns/helloworld/controller/Hellodialog" ],

function (UIComponent, Device, models, Hellodialog) { "use strict";

	return UIComponent.extend("ns.helloworld.Component", {

		metadata: {	manifest: "json" },

		init: function () {
            
            UIComponent.prototype.init.apply(this, arguments);
            this.setModel(models.createDeviceModel(), "device");
            this.getRouter().initialize();	
            		
			this._helloDialog = new Hellodialog(this.getRootControl());
        },

		getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) { this._sContentDensityClass = "sapUiSizeCompact";} else {this._sContentDensityClass = "sapUiSizeCozy";	}
			}
			return this._sContentDensityClass;
		},        
        
        openHelloDialog : function () {	this._helloDialog.open(); },

		exit : function() {	this._helloDialog.destroy(); delete this._helloDialog;	}
        
	});
});
