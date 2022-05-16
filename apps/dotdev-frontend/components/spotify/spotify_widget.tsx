import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useSpotifyPlayback } from '../useSpotifyPlayback';

export type SpotifyWidgetProps = {
  gatewayUrl?: string;
};

export const SpotifyWidget: FunctionComponent<SpotifyWidgetProps> = (props) => {
  const { gatewayUrl = 'https://api.supergrecko.com/v1/dotdev-spotify' } = props;
  const { data, error } = useSpotifyPlayback(gatewayUrl);

  const [message, progress, duration] = useMemo(() => {
    const message = error
      ? 'Error retrieving data from Spotify.'
      : data === undefined
      ? 'Loading...'
      : !data.isActive
      ? 'Spotify is not playing.'
      : `Listening to: ${data.body.artist} - ${data.body.name}`;
    const progress = data?.isActive ? data?.body.progress ?? 0 : 0;
    const duration = data?.isActive ? data?.body.duration ?? 0 : 0;
    return [message, progress, duration];
  }, [error, data]);

  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(progress);
    const interval = setInterval(() => {
      setTime((s) => s + 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [duration, progress]);

  return (
    <div className="tw-w-full tw-flex tw-flex-row tw-items-center tw-gap-2">
      <Image src="/spotify_icon.png" alt="Spotify logo" width={40} height={40} />
      <div className="tw-flex tw-flex-col tw-w-full">
        <p>{message}</p>
        {data?.isActive && (
          <div className="tw-flex tw-flex-row tw-gap-1 tw-items-center">
            <span>{toTimeString(time)}</span>
            <div className="tw-w-full tw-bg-stroke">
              <div
                className="tw-bg-primary tw-h-[3px]"
                style={{
                  width: `${(time / duration) * 100}%`,
                }}
              />
            </div>
            <span>{toTimeString(duration)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const toTimeString = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  return `${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
};
