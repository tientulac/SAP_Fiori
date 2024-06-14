sap.ui.define([
    "../localService/mockServer"
], function (mockserver) {
    "use strict";

    mockserver.init();

    // initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});