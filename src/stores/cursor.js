import { create } from 'zustand';
import { CursorModes } from '@constants/cursor';

export const useCursorStore = create(set => ({
  cursor: CursorModes.Default,

  setCursorMode: cursor => {
    if (!Object.values(CursorModes).includes(cursor)) return;

    set({ cursor });
  },

  clearCursorMode: () => {
    set({ cursor: CursorModes.Default });
  },
}));
