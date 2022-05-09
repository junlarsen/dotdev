import { APIGatewayProxyHandlerV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { ConfigService } from './config-service';
import { SpotifyService, SpotifyTrack } from './spotify-service';

const configService = new ConfigService();
const spotifyService = new SpotifyService(configService);

type GatewayResponse = {
  isActive: true;
  body: SpotifyTrack;
} | {
  isActive: false;
}

const response = (statusCode: number, body: GatewayResponse): APIGatewayProxyResultV2 => {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }
  };
};

export const handler: APIGatewayProxyHandlerV2<GatewayResponse> = async (event, context) => {
  await spotifyService.initialize();
  const state = await spotifyService.getCurrentTrack();
  if (state === null) {
    return response(200, { isActive: false });
  }
  return response(200, { isActive: true, body: state });
};
