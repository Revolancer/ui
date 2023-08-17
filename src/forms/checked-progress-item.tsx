//import { faCheck } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex } from '../layout';
import { CheckIconBorder, CheckText } from '.';

export const CheckedProgressItem = ({
  checked = false,
  children,
}: {
  checked?: boolean;
  children?: any;
}) => {
  return (
    <Flex>
      <CheckIconBorder checked={checked}>
        {/*checked && <FontAwesomeIcon icon={faCheck} />*/}
      </CheckIconBorder>
      <CheckText checked={checked}>{children}</CheckText>
    </Flex>
  );
};
