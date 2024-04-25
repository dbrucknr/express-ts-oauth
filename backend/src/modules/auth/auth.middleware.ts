import { Request, Response, NextFunction } from "express";
import { GoogleAuthConfig, IGoogleAuthConfig, AuthEnv, IAuthEnv, AuthenticatedRequest } from "."

export const AuthMiddlewareHandlers = (
    environment: IAuthEnv = AuthEnv(),
    config: IGoogleAuthConfig = GoogleAuthConfig()
) => ({
    isAuthenticated: async (request: Request, response: Response, next: NextFunction) => {
        if (Object.keys(config.OAuth2Client.credentials).length === 0) {
            return response.status(401).json({ 
                message: "Access denied. Please Authenticate" 
            });
        } else {
            try {
                const { id_token } = config.OAuth2Client.credentials
                const userData = await config.OAuth2Client.verifyIdToken({ 
                    idToken: id_token!, 
                    audience: environment.GOOGLE_CLIENT_ID 
                });
                const { payload } = userData.getAttributes();
                if (payload) {
                    console.log(payload) 
                    // request.token = payload // Store user data in request object for use in downstream handlers?
                } 
                next()
            } catch (error) {
                response.status(403).json({ message: "Invalid token." });
            }
        }
    }
});

export const AuthMiddleware = (
    handlers = AuthMiddlewareHandlers()
) => ([
    handlers.isAuthenticated
])