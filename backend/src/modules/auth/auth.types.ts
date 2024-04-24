import { Request, Response } from "express";

export interface IAuthController {
    logout: (request: Request, response: Response) => Promise<void>
    login: (request: Request, response: Response) => Promise<void>
    authenticate: (request: Request, response: Response) => Promise<void>
}