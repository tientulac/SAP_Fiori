import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "ui5.walkthrough.view.App"
}).then(function (view) {
    view.placeAt("content");
});

XMLView.create({
    viewName: "ui5.walkthrough.view.Header"
}).then(function (view) {
    view.placeAt("content-header");
});