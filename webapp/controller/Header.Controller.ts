import Controller from "sap/ui/core/mvc/Controller";
import { BaseEntity } from "../model/Base.Entity";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import MessageToast from "sap/m/MessageToast";

/**
 * @name ui5.walkthrough.controller.Header
 */
export default class HeaderController extends Controller {
    baseEntity: BaseEntity;

    onInit(): void {

    }
    onShowHello(): void {
    }
};