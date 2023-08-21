import { useCallback, useState } from 'react';
import { Card, Flex, Divider } from '../layout';
import { P } from '../text';
import { UnstyledLink } from '../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const Explainer = ({ text, children }: {text: string, children: any}) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <Card css={{ color: '$neutral600' }}>
      <Flex css={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
        <P
          css={{
            fontSize: '$body1',
            lineHeight: '$body1',
            fontWeight: '$bold',
            color: '$black',
          }}
        >
          {text}
        </P>
        {!expanded && (
          <UnstyledLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </UnstyledLink>
        )}
      </Flex>
      {expanded && (
        <>
          {children}
          <Divider />
          <UnstyledLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
          >
            <Flex css={{ alignItems: 'center' }}>
              <FontAwesomeIcon icon={expanded ? faAngleUp : faAngleDown} />
              <P>Close</P>
            </Flex>
          </UnstyledLink>
        </>
      )}
    </Card>
  );
};
