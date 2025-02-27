import { StoreApi, useStore } from "zustand";

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;

export const createBoundedUseStore = ((store) => (selector) =>
  useStore(store, selector)) as <S extends StoreApi<unknown>>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(selector: (state: ExtractState<S>) => T): T;
};
