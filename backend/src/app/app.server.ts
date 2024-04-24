import express, { Express } from "express";

export const Application = (
    // Dependency Injection
    app: Express = express(),
    port: number = 8000 
) => (
    // Configuration Parameters
) => {
    /** Configure Express Application */
    app.use(express.json());

    return {
        app,
        port
    }
}