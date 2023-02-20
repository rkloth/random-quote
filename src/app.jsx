import Cursor from '@components/ui/cursor';
import RandomQuotePage from '@pages/random-quote';
import { useTagsLoader } from '@stores/tags';
import { useEffect } from 'react';

import '@styles/app.scss';

function App() {
  const { isTagsLoaded, fetchTags } = useTagsLoader();

  useEffect(() => {
    fetchTags();
  }, []);

  const renderRandomQuotePage = () => {
    if (isTagsLoaded) return <RandomQuotePage />;
    else return <p>Loading Tags..</p>;
  };

  return (
    <div id="app">
      <Cursor />

      {renderRandomQuotePage()}
    </div>
  );
}

export default App;
