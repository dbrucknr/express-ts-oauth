import { AuthenticatedRequest } from "../";
import { Request, Response } from "express"

export const SampleController = () => ({
    protectedSample: async (request: Request, response: Response) => {
        response.send("Do I see this?")
    }
})