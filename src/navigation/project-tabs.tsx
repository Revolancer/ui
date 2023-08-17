import { Flex } from '../layout';
import { TabLink } from '.';
import { useRouter } from 'next/router';

export const ProjectTabs = () => {
  const router = useRouter();
  return (
    <Flex wrap gap={0}>
      <TabLink active={router.pathname == '/projects'} href="/projects">
        Dashboard
      </TabLink>
      <TabLink
        active={router.pathname == '/projects/active'}
        href="/projects/active"
      >
        Active Projects
      </TabLink>
      {/*
      <TabLink
        active={router.pathname == "/projects/requests"}
        href="/projects/requests"
      >
        Project Requests
  </TabLink>*/}
      <TabLink
        active={router.pathname == '/projects/needs'}
        href="/projects/needs"
      >
        My Needs
      </TabLink>
      <TabLink
        active={router.pathname == '/projects/proposals'}
        href="/projects/proposals"
      >
        Outgoing Proposals
      </TabLink>
      <TabLink
        active={router.pathname == '/projects/completed'}
        href="/projects/completed"
      >
        Completed Projects
      </TabLink>
    </Flex>
  );
};
