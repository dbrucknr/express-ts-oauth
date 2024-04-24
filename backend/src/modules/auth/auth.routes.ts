import { Router } from "express";
import { AuthController, IAuthController } from ".";

export const AuthRoutes = (
    router: Router = Router(),
    controller: IAuthController = AuthController()
): Router[] => ([
    router.get("/", controller.login),
    router.get("/authenticate", controller.authenticate)
])