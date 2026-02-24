import type { FC } from "react";
import { useCounterStore } from "../store/use-counter-store";



const Value: FC = () => {
  const count = useCounterStore((state) => state.value);

  return <h2>{count}</h2>;
};

export default Value;
