type SpotifyTrack = {
  duration: number;
  progress: number;
  name: string;
  artist: string;
  /** The 640x640 image URL for the album the track is from */
  albumCover: string;
  albumName: string;
  spotifyUrl: string;
};

export type SpotifyApiGatewayResponse =
  | {
      isActive: false;
    }
  | {
      isActive: true;
      body: SpotifyTrack;
    };

export const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  return response.json();
};
