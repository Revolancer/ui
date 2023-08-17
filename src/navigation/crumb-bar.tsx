import { FullWidth } from '../layout';
import { CrumbDivider } from './crumb-divider';
import { CrumbBarContainer } from '.';

export const CrumbBar = ({ children }: { children?: any }) => {
  const crumbs = [];
  if (!Array.isArray(children)) {
    crumbs.push(children);
  } else {
    let i = 0;
    let hasRenderedCrumb = false;
    while (i < children.length) {
      crumbs.push(children[i]);
      if (typeof children[i] == 'object') {
        hasRenderedCrumb = true;
      }
      i++;
      if (
        i < children.length &&
        typeof children[i] == 'object' &&
        hasRenderedCrumb
      ) {
        crumbs.push(<CrumbDivider />);
      }
    }
  }
  return (
    <FullWidth>
      <CrumbBarContainer>{crumbs}</CrumbBarContainer>
    </FullWidth>
  );
};
