import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { styled } from '../styles';

const SwitchRoot = styled(RadixSwitch.Root, {
  all: 'unset',
  width: '$11',
  height: '$7',
  backgroundColor: '$neutral400',
  borderRadius: '9999px',
  position: 'relative',

  '&[data-state="checked"]': { backgroundColor: '$pink500' },
});

const SwitchThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  width: '$6',
  height: '$6',
  backgroundColor: '$white',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': { transform: 'translateX(18px)' },
});

const SwitchWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

export const Switch = ({
  name,
  children,
  id,
  defaultChecked = false,
  checked = false,
  required = false,
  handleCheckedChange,
}: {
  name?: string;
  children: any;
  id?: string;
  defaultChecked?: boolean | undefined;
  checked?: boolean | undefined;
  required?: boolean;
  handleCheckedChange: () => void;
}) => {
  if (typeof id == 'undefined') {
    id = `check-${Math.random()}`;
  }
  if (typeof name == 'undefined') {
    name = id;
  }
  return (
    <SwitchWrapper>
      <SwitchRoot
        defaultChecked={defaultChecked}
        checked={checked}
        id={id}
        required={required}
        name={name}
        onCheckedChange={handleCheckedChange}
      >
        <SwitchThumb />
      </SwitchRoot>
      {children && <label htmlFor={id}>{children}</label>}
    </SwitchWrapper>
  );
};
