import { Flex } from '../layout';
import { useRouter } from 'next/router';
import { TabLink } from '.';

export const SettingsTabs = () => {
  const router = useRouter();
  return (
    <Flex wrap gap={0}>
      <TabLink active={router.pathname == '/settings'} href="/settings">
        Account Details
      </TabLink>
      <TabLink
        active={router.pathname == '/settings/email'}
        href="/settings/email"
      >
        Email Preferences
      </TabLink>
    </Flex>
  );
};
