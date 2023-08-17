import { NagBarContainer, ColumnLayout, FullWidth } from ".";

export const NagBar = ({ children }: { children?: any }) => {
  return (
    <NagBarContainer>
      <ColumnLayout>
        <FullWidth
          css={{ display: 'flex', gap: '4px', justifyContent: 'center' }}
        >
          {children}
        </FullWidth>
      </ColumnLayout>
    </NagBarContainer>
  );
};
