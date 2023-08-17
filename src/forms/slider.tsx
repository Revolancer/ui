import { Field, FieldProps } from "formik";
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from ".";

export const Slider = ({
  step = 1,
  min = 0,
  max = 100,
  name = '',
}: {
  step?: number;
  min?: number;
  max?: number;
  name?: string;
}) => {
  return (
    <Field name={name} id={`slider-${name}`} type="number">
      {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
        <SliderRoot
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={(val) => setFieldValue(name, val[0])}
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderRoot>
      )}
    </Field>
  );
};
