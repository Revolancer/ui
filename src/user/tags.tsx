import { ReactNode, useState } from 'react';
import { TertiaryFormButton, UnstyledLink } from '../buttons';
import { styled } from '../styles';
import { Flex } from '../layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface Tag {
  id: string;
  text: string;
  parent?: Tag;
}

const TagContainer = styled('div', {
  color: '$pink500',
  padding: '$1 $4',
  borderRadius: '100px',
  background: '$pink100',
});

export const TagElement = ({
  tag,
  href = '#',
  onClick,
  onClose,
}: {
  tag: Tag;
  href?: string | object;
  onClick?: () => void;
  onClose?: () => void;
}) => {
  return (
    <TagContainer key={tag.id}>
      {onClick ? (
        <UnstyledLink href={href} onClick={() => onClick()}>
          {tag.text}
        </UnstyledLink>
      ) : (
        tag.text
      )}
      {onClose && (
        <TertiaryFormButton
          onClick={() => onClose()}
          css={{ marginLeft: '$3', color: '$pink500' }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </TertiaryFormButton>
      )}
    </TagContainer>
  );
};

export const TagArray = ({
  tags,
  renderTag,
  expander,
  limit = 4,
}: {
  tags: Tag[];
  renderTag?: ({ tag }: { tag: Tag }) => ReactNode;
  expander?: boolean;
  limit?: number;
}) => {
  const [expand, setExpand] = useState(false);

  const renderTagElement = (tag: Tag) => {
    if (renderTag) return renderTag({ tag });
    return <TagElement tag={tag} key={tag.id} />;
  };

  const renderTags = tags.map((tag, idx) => {
    if (idx < limit) {
      renderTagElement(tag);
    } else {
      return expand && renderTagElement(tag);
    }
  });

  const showExpander = expander && !expand && tags.length > limit + 1;
  return (
    <>
      <Flex wrap>
        {renderTags}
        {showExpander && (
          <TertiaryFormButton onClick={() => setExpand(true)}>
            <TagContainer>+{tags.length - limit}</TagContainer>
          </TertiaryFormButton>
        )}
      </Flex>
      {expand && (
        <TertiaryFormButton onClick={() => setExpand(false)}>
          Show Less
        </TertiaryFormButton>
      )}
    </>
  );
};
