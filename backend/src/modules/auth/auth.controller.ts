import { Request, Response } from "express";
import { IAuthController } from ".";

// https://permify.co/post/oauth-20-implementation-nodejs-expressjs/

const DetermineLoginStatus = async (request: Request, response: Response) => {

}

// Might need to Rename to GoogleAuthController
export const AuthController = (): IAuthController => ({
    logout: async (request: Request, response: Response) => {},
    login: async (request: Request, response: Response) => { response.send("Hello from login") },
    authenticate: async (request: Request, response: Response) => { response.send("Hello from authenticate") },
})