"use client";

import { Button } from "@/components";
import s from "./page.module.scss";

export default function Home() {
   return (
      <main className={s.home}>
         <Button onClick={() => {}} size="large">
            Button
         </Button>

         <div className={s.wrapper}>
            <h1 className={s.title}>title 1</h1>
            <div className={s.innerWrapper}>
               <h1 className={s.innerTitle}>title 2</h1>
            </div>
         </div>
      </main>
   );
}
