import { IApp } from "../app";
import { AuthRoutes, AuthenticatedRequest, AuthMiddleware } from "./auth";
import { SampleRoutes } from "./sample";

export const AuthModule = {
    namespace: "/auth",
    routes: AuthRoutes()
} as IApp.IModule

export const SampleModule = {
    namespace: "/sample",
    middleware: AuthMiddleware(), // Protected
    routes: SampleRoutes()
} as IApp.IModule

export {
    type AuthenticatedRequest
}