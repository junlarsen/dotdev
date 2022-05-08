export interface ApplicationEnvironment {
  spotifyClientId: string;
  spotifyClientSecret: string;
  spotifyRefreshToken: string;
}

export abstract class AbstractConfigService {
  public abstract getConfig(): ApplicationEnvironment;
}

export class ConfigService implements AbstractConfigService {
  public getConfig(): ApplicationEnvironment {
    const get = (key: string): string => {
      return (
        process.env[key] ??
        ((): never => {
          throw new Error(`Missing environment variable: ${key}`);
        })()
      );
    };
    return {
      spotifyClientId: get('SPOTIFY_CLIENT_ID'),
      spotifyClientSecret: get('SPOTIFY_CLIENT_SECRET'),
      spotifyRefreshToken: get('SPOTIFY_REFRESH_TOKEN'),
    };
  }
}
