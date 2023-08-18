import { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, Flex, Divider } from '../layout';
import { P } from '../text';
import { UnstyledLink } from '../buttons';
import { styled } from '../styles';
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
          {/*💡 Not sure what to write? Here&rsquo;s a project brief guide!*/}
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
          {/*<P>
            By following this guide, candidates will gain a clear understanding
            of your project.
          </P>
          <P>
            <ol>
              <li>Background: Provide a brief overview of the business.</li>
              <li>
                Goal: Clearly state the main objective of the project, such as
                boosting brand awareness or driving conversions.
              </li>
              <li>
                Deliverables: Specify the expected end product and the desired
                file types. Indicate whether any materials will be provided.
              </li>
              <li>
                Preferences: Mention any design preferences, guidelines, or
                specific styles that should be considered.
              </li>
              <li>
                Limitations: Highlight any practical or technical constraints
                that may affect the project.
              </li>
            </ol>
          </P>*/}
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
              <P>Close Guide</P>
            </Flex>
          </UnstyledLink>
        </>
      )}
    </Card>
  );
};
