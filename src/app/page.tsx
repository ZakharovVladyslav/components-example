'use client';

import { Input } from '@/components';
import s from './page.module.scss';

export default function Home() {
   return (
      <main className={s.main}>
         <Input
            value="value"
            onChange={() => {}}
            label="Label"
            size="s"
            error="Something went wrong"
         />
      </main>
   );
}
