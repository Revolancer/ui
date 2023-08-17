import { useMemo } from 'react';
import { config } from '../styles';
import { TrafficBG, TrafficInner, TrafficOuter } from '.';

export const ProgressTraffic = ({ progress = 0 }: { progress?: number }) => {
  progress = Math.min(progress, 100);
  progress = Math.max(progress, 0);

  const color = useMemo(() => {
    if (progress >= 100) {
      return config.theme.colors.green700;
    }
    if (progress >= 90) {
      return config.theme.colors.green600;
    }
    if (progress >= 80) {
      return config.theme.colors.green500;
    }
    if (progress >= 70) {
      return config.theme.colors.green400;
    }
    if (progress >= 60) {
      return config.theme.colors.yellow600;
    }
    if (progress >= 50) {
      return config.theme.colors.orange300;
    }
    if (progress >= 40) {
      return config.theme.colors.orange400;
    }
    if (progress >= 35) {
      return config.theme.colors.orange600;
    }
    return config.theme.colors.red500;
  }, [progress]);

  return (
    <TrafficOuter>
      <TrafficBG />
      <TrafficInner css={{ width: `${progress}%`, backgroundColor: color }} />
    </TrafficOuter>
  );
};
