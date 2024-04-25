import { Router } from "express";
import { SampleController } from ".";

export const SampleRoutes = (
    router: Router = Router(), // I wonder if Router typing needs to be changed?
    controller = SampleController()
): Router[] => ([
    router.get("/", controller.protectedSample)
])