import { Interactive } from 'react-interactive';
import { MouseEventHandler } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const PasswordReveal = ({
  onClick,
  revealed = false,
}: {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  revealed?: boolean;
}) => (
  <Interactive.A
    onClick={onClick}
    aria-label={revealed ? 'Hide Password' : 'Show Password'}
  >
    {/*<FontAwesomeIcon icon={revealed ? faEyeSlash : faEye} />*/}
  </Interactive.A>
);
