import { useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

import '@styles/components/ui/cursor.scss';

export const CreateCursor = ({ image, isCreating }) => {
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    if (!image) return;

    const fac = new FastAverageColor();
    fac.getColorAsync(image.data).then(color => {
      setColor(color.hex);
    });
  }, [image]);

  return (
    <div
      className="create-cursor"
      style={{ backgroundColor: color }}
      disabled={isCreating}
    >
      {isCreating ? <p>Creating...</p> : <p>Create new Quote</p>}
    </div>
  );
};
