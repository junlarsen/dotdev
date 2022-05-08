import { AbstractConfigService } from './config-service';
import SpotifyWebApi from 'spotify-web-api-node';

export type SpotifyCredentials = {
  accessToken: string;
  refreshToken: string;
};

export abstract class AbstractSpotifyAuthService {
  public abstract createAuthorizationUrl(): string;
  public abstract getCredentials(code: string): Promise<SpotifyCredentials>;
}

export class SpotifyAuthService implements AbstractSpotifyAuthService {
  private readonly spotifyApi: SpotifyWebApi;

  public constructor(private readonly configService: AbstractConfigService) {
    const { spotifyClientId, spotifyClientSecret } = this.configService.getConfig();
    this.spotifyApi = new SpotifyWebApi({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
      redirectUri: 'http://localhost:3000/callback',
    });
  }

  public createAuthorizationUrl(): string {
    return this.spotifyApi.createAuthorizeURL(['user-read-playback-state'], 'callback-auth-state');
  }

  public async getCredentials(code: string): Promise<SpotifyCredentials> {
    const res = await this.spotifyApi.authorizationCodeGrant(code);
    const { access_token: accessToken, refresh_token: refreshToken } = res.body;
    this.spotifyApi.setAccessToken(accessToken);
    this.spotifyApi.setRefreshToken(refreshToken);
    return {
      accessToken,
      refreshToken,
    };
  }
}
