import express, { json, Request, Response } from 'express';
import { SpotifyService } from './spotify-service';
import { ConfigService } from './config-service';
import { SpotifyAuthService } from './spotify-auth-service';
/* eslint-disable @typescript-eslint/no-misused-promises */

// Express application for development outside AWS Lambda + functionality to
// retrieve Spotify access token for use in prod
const app = express();
const configService = new ConfigService();
const spotifyService = new SpotifyService(configService);
const spotifyAuthService = new SpotifyAuthService(configService);

app.use(json());

// Lambda mock endpoint
app.post('/', async (req: Request, res: Response): Promise<void> => {
  await spotifyService.initialize();
  const state = await spotifyService.getCurrentTrack();
  if (state === null) {
    res.status(404).json({});
  }
  res.status(200).json(state);
});

// Spotify Authorization Code Flow endpoint
app.get('/', (req: Request, res: Response): void => {
  res.redirect(spotifyAuthService.createAuthorizationUrl());
});

// Spotify Authorization Code Flow callback endpoint
app.get(
  '/callback',
  async (req: Request<unknown, unknown, unknown, { code: string }>, res: Response): Promise<void> => {
    const { accessToken, refreshToken } = await spotifyAuthService.getCredentials(req.query.code);
    res.json({ accessToken, refreshToken });
  },
);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
