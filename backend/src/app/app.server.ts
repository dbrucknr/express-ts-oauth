import express, { Express } from "express";
import { IApp } from ".";

export const Application = (
    // Dependency Injection
    app: Express = express(),
    port: number = 8000 
) => (
    // Configuration Parameters
    modules: IApp.IModule[]
) => {
    /** Configure Express Application */
    app.use(express.json());

    // Module Registry
    for ( const { namespace, middleware, routes } of modules ) {
        app.use("/api" + namespace, ...(middleware || []), ...routes)
    }

    return {
        app,
        port
    }
}