import { Request, Response, NextFunction } from "express";
import { GoogleAuthConfig, IGoogleAuthConfig, AuthEnv, IAuthEnv } from "."

export const AuthMiddleware = (
    environment: IAuthEnv = AuthEnv(),
    config: IGoogleAuthConfig = GoogleAuthConfig()
) => ({
    isAuthenticated: async (request: Request, response: Response, next: NextFunction) => {
        const { authorization } = request.headers
        if (!authorization) {
            return response.status(401).json({ message: "Access denied. Please Authenticate" });
        } else {
            try {
                const token = authorization.split(' ')[1];
                const userData = await config.OAuth2Client.verifyIdToken({ 
                    idToken: token, 
                    audience: environment.GOOGLE_CLIENT_ID 
                });
                request.user = userData // Store user data in request object for use in downstream handlers?
                next()
            } catch (error) {
                response.status(403).json({ message: "Invalid token." });
            }
        }
    }
}) 