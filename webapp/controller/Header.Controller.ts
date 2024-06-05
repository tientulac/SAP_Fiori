import Controller from "sap/ui/core/mvc/Controller";
import { BaseEntity } from "../model/Base.Entity";
import Text from "sap/m/Text";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @name ui5.walkthrough.controller.Header
 */
export default class HeaderController extends Controller {
    baseEntity: BaseEntity;

    onInit(): void {
        this.baseEntity = new BaseEntity(1, 'Test');
    }

    onShowHello(): void {
        console.log(this.baseEntity);
        this.getView()?.setModel(new JSONModel({ baseEntity: this.baseEntity }));
    }
};