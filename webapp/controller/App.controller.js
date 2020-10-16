sap.ui.define([ "sap/ui/core/mvc/Controller" ], 

function (Controller) {  "use strict";  
 
    return Controller.extend("helloworld.controller.App", { 

        onInit: function () { this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());	},

        onOpenDialog : function () { this.getOwnerComponent().openHelloDialog(); }

    });   
}
);

