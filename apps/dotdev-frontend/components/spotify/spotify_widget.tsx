import { FunctionComponent, useEffect, useMemo } from 'react';
import useSwr, { mutate } from 'swr';
import { fetcher, SpotifyApiGatewayResponse } from '../api';
import Image from 'next/image';
import { SpotifyProgressBar } from './spotify_progress_bar';

export type SpotifyWidgetProps = {
  gatewayUrl?: string;
};

export const SpotifyWidget: FunctionComponent<SpotifyWidgetProps> = (props) => {
  const { gatewayUrl = 'https://api.supergrecko.com/v1/dotdev-spotify' } = props;
  const { data, error } = useSwr<SpotifyApiGatewayResponse>(gatewayUrl, fetcher);
  // Determine how long to wait before attempting to fetch again.
  const remaining = useMemo(() => {
    // Always try 20 seconds after the previous fetch, going earlier if there is
    // less than 20 seconds less of the currently playing track
    if (data?.isActive) {
      const remainder = data.body.duration - data.body.progress;
      return remainder > 20000 ? 20000 : remainder;
    }
    return 20000;
  }, [data]);

  useEffect(() => {
    const interval = setTimeout(() => {
      mutate(gatewayUrl);
    }, remaining);
    return () => clearTimeout(interval);
  }, [remaining, mutate]);

  const message = useMemo(() => {
    return error
      ? 'Error retrieving data from Spotify.'
      : data === undefined
      ? 'Loading...'
      : !data.isActive
      ? 'Spotify is not playing.'
      : `Currently listening to: ${data.body.artist} - ${data.body.name}`;
  }, [error, data]);

  return (
    <div className="tw-w-full tw-flex tw-flex-row tw-items-center tw-gap-2">
      <Image src="/spotify_icon.png" alt="Spotify logo" width={40} height={40} />
      <div className="tw-flex tw-flex-col">
        <p>{message}</p>
        {data?.isActive && (
          <SpotifyProgressBar progress={data.body.progress} duration={data.body.duration} />
        )}
      </div>
    </div>
  )
};
