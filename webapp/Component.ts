import Control from "sap/ui/core/Control";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import { BaseEntity } from "./model/Base.Entity";
import Device from "sap/ui/Device";

/**
* @namespace ui5.walkthrough
*/
export default class Component extends UIComponent {

    baseEntity: BaseEntity;

    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json"
    };

    init(): void {
        // call the init function of the parent
        super.init();
        // set i18n model
        const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
        this.baseEntity = new BaseEntity(1, 'Test', 2000);
        this.setModel(new JSONModel({ baseEntity: this.baseEntity }));
         // set device model
         const deviceModel = new JSONModel(Device);
         deviceModel.setDefaultBindingMode("OneWay");
         this.setModel(deviceModel, "device");
        // create the views based on the url/hash
        this.getRouter().initialize();
    };

    createContent(): Control | Promise<Control | null> | null {
        return XMLView.create({
            "viewName": "ui5.walkthrough.view.App",
            "id": "app"
        });
    };
};