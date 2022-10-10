import { Field, ObjectField, observer, useField } from '@formily/react';
import { Input } from 'antd';

function IconSetter() {
  return (
    <>
      <Field name="type" value="ICON" hidden />
      <Field name="name" component={[Input]} />
    </>
  );
}

export default observer(IconSetter);
