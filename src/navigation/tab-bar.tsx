import { Flex } from '../layout';
import { TabLink } from '.';
import { useRouter } from 'next/router';

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
