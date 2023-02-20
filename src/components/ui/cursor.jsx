import { useMousePosition } from '@/hooks/use-mouse-position';

import '@styles/components/ui/cursor.scss';

export default function Cursor() {
  const mousePosition = useMousePosition();

  return (
    <div
      className="cursor"
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
      }}
    />
  );
}
