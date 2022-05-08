import { APIGatewayProxyHandlerV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { ConfigService } from './config-service';
import { SpotifyService } from './spotify-service';

const configService = new ConfigService();
const spotifyService = new SpotifyService(configService);

const response = <T>(statusCode: number, body: T): APIGatewayProxyResultV2 => {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
};

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  const state = await spotifyService.getCurrentTrack();
  if (state === null) {
    return response(404, {});
  }
  return response(200, state);
};
