import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors"
import { Request, Response } from "express";
import { Routes } from "./router/routes";
import { Role } from "./entity/Role";
import { Status } from "./entity/Status";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger/swagger.json");
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(express.json())
    app.use(cors());
    app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // start express server
    app.listen(3000);
    console.log("server listen prot 3000")
    
    //Update Role
    console.log("Create Role");
    const role = new Role()
    role.id = 1;
    role.name = "Admin";
    await connection.manager.save(role)
    role.id = 2
    role.name = "Member"
    await connection.manager.save(role);
    role.id = 3
    role.name = "Owner"
    await connection.manager.save(role);
    console.log("Create Role Success");
    console.log("Loading Role from database")
    const roles = await connection.manager.find(Role)
    console.log(roles)

    //Update Status
    console.log("Create Status");
    const status = new Status()
    status.id = 1;
    status.name = "Success";
    await connection.manager.save(status)
    status.id = 2;
    status.name = "Panding";
    await connection.manager.save(status)
    status.id = 3;
    status.name = "In progress";
    await connection.manager.save(status)
    status.id = 4;
    status.name = "Cancel";
    await connection.manager.save(status)
    console.log("Create Status Success");
    console.log("Loading Status from database")
    const statuss = await connection.manager.find(Status)
    console.log(statuss)

}).catch(error => console.log(error));
