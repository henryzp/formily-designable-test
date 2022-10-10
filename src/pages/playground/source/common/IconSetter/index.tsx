import { Field, ObjectField, observer, useField } from '@formily/react';
import { Input } from 'antd';
import React, { useState } from 'react';

interface IIconSetter {
  value: {
    type?: string;
    name?: string;
  };
  onChange?: (value: any) => void;
}

function IconSetter(props: IIconSetter) {
  const { value = { type: 'ICON' }, onChange } = props;

  const filed = useField;

  const [inputValue, setInputValue] = useState(() => {
    return value.name || '';
  });

  const handleChange = (ev) => {
    const value = ev.target.value;
    setInputValue(value);
    onChange &&
      onChange({
        type: 'ICON',
        name: value,
      });
  };

  return (
    <>
      <Input value={inputValue} onChange={handleChange} />
    </>
  );
}

export default observer(IconSetter);
