import { useMousePosition } from '@/hooks/use-mouse-position';
import { useCursorStore } from '@stores/cursor';

import { CursorModes } from '@constants/cursor';

import { useRandomQuoteNavigation } from '@hooks/use-random-quote-navigation';
import { useCurrentRandomQuote } from '@hooks/use-current-random-quote';

import { NavigateCursor } from './navigate';
import { CreateCursor } from './create';

import '@styles/components/ui/cursor.scss';

export const Cursor = () => {
  const mousePosition = useMousePosition();
  const cursorMode = useCursorStore(state => state.cursor);

  const { next, previous, create } = useRandomQuoteNavigation();
  const { image } = useCurrentRandomQuote();

  const handleClick = () => {
    switch (cursorMode) {
      case CursorModes.Next: {
        next();
        break;
      }
      case CursorModes.Previous: {
        previous();
        break;
      }
      case CursorModes.Create: {
        create();
        break;
      }
      default:
        break;
    }
  };

  const renderContent = () => {
    switch (cursorMode) {
      case CursorModes.Default:
        return <div />;
      case CursorModes.Previous: {
        return <NavigateCursor indexDelta={-1} />;
      }
      case CursorModes.Next: {
        return <NavigateCursor indexDelta={1} />;
      }
      case CursorModes.Create: {
        return <CreateCursor image={image} />;
      }
      default:
        return <div />;
    }
  };

  return (
    <div
      className={`cursor ${cursorMode}`}
      onClick={handleClick}
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
      }}
    >
      {renderContent()}
    </div>
  );
};
