import React, { useEffect, useState } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { Field, FieldProps } from 'formik';
// import { DateTime } from 'luxon';
import { Feedback } from './feedback';
// import { getCodeList as getCountryNames } from 'country-list';
import {
  SelectRoot,
  SelectTrigger,
  SelectIcon,
  SelectContent,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectViewport,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  StyledItem,
  StyledItemIndicator
} from '.';

const Select = ({
  name,
  placeholder,
  children,
}: {
  name: string;
  placeholder: string;
  children: any;
}) => {
  return (
    <Field name={name} id={`select-${name}`}>
      {({
        field: { value },
        form: { setFieldValue, errors, touched },
      }: FieldProps) => (
        <>
          <SelectRoot
            onValueChange={(val) => setFieldValue(name, val)}
            value={value}
          >
            <SelectTrigger error={touched[name] && !!errors[name]}>
              <RadixSelect.Value placeholder={placeholder} />
              <SelectIcon>
                <FontAwesomeIcon icon={faChevronDown} />
              </SelectIcon>
            </SelectTrigger>
            <RadixSelect.Portal>
              <SelectContent>
                <SelectScrollUpButton>
                  <FontAwesomeIcon icon={faChevronUp} />
                </SelectScrollUpButton>
                <SelectViewport>{children}</SelectViewport>
                <SelectScrollDownButton>
                  <FontAwesomeIcon icon={faChevronDown} />
                </SelectScrollDownButton>
              </SelectContent>
            </RadixSelect.Portal>
          </SelectRoot>
          {touched[name] && errors[name] && (
            <Feedback state="error">{errors[name]}</Feedback>
          )}
        </>
      )}
    </Field>
  );
};

const SelectItem = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <StyledItemIndicator>
        <FontAwesomeIcon icon={faCheck} />
      </StyledItemIndicator>
    </StyledItem>
  );
});
SelectItem.displayName = 'SelectItem';

/*const TzSelect = ({ name }: { name: string }) => {
  const [timezones, setTimezones] = useState([]);
  /*useEffect(() => {
    setTimezones(
      (Intl as any)
        .supportedValuesOf('timeZone')
        .filter((tz: string) => DateTime.local().setZone(tz).isValid),
    );
  }, []);
  return (
    <Select name={name} placeholder="Timezone">
      {timezones.map((tz) => {
        return (
          <SelectItem value={tz} key={tz}>
            {tz}
          </SelectItem>
        );
      })}
    </Select>
  );
};

const CountrySelect = ({ name }: { name: string }) => {
  // const countries = getCountryNames();
  return (
    <Select name={name} placeholder="Country">
      {Object.keys(countries).map((code) => {
        return (
          <SelectItem value={code} key={code}>
            {countries[code]}
          </SelectItem>
        );
      })}
    </Select>
  );
};*/

export {
  SelectItem,
  SelectGroup,
  SelectSeparator,
  SelectLabel,
  Select,
  //TzSelect,
  //CountrySelect,
};
