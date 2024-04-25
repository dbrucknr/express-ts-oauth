import { Router, RequestHandler } from "express";

export namespace IApp {
    export interface IModule {
        namespace: string;
        middleware: RequestHandler[];
        routes: Router[]
    }
}