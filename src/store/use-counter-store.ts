import {create} from "zustand";

interface ICounterState {
    value: number;
    increment: () => void;
    decrement: () => void;
}

//внутри криэйт - колбэк
export const useCounterStore = create<ICounterState>()((set) => ({
    value: 4,
    increment: () => set((state) => ({value: state.value + 1})),
    decrement:() => set((state) => ({value: state.value - 1}))
}))