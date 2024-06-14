import Controller from "sap/ui/core/mvc/Controller";
import { BaseEntity } from "../model/Base.Entity";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import MessageToast from "sap/m/MessageToast";
import Component from "../Component";

/**
 * @name ui5.walkthrough.controller.Header
 */
export default class HeaderController extends Controller {
    baseEntity: BaseEntity;

    onInit(): void {

    }
    onShowHeader(): void {
        const baseEntity = (<JSONModel>this.getView()?.getModel())?.getProperty("/baseEntity");
        MessageToast.show(`name: ${baseEntity.name} - age: ${baseEntity.age}`);
    }

    goToDetail(): void {
        const router = (<Component>this.getOwnerComponent()).getRouter();
        router.navTo("detail", {
            invoicePath: 'paramURL'
        });
    }
};