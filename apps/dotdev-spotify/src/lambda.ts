import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { ConfigService } from './config-service';
import { SpotifyService } from './spotify-service';

const configService = new ConfigService();
const spotifyService = new SpotifyService(configService);

const response = <T>(statusCode: number, body: T): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
};

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const state = await spotifyService.getCurrentTrack();
  if (state === null) {
    return response(404, {});
  }
  return response(200, state);
};
