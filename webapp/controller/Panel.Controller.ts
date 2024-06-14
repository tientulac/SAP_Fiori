import Controller from "sap/ui/core/mvc/Controller";
import { BaseEntity } from "../model/Base.Entity";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import MessageToast from "sap/m/MessageToast";
import Dialog from "sap/m/Dialog";

/**
 * @name ui5.walkthrough.controller.Panel
 */
export default class PanelController extends Controller {
    baseEntity?: BaseEntity;
    resourceBundle?: ResourceBundle;
    dialog: Dialog;

    onInit(): void {
    }

    getInfo(): void {
        this.baseEntity = (this.getView()?.getModel() as JSONModel)?.getProperty("/baseEntity");
        this.resourceBundle = ((this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle);
    }

    onShowHello(): void {
        this.getInfo();
        if (this.resourceBundle && this.baseEntity) {
            MessageToast.show(this.resourceBundle.getText("helloMsg", [this.baseEntity.name]) || "no text defined");
        } else {
            MessageToast.show('No info');
        }
    }

    async onOpenDialog(): Promise<void> {
        this.dialog ??= await <Promise<Dialog>>this.loadFragment({
            name: "ui5.walkthrough.dialog.SuccessDialog"
        });
        this.dialog.open();
    }

    onCloseDialog(): void {
        (<Dialog>this.byId("successDialog"))?.close();
    }
};