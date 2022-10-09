import React from 'react';
import { createBehavior, createResource } from '@designable/core';
import { DnFC } from '@designable/react';
import { withContainer } from '../../common/Container';
import { createVoidFieldSchema } from '../Field';

const FormilyDiv = (props: any) => {
  return <div {...props} />;
};

export const Div: DnFC<React.ComponentProps<typeof FormilyDiv>> =
  withContainer(FormilyDiv);

Div.Behavior = createBehavior({
  name: 'Div',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Div',
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(
      {
        type: 'object',
        properties: {
          className: {
            'x-component': 'Input',
            'x-decorator': 'FormItem',
            title: '类名',
          },
        },
      },
      false,
    ),
  },
  designerLocales: {
    'zh-CN': {
      title: 'div容器',
      settings: {
        'x-component-props': {},
      },
    },
  },
});

Div.Resource = createResource({
  icon: 'FormLayoutSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Div',
      },
    },
  ],
});
