import { Router } from "express";
import { AuthController, IAuthController } from ".";

export const AuthRoutes = (
    router: Router = Router(),
    controller: IAuthController = AuthController()
): Router[] => ([
    router.get("/", controller.login), // http://localhost:8000/api/auth
    router.get("/authenticate", controller.authenticate) // http://localhost:8000/api/auth/authenticate
])