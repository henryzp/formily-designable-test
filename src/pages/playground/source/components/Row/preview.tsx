import React from 'react';
import { Row as FormilyRow } from 'antd';
import { createBehavior, createResource } from '@designable/core';
import { DnFC } from '@designable/react';
import { withContainer } from '../../common/Container';
import { createVoidFieldSchema } from '../Field';
import { renderDataSource } from '../../shared';

export const Row: DnFC<React.ComponentProps<typeof FormilyRow>> =
  withContainer(FormilyRow);

Row.Behavior = createBehavior({
  name: 'Row',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Row',
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
          align: {
            'x-component': 'Select',
            enum: renderDataSource(['top', 'middle', 'bottom']),
            default: 'top',
            'x-decorator': 'FormItem',
            title: '垂直对齐方式',
          },
          justify: {
            'x-component': 'Select',
            enum: renderDataSource([
              'start',
              'end',
              'center',
              'space-around',
              'space-between',
              'space-evenly',
            ]),
            default: 'start',
            'x-decorator': 'FormItem',
            title: '垂直对齐方式',
          },
          wrap: {
            'x-component': 'Switch',
            default: true,
            'x-decorator': 'FormItem',
            title: '是否自动换行',
          },
        },
      },
      false,
    ),
  },
  designerLocales: {
    'zh-CN': {
      title: 'Row',
      settings: {
        'x-component-props': {},
      },
    },
  },
});

Row.Resource = createResource({
  icon: 'FormLayoutSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Row',
      },
    },
  ],
});
