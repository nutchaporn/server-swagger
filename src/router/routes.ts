import { EmployeeController } from "../controller/EmployeeController";
import { EmployeeStoreController } from "../controller/EmployeeStoreController";
import { ProductController } from "../controller/ProductController";
import { ProductSizeController } from "../controller/ProductSizeController";
import { ProductStockController } from "../controller/ProductStockController";
import { ProductTypeController } from "../controller/ProductTypeController";
import { RoleController } from "../controller/RoleController";
import { SaleLogController } from "../controller/SaleLogController";
import { SaleOrderController } from "../controller/SaleOrderController";
import { StatusController } from "../controller/StatusController";
import { ActionController } from "../controller/ActionController";

export const Routes = [
// Employee
    {
        method: "get",
        route: "/employees",
        controller: EmployeeController,
        action: "all"
    }, {
        method: "get",
        route: "/employees/:id",
        controller: EmployeeController,
        action: "one"
    }, {
        method: "post",
        route: "/employees",
        controller: EmployeeController,
        action: "save"
    },{
        method: "put",
        route: "/employees",
        controller: EmployeeController,
        action: "save"
    }, {
        method: "delete",
        route: "/employees/:id",
        controller: EmployeeController,
        action: "remove"
    },
// Employee - Store
    {
        method: "get",
        route: "/employees&store",
        controller: EmployeeStoreController,
        action: "all"
    }, {
        method: "get",
        route: "/employees&store/:id",
        controller: EmployeeStoreController,
        action: "one"
    }, {
        method: "post",
        route: "/employees&store",
        controller: EmployeeStoreController,
        action: "save"
    }, {
        method: "put",
        route: "/employees&store",
        controller: EmployeeStoreController,
        action: "save"
    }, {
        method: "delete",
        route: "/employees&store/:id",
        controller: EmployeeStoreController,
        action: "remove"
    },

// Product
    {
        method: "get",
        route: "/product",
        controller: ProductController,
        action: "all"
    }, {
        method: "get",
        route: "/product/:id",
        controller: ProductController,
        action: "one"
    }, {
        method: "post",
        route: "/product",
        controller: ProductController,
        action: "save"
    }, {
        method: "put",
        route: "/product",
        controller: ProductController,
        action: "save"
    }, {
        method: "delete",
        route: "/product/:id",
        controller: ProductController,
        action: "remove"
    },
// Product - Storck
    {
        method: "get",
        route: "/product&storck",
        controller: ProductStockController,
        action: "all"
    }, {
        method: "get",
        route: "/product&storck/:id",
        controller: ProductStockController,
        action: "one"
    }, {
        method: "post",
        route: "/product&storck",
        controller: ProductStockController,
        action: "save"
    }, {
        method: "put",
        route: "/product&storck",
        controller: ProductStockController,
        action: "save"
    }, {
        method: "delete",
        route: "/product&storck/:id",
        controller: ProductStockController,
        action: "remove"
    },
// Product - Type
    {
        method: "get",
        route: "/product&type",
        controller: ProductTypeController,
        action: "all"
    }, {
        method: "get",
        route: "/product&type/:id",
        controller: ProductTypeController,
        action: "one"
    }, {
        method: "post",
        route: "/product&type",
        controller: ProductTypeController,
        action: "save"
    }, {
        method: "put",
        route: "/product&type",
        controller: ProductTypeController,
        action: "save"
    }, {
        method: "delete",
        route: "/product&type/:id",
        controller: ProductTypeController,
        action: "remove"
    },
// Product - Size
    {
        method: "get",
        route: "/product&size",
        controller: ProductSizeController,
        action: "all"
    }, {
        method: "get",
        route: "/product&size/:id",
        controller: ProductSizeController,
        action: "one"
    }, {
        method: "post",
        route: "/product&size",
        controller: ProductSizeController,
        action: "save"
    }, {
        method: "put",
        route: "/product&size",
        controller: ProductSizeController,
        action: "save"
    }, {
        method: "delete",
        route: "/product&size/:id",
        controller: ProductSizeController,
        action: "remove"
    },

// Role
    {
        method: "get",
        route: "/role",
        controller: RoleController,
        action: "all"
    }, {
        method: "get",
        route: "/role/:id",
        controller: RoleController,
        action: "one"
    }, {
        method: "post",
        route: "/role",
        controller: RoleController,
        action: "save"
    }, {
        method: "put",
        route: "/role",
        controller: RoleController,
        action: "save"
    }, {
        method: "delete",
        route: "/role/:id",
        controller: RoleController,
        action: "remove"
    },

// Sale
// Sale - Logs
    {
        method: "get",
        route: "/sale&logs",
        controller: SaleLogController,
        action: "all"
    }, {
        method: "get",
        route: "/sale&logs/:id",
        controller: SaleLogController,
        action: "one"
    }, {
        method: "post",
        route: "/sale&logs",
        controller: SaleLogController,
        action: "save"
    }, {
        method: "put",
        route: "/sale&logs",
        controller: SaleLogController,
        action: "save"
    },
// Sale - order
    {
        method: "get",
        route: "/sale&order",
        controller: SaleOrderController,
        action: "all"
    }, {
        method: "get",
        route: "/sale&order/:id",
        controller: SaleOrderController,
        action: "one"
    }, {
        method: "post",
        route: "/sale&order",
        controller: SaleOrderController,
        action: "save"
    }, {
        method: "put",
        route: "/sale&order",
        controller: SaleOrderController,
        action: "save"
    }, {
        method: "delete",
        route: "/sale&order/:id",
        controller: SaleOrderController,
        action: "remove"
    },

// Status
    {
        method: "get",
        route: "/status",
        controller: StatusController,
        action: "all"
    }, {
        method: "get",
        route: "/status/:id",
        controller: StatusController,
        action: "one"
    }, {
        method: "post",
        route: "/status",
        controller: StatusController,
        action: "save"
    }, {
        method: "put",
        route: "/status",
        controller: StatusController,
        action: "save"
    }, {
        method: "delete",
        route: "/status/:id",
        controller: StatusController,
        action: "remove"
    },

// Action
    {
        method: "get",
        route: "/action",
        controller: ActionController,
        action: "all"
    }, {
        method: "get",
        route: "/action/:id",
        controller: ActionController,
        action: "one"
    }, {
        method: "post",
        route: "/action",
        controller: ActionController,
        action: "save"
    }, {
        method: "put",
        route: "/action",
        controller: ActionController,
        action: "save"
    }, {
        method: "delete",
        route: "/action/:id",
        controller: ActionController,
        action: "remove"
    },
];