import { create } from "zustand";
import { Part } from "../types";

export type State = {
  parts: Part[];
};

export type Actions = {
  addPart: (part: Part) => void;
};

const useAppStore = create<State & Actions>((set) => ({
  parts: [],
  addPart: (part) =>
    set((state) => ({
      parts: [...state.parts, part],
    })),
}));

export default useAppStore;
