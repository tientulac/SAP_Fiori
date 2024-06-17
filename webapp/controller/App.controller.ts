import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "../model/formatter";
import { SearchField$SearchEvent } from "sap/m/SearchField";
import Filter from "sap/ui/model/Filter";
import Sort from "sap/ui/model/Sorter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";
import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
import ObjectListItem from "sap/m/ObjectListItem";
import Component from "../Component";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
    dialog: Dialog;
    public formatter = formatter;
    invoiceEdit: any;

    onInit(): void {
        const viewModel = new JSONModel({
            currency: "VND"
        });
        this.getView()?.setModel(viewModel, "view");
    }

    onFilterInvoices(event: SearchField$SearchEvent): void {
        const list = this.byId("invoiceList");
        const binding = <ListBinding>list?.getBinding("items");
        const filters = [];
        const query = event.getParameter("query");
        const productNameFilter = new Filter({ path: 'ProductName', operator: FilterOperator.Contains, value1: query });
        const shipperNameFilter = new Filter({ path: 'ShipperName', operator: FilterOperator.Contains, value1: query });
        filters.push(productNameFilter, shipperNameFilter);
        query ? binding?.filter(new Filter({ filters: filters, and: false })) : binding?.filter(filters);
    }

    async onOpenConfirmDialog(oEvent: any): Promise<void> {
        this.dialog ??= await <Promise<Dialog>>this.loadFragment({
            name: "ui5.walkthrough.dialog.ConfirmDialog"
        });
        this.dialog.open();
    }

    async onOpenEditDialog(oEvent: any): Promise<void> {
        this.dialog ??= await <Promise<Dialog>>this.loadFragment({
            name: "ui5.walkthrough.dialog.invoice.EditInvoiceDialog"
        });
        this.invoiceEdit = JSON.parse(new JSONModel(oEvent).getJSON());
        this.getView()?.setModel(new JSONModel({ invoiceEdit: this.invoiceEdit }));
        this.dialog.open();
    }

    onCloseDialog(): void {
        (<Dialog>this.byId("confirmDialog"))?.close();
        (<Dialog>this.byId("editInvoiceDialog"))?.close();
    }

    onPressRow(event: Event): void {
        const item = <ObjectListItem>event.getSource();
        const router = (<Component>this.getOwnerComponent()).getRouter();
        const param = window.encodeURIComponent(item?.getBindingContext("invoiceModel")?.getPath().substr(1) ?? '');
        router.navTo("detail", {
            invoicePath: param
        });
    }
};