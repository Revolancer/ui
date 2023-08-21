import {
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '../styles';

const FeedbackText = styled('span', {
  fontSize: '$body2',
  paddingInlineStart: '$1',
  display: 'inline-flex',
  gap: '$4',
  alignItems: 'center',

  variants: {
    state: {
      feedback: {
        color: '$navy500',
      },
      warning: {
        color: '$orange500',
      },
      error: {
        color: '$red500',
      },
      success: {
        color: '$green500',
      },
    },
  },

  defaultVariants: {
    state: 'feedback',
  },
});

const FeedbackTextAfter = styled('span', {
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: '$2',
});

export const Feedback = ({
  state = 'warning',
  children,
}: {
  state?: 'feedback' | 'warning' | 'error' | 'success';
  children?: any;
}) => {
  let symbol = faCircleInfo;
  switch (state) {
    case 'warning':
    case 'error':
      symbol = faTriangleExclamation;
      break;
    case 'success':
      symbol = faCircleCheck;
      break;
  }
  return (
    <FeedbackText state={state}>
      <FontAwesomeIcon icon={symbol} />
      <FeedbackTextAfter>{children}</FeedbackTextAfter>
    </FeedbackText>
  );
};
