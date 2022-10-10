import React from 'react';
import { Button as FormilyButton } from 'antd';
import { createBehavior, createResource } from '@designable/core';
import { DnFC } from '@designable/react';
import { createVoidFieldSchema } from '../Field';
import { renderDataSource } from '../../shared';
import IconSetter from '../../common/IconSetter';

export const Button: DnFC<React.ComponentProps<typeof FormilyButton>> =
  FormilyButton;

Button.Behavior = createBehavior({
  name: 'Button',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Button',
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(
      {
        type: 'object',
        properties: {
          children: {
            'x-component': 'Input',
            'x-decorator': 'FormItem',
            title: '文本',
            default: '默认',
          },
          size: {
            'x-component': 'Select',
            enum: [
              { label: '大', value: 'large' },
              { label: '默认', value: 'middle' },
              { label: '小', value: 'small' },
            ],
            'x-decorator': 'FormItem',
            default: 'middle',
          },
          type: {
            'x-component': 'Select',
            enum: renderDataSource([
              'primary',
              'ghost',
              'dashed',
              'link',
              'text',
              'default',
            ]),
            'x-decorator': 'FormItem',
            title: '类型',
            default: 'default',
          },
          icon: {
            title: 'ICON',
            'x-component': IconSetter,
            'x-decorator': 'FormItem',
          },
        },
      },
      false,
    ),
  },
  designerLocales: {
    'zh-CN': {
      title: '按钮',
      settings: {
        'x-component-props': {
          size: { title: '尺寸', dataSource: ['大', '默认', '小'] },
        },
      },
    },
  },
});

Button.Resource = createResource({
  icon: 'ButtonSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Button',
      },
    },
  ],
});
