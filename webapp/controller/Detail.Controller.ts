import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class Detail extends Controller {

    onInit(): void {
        const router = (<Component> this.getOwnerComponent()).getRouter();
        router.getRoute("detail")?.attachPatternMatched(this.onObjectMatched, this);
    }

    onObjectMatched(event: Route$PatternMatchedEvent): void {
        const param = window.decodeURIComponent( (<any> event.getParameter("arguments")).invoicePath);
        console.log(param);
        this.getView()?.bindElement({
            path: "/" + param,
            model: "invoice"
        });
    }
};