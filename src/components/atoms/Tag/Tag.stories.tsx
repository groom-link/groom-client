import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './index';

export default {
  title: 'atoms/Tag',
  component: Tag,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = (props) => {
  const handleCancel = () => console.log('canceled');

  const { type } = props;
  const children = props.children ?? '#태그';

  if (type === 'cancel') {
    return (
      <Tag type="cancel" onDeleteClick={handleCancel}>
        {children}
      </Tag>
    );
  }

  return <Tag type="default">{children}</Tag>;
};
