import { useCursor } from '../hooks/useCursor';

export const Cursor = () => {
  const { pos, hover } = useCursor();

  return (
    <div
      className={`cursor ${hover ? 'hover' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
};
