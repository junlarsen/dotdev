import { FunctionComponent, useEffect, useMemo, useState } from 'react';

export type SpotifyProgressBarProps = {
  progress: number;
  duration: number;
}

export const SpotifyProgressBar: FunctionComponent<SpotifyProgressBarProps> = (props) => {
  const { progress, duration } = props;
  const [step, setStep] = useState(progress);

  useEffect(() => {
    const timer = setInterval(() => {
      if (step >= duration) {
        console.log("reset")
        setStep(0);
      } else {
        setStep((s) => s + 100);
      }
    }, 100)
    return () => clearInterval(timer);
  }, []);

  const width = useMemo(() => {
    return (step / duration) * 100;
  }, [step, duration]);

  return (
    <div className="tw-flex tw-flex-row tw-items-center">
      <span>{toTimeString(step)}</span>
      <div className="tw-w-full">
        <div className="tw-bg-warning tw-h-[3px]" style={{
          width: `${width}%`,
        }} />
      </div>
      <span>{toTimeString(duration)}</span>
    </div>
  )
}

const toTimeString = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  return `${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}
