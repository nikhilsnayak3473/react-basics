import { useState } from 'react';
import { Button } from './button';
import { X } from 'lucide-react';

export function Modal({ children, modalTrigger }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{modalTrigger}</Button>
      {isOpen ? (
        <div className='absolute w-screen h-screen bg-slate-700/80 flex items-center justify-center z-50 inset-0'>
          <div className='relative bg-slate-700 p-4 rounded-sm'>
            <Button
              onClick={() => setIsOpen(false)}
              className='absolute right-0 translate-x-1/2 -translate-y-full rounded-full aspect-square p-1'
            >
              <X size={12} />
            </Button>
            <div> {children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
