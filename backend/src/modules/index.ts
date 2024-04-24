import { IApp } from "../app";
import { AuthRoutes } from "./auth/auth.routes";

export const AuthModule = {
    namespace: "/auth",
    routes: AuthRoutes()
} as IApp.IModule