import Controller from "sap/ui/core/mvc/Controller";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import { BaseEntity } from "../model/Base.Entity";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
    baseEntity: BaseEntity;

    onInit(): void {

    }
    onShowHello(): void {
        // read msg from i18n model
        const baseEntity = (<JSONModel>this.getView()?.getModel())?.getProperty("/baseEntity/name");
        const resourceBundle = <ResourceBundle>(<ResourceModel>this.getView()?.getModel("i18n"))?.getResourceBundle();
        const msg = resourceBundle.getText("helloMsg", [baseEntity]) || "no text defined";
        // show message
        MessageToast.show(msg);
    }
};