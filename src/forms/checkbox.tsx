import { useFormikContext } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { styled, darkTheme } from '../styles';
import * as RadixCheckbox from '@radix-ui/react-checkbox';

const CheckboxRoot = styled(RadixCheckbox.Root, {
  backgroundColor: 'transparent',
  margin: '$1',
  width: '$7',
  height: '$7',
  borderRadius: '$1',
  borderWidth: '$1',
  borderColor: '$neutral400',
  borderStyle: '$solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$2',
  color: '$white',
  transition: '$smoothly',
  cursor: 'pointer',

  '&.focus': {
    outline: 'none',
  },

  '&[aria-checked="true"]': {
    backgroundColor: '$pink500',
    borderColor: '$pink500',
    boxShadow: 'none',
  },

  [`.${darkTheme} &`]: {
    borderColor: '$neutral700',
    backgroundColor: '$neutral800',
    '&[aria-checked="true"]': {
      borderColor: '$pink500',
      backgroundColor: '$pink500',
    },
  },
});

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {});

const CheckboxWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

export const Checkbox = ({
  name,
  children,
  id,
  defaultChecked = false,
  checked = false,
  required = false,
}: {
  name?: string;
  children: any;
  id?: string;
  defaultChecked?: boolean | 'indeterminate';
  checked?: boolean | 'indeterminate';
  required?: boolean;
}) => {
  if (typeof id == 'undefined') {
    id = `check-${Math.random()}`;
  }
  if (typeof name == 'undefined') {
    name = id;
  }

  const { setFieldValue } = useFormikContext();
  return (
    <CheckboxWrapper>
      <CheckboxRoot
        defaultChecked={defaultChecked}
        checked={checked}
        id={id}
        required={required}
        name={name}
        onCheckedChange={(checked) =>
          setFieldValue(name ?? '', checked === true)
        }
      >
        <CheckboxIndicator>
          <FontAwesomeIcon icon={faCheck} />
        </CheckboxIndicator>
      </CheckboxRoot>
      {children && <label htmlFor={id}>{children}</label>}
    </CheckboxWrapper>
  );
};
