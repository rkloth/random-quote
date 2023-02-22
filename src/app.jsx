import { Cursor } from '@components/ui/cursor';
import RandomQuotePage from '@pages/random-quote';
import { useTagsLoader } from '@stores/tags';
import { useEffect } from 'react';
import { useRandomQuotesStore } from '@stores/random-quotes';

import '@styles/app.scss';
import logo from '@/assets/images/rk-logo-animate.gif';

function App() {
  const { isTagsLoaded, fetchTags } = useTagsLoader();
  const randomQuotes = useRandomQuotesStore(state => state.randomQuotes);
  const create = useRandomQuotesStore(state => state.create);

  useEffect(() => {
    const initialLoad = async () => {
      await fetchTags();
      create();
    };
    initialLoad();
  }, []);

  if (!isTagsLoaded || !randomQuotes.length)
    return (
      <div className="loading-screen">
        <img src={logo} alt="loading" />
      </div>
    );
  return (
    <div id="app">
      <Cursor />
      <RandomQuotePage />
    </div>
  );
}

export default App;
