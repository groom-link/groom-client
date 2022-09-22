import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useRef,
  useState
} from 'react';
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
  const [tagValue, setTagValue] = useState('#');
  const inputRef = useRef<HTMLInputElement>(null);
  const { type } = props;

  const handleCancel = () => console.log('canceled');

  const handleChangeTagInput: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setTagValue(value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = () => {};

  if (type === 'input') {
    return (
      <Tag
        type="input"
        inputRef={inputRef}
        value={tagValue}
        onChange={handleChangeTagInput}
        onKeyDown={handleKeyDown}
      />
    );
  }

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
