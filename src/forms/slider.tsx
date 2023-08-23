import { Field, FieldProps } from 'formik';
import * as RadixSlider from '@radix-ui/react-slider';
import { styled } from '../styles';

const SliderRoot = styled(RadixSlider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: '20px',
});

const SliderTrack = styled(RadixSlider.Track, {
  backgroundColor: '$neutral500',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: '4px',
  overflow: 'hidden',
});

const SliderRange = styled(RadixSlider.Range, {
  position: 'absolute',
  backgroundColor: '$pink500',
  borderRadius: '0',
  height: '100%',
});

const SliderThumb = styled(RadixSlider.Thumb, {
  display: 'block',
  width: '32px',
  height: '32px',
  backgroundColor: '$white',
  borderColor: '$neutral500',
  borderWidth: '$1',
  borderStyle: '$solid',
  boxShadow: '$2',
  borderRadius: '100%',

  '&:hover': {
    backgroundColor: '$neutral100',
  },

  '&:focus': {
    outline: 'none',
  },
});

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
