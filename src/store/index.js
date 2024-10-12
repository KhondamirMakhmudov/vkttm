import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { config } from "@/config";
import { get } from "lodash";

let store = (set) => ({
  user: null,
  serUser: (user) => set((state) => ({ ...state, user })),
  currencyList: [],
  setCurrencyList: (currencyList) =>
    set((state) => ({ ...state, currencyList })),
});

let settingsStore = (set) => ({
  token: null,
  darkMode: false,
  lang: config.DEFAULT_APP_LANG,
  setToken: (token) => set((state) => ({ ...state, token })),
  setLang: (lang) => set((state) => ({ ...state, lang })),
  setMode: () => set((state) => ({ ...state, darkMode: !state.darkMode })),
});

store = devtools(store);
settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "settings" });

export const useSettingsStore = create(settingsStore);
