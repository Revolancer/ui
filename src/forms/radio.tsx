import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled } from '@stitches/react';
import { useFormikContext } from 'formik';
import { Divider, Flex } from '../layout';

const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
});

const RadioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: '$white',
  width: '$7',
  height: '$7',
  borderRadius: '100%',
  border: '1px solid $neutral500',
  '&:hover': { borderColor: '$pink500' },
  '&[data-state="checked"]': {
    backgroundColor: '$pink500',
    transition: 'backgroundColor 0.4s ease-in-out',
  },
});

const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '$4',
    height: '$4',
    borderRadius: '50%',
    backgroundColor: '$white',
  },
});

const Label = styled('label', {
  color: '$black',
  fontSize: '$body1',
  lineHeight: '$body1',
});

export const RadioItem = ({
  value,
  label,
  divide,
  disabled = false,
}: {
  value: string;
  label: string;
  divide?: boolean;
  disabled?: boolean;
}) => (
  <Flex column css={{ width: '100%', padding: '0 $3' }}>
    <Flex css={{ alignItems: 'center' }}>
      <RadioGroupItem value={value} id={value} disabled={disabled}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <Label htmlFor={value}>{label}</Label>
    </Flex>
    {divide && <Divider />}
  </Flex>
);

export const Radio = ({
  defaultValue,
  value,
  disabled = false,
  id,
  name,
  required,
  orientation = 'vertical',
  children,
}: {
  defaultValue: string;
  value: string;
  disabled?: boolean;
  id: string;
  name: string;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical' | undefined;
  children: any;
}) => {
  if (typeof id == 'undefined') {
    id = `radio-${Math.random()}`;
  }
  if (typeof name == 'undefined') {
    name = id;
  }

  const { setFieldValue } = useFormikContext();
  return (
    <RadioGroupRoot
      defaultValue={defaultValue}
      value={value}
      name={name}
      disabled={disabled}
      required={required}
      orientation={orientation}
      onValueChange={(value) => setFieldValue(name, value)}
    >
      {children}
    </RadioGroupRoot>
  );
};
