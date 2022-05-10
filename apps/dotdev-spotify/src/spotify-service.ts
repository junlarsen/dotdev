import SpotifyWebApi from 'spotify-web-api-node';
import { AbstractConfigService } from './config-service';

export type SpotifyTrack = {
  duration: number;
  progress: number;
  name: string;
  artist: string;
  /** The 640x640 image URL for the album the track is from */
  albumCover: string;
  albumName: string;
  spotifyUrl: string;
};

export abstract class AbstractSpotifyService {
  public abstract getCurrentTrack(): Promise<SpotifyTrack | null>;
}

export class SpotifyService implements AbstractSpotifyService {
  private readonly spotifyApi: SpotifyWebApi;

  public constructor(private readonly configService: AbstractConfigService) {
    const { spotifyClientId, spotifyClientSecret, spotifyRefreshToken } = this.configService.getConfig();
    this.spotifyApi = new SpotifyWebApi({
      clientId: spotifyClientId,
      clientSecret: spotifyClientSecret,
      refreshToken: spotifyRefreshToken,
    });
  }

  public async initialize(): Promise<void> {
    const { statusCode, body } = await this.spotifyApi.refreshAccessToken();
    if (statusCode !== 200) {
      throw new Error(`Failed to refresh access token: ${body}`);
    }
    this.spotifyApi.setAccessToken(body.access_token);
  }

  public async getCurrentTrack(): Promise<SpotifyTrack | null> {
    const state = await this.spotifyApi.getMyCurrentPlaybackState({
      market: 'JP',
    });
    if (state.statusCode !== 200 || !state.body.is_playing || state.body?.item?.type !== 'track') {
      return null;
    }
    return {
      duration: state.body.item.duration_ms,
      progress: state.body.progress_ms || 0,
      albumCover: state.body.item.album.images[0].url,
      albumName: state.body.item.album.name,
      artist: state.body.item.artists[0].name,
      name: state.body.item.name,
      spotifyUrl: state.body.item.external_urls.spotify,
    };
  }
}
