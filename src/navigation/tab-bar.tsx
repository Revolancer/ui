import { Flex } from '../layout';
import { useRouter } from 'next/router';
import { styled } from '../styles';
import Link from 'next/link';

const TabLink = styled(Link, {
  fontSize: '$body2',
  color: '$neutral600',
  textDecoration: 'none',
  display: 'block',
  paddingInline: '$5',
  paddingBlock: '$3',

  variants: {
    active: {
      true: {
        color: '$black',
        fontWeight: '$medium',
        borderStyle: 'none',
        borderWidth: '$2',
        borderColor: '$black',
        borderBlockEndStyle: 'solid',
      },
    },
  },
});

export const Tabs = ({
  root,
  rootName,
  routes,
  routeNames,
}: {
  root: string;
  rootName: string;
  routes: string[];
  routeNames: string[];
}) => {
  const router = useRouter();
  return (
    <Flex wrap gap={0}>
      <TabLink active={router.pathname == `/${root}`} href={`/${root}`}>
        {rootName}
      </TabLink>
      {routes.map((route, index) => {
        const pathName = `/${root}/${route}`;
        return (
          <TabLink active={router.pathname == pathName} href={pathName}>
            {routeNames[index]}
          </TabLink>
        );
      })}
    </Flex>
  );
};
