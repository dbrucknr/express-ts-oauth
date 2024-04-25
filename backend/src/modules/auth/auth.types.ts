import { Request, Response } from "express";
import { TokenPayload } from "google-auth-library"
import { oauth2_v2 } from "googleapis"
import { OAuth2Client } from "googleapis-common"

export interface IAuthController {
    logout: (request: Request, response: Response) => Promise<void>
    login: (request: Request, response: Response) => Promise<void>
    authenticate: (request: Request, response: Response) => Promise<void>
}

export interface IAuthEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
}

export interface IGoogleAuthConfig {
    GoogleOAuth: oauth2_v2.Oauth2 
    RedirectUri: string;
    OAuth2Client: OAuth2Client
}

export interface User {
    /** Maps to Scopes provided in Auth Config */
    email: string;
    profile: string;
}

export interface AuthenticatedRequest extends Request {
    // https://blog.logrocket.com/extend-express-request-object-typescript/
    token: TokenPayload
}