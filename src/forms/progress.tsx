import { BG, Inner, Outer } from ".";

export const Progress = ({ progress = 0 }: { progress?: number }) => {
  progress = Math.min(progress, 100);
  progress = Math.max(progress, 0);
  return (
    <Outer>
      <BG />
      <Inner css={{ width: `${progress}%` }} />
    </Outer>
  );
};
