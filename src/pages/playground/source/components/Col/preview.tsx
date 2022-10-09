import React from 'react';
import { Col as FormilyCol } from 'antd';
import { createBehavior, createResource } from '@designable/core';
import { DnFC, DroppableWidget } from '@designable/react';
import { createVoidFieldSchema } from '../Field';

export const Col: DnFC<React.ComponentProps<typeof FormilyCol>> = ({
  span,
  ...props
}) => {
  console.log('====span: ====', span);
  return (
    <FormilyCol span={span}>
      <DroppableWidget {...props}>{props.children}</DroppableWidget>
    </FormilyCol>
  );
};

Col.Behavior = createBehavior({
  name: 'Col',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Col',
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(
      {
        type: 'object',
        properties: {
          span: {
            'x-component': 'NumberPicker',
            'x-decorator': 'FormItem',
            title: '栅格占位格数',
          },
        },
      },
      false,
    ),
  },
  designerLocales: {
    'zh-CN': {
      title: 'Col',
      settings: {
        'x-component-props': {},
      },
    },
  },
});

Col.Resource = createResource({
  icon: 'FormLayoutSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Col',
      },
    },
  ],
});
