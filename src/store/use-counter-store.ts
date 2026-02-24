import {create} from "zustand";

interface ICounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

//внутри криэйт - колбэк
export const useCounterStore = create<ICounterState>()((set) => ({
    count: 4,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement:() => set((state) => ({count: state.count - 1}))
}))

export const useCount = () => useCounterStore((state) => state.count);
//export const incrementCount = () => useCounterStore((state) => state.increment);
export const incrementCount = () => useCounterStore.getState().increment;
//export const decrementCount = () =>  useCounterStore((state) => state.decrement);
export const decrementCount = () =>  useCounterStore.getState().decrement;