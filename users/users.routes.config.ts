import { CommonRoutesConfig, configureRoutes } from "../common/common.routes.config";
import express from 'express';
import { UsersController } from "./controllers/users.controller";

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
        this.configureRoutes();
    }

    configureRoutes() {
        const usersController = new UsersController();
        this.app.get(`/users`, [
            usersController.listUsers
        ]);

        this.app.post(`/users`, [usersController.listUsers]);
        this.app.put(`/users/:userId`, [usersController.put]);
        this.app.patch(`/users/:userId`, [usersController.patch]);
        this.app.delete(`/users/:userId`, [usersController.removeUser]);
        this.app.get(`/users/:userId`, [usersController.getUserById]);
    }
}