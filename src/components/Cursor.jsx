import { useCursor } from '../hooks/useCursor';

export const Cursor = () => {
  const { ref, enabled, visible, hover } = useCursor();

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor ${hover ? 'hover' : ''} ${visible ? '' : 'is-hidden'}`}
    />
  );
};
