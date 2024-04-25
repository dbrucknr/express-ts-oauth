import { Request, Response } from "express";
import { IAuthController, GoogleAuthConfig, IGoogleAuthConfig } from ".";

// https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow
// https://permify.co/post/oauth-20-implementation-nodejs-expressjs/
// Might need: https://www.npmjs.com/package/googleapis 
// https://www.npmjs.com/package/googleapis#oauth2-client

const HandleLogin = async (request: Request, response: Response, config: IGoogleAuthConfig) => {
    // I need a way of checking if the user is authenticated
    // const { data } = await config.GoogleOAuth.userinfo.v2.me.get();
    // console.log("HandleLogin", data)
    // response.json({ data })
    response.redirect(config.RedirectUri)
}

// Add Request Type (Query Type)
const HandleAuthentication = async (request: Request, response: Response, config: IGoogleAuthConfig) => {
    // Extract Authorization Code
    const { code }  = request.query;
    if (code) {
        const { tokens } = await config.OAuth2Client.getToken(code as string)
        config.OAuth2Client.setCredentials(tokens)
    }
    response.redirect("/api")
}

// Might need to Rename to GoogleAuthController
export const AuthController = (
    google: IGoogleAuthConfig = GoogleAuthConfig()
): IAuthController => ({
    logout: async (request: Request, response: Response) => {},
    login: async (request: Request, response: Response) => HandleLogin(request, response, google),
    authenticate: async (request: Request, response: Response) => HandleAuthentication(request, response, google),
})