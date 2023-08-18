import {
faCircleCheck,
faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeedbackText, FeedbackTextAfter } from ".";

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
