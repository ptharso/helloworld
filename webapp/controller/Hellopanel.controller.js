sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"], 

function (Controller, MessageToast, Fragment) {  "use strict";

    return Controller.extend("ns.helloworld.controller.Hellopanel", {

        onShowHello : function () {

			var sRecipient	= this.getView().getModel("dados").getProperty("/caixa/nome");
			var oBundle 	= this.getView().getModel("i18n" ).getResourceBundle();
            var sMsg        = oBundle.getText("helloMsg");
            MessageToast.show(`${sMsg} ${sRecipient}`);

        },

        onOpenDialog  : function () { this.getOwnerComponent().openHelloDialog(); }  
             
    });
});