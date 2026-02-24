import {create, type StateCreator} from "zustand";

interface IActions {
    increment: () => void;
    decrement: () => void;
}

interface IInitialState {
    count: number;
}

interface ICounterState extends IInitialState, IActions {}


const initialState: IInitialState = {
    count: 0
};

//внутри криэйт - колбэк
const сounterStore: StateCreator<ICounterState> = ((set) => ({
    ...initialState,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement:() => set((state) => ({count: state.count - 1}))
}))

const useCounterStore = create<ICounterState>()(сounterStore);

// селекторы
export const useCount = () => useCounterStore((state) => state.count);
//export const incrementCount = () => useCounterStore((state) => state.increment);
export const incrementCount = () => useCounterStore.getState().increment;
//export const decrementCount = () =>  useCounterStore((state) => state.decrement);
export const decrementCount = () =>  useCounterStore.getState().decrement;