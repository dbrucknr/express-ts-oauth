import { IAuthEnv, IGoogleAuthConfig } from "."
import { google } from 'googleapis';

export const AuthEnv = (): IAuthEnv => ({
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || ""
});

export const GoogleAuthConfig = (
    environment: IAuthEnv = AuthEnv()
): IGoogleAuthConfig => {
    const { auth: { OAuth2 }, oauth2 } = google;

    const OAuth2Client = new OAuth2(
        environment.GOOGLE_CLIENT_ID,
        environment.GOOGLE_CLIENT_SECRET,
        'http://localhost:8000/api/auth/authenticate' // TODO: Set to env variable
    );

    OAuth2Client.on('tokens', ({ refresh_token, access_token }) => {
        /** Automatically store the most recent token(s) */
        if (refresh_token) {
            // Store refresh_token in database
            console.log("Refresh Token:", refresh_token)
        } else {
            console.log("Access Token:", access_token)
        }
    })

    return {
        OAuth2Client,
        GoogleOAuth: oauth2({ version: "v2", auth: OAuth2Client }),
        RedirectUri: OAuth2Client.generateAuthUrl({
            access_type: 'offline',
            prompt: 'consent',
            scope: ['email', 'profile']
        })
    }
}