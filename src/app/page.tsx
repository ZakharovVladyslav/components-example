'use client';

import { ChangeEvent, useState } from 'react';
import { SearchableSelect } from '@/components';
import s from './page.module.scss';

export default function Home() {
   const [value, setValue] = useState<TOption>({ key: '', value: '' });
   const [options] = useState<TOption[]>([
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
   ]);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, value: e.target.value || '' });
   };

   const handleSelect = (value: string) => {
      setValue({
         key: value,
         value: value && `Option ${value}`,
      });
   };

   return (
      <main className={s.main}>
         <SearchableSelect
            value={value?.key || ''}
            displayingValue={value?.value || ''}
            onChange={handleChange}
            setOption={handleSelect}
            options={options}
            placeholder="Placeholder"
         />

         <p>Key: {value.key}</p>
         <p>Value: {value.value}</p>
      </main>
   );
}
