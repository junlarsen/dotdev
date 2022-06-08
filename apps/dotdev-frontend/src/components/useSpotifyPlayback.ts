import { fetcher, SpotifyApiGatewayResponse } from './api';
import useSwr, { SWRResponse } from 'swr';
import { useEffect, useMemo } from 'react';

const MAX_TIMEOUT_DELAY = 30000;

export const useSpotifyPlayback = (
  gatewayUrl: string,
): Pick<SWRResponse<SpotifyApiGatewayResponse | undefined, unknown>, 'data' | 'error'> => {
  const { data, error, mutate } = useSwr<SpotifyApiGatewayResponse, unknown>(gatewayUrl, fetcher);
  // Always try 20 seconds after the previous fetch, going earlier if there is
  // less than 20 seconds less of the currently playing track
  const nextInterval = useMemo(() => {
    if (data?.isActive) {
      const remainder = data.body.duration - data.body.progress;
      return remainder > MAX_TIMEOUT_DELAY ? MAX_TIMEOUT_DELAY : remainder;
    }
    return MAX_TIMEOUT_DELAY;
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      void mutate();
    }, nextInterval);
    return () => {
      clearInterval(interval);
    };
  }, [nextInterval, mutate]);

  return { data, error };
};
