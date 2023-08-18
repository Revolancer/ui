import { useFormikContext } from "formik";
import { CheckboxWrapper, CheckboxRoot, CheckboxIndicator } from ".";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
