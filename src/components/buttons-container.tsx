import type { FC } from "react";
import { useCounterStore } from "../store/use-counter-store";

const ButtonsContainer: FC = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div className="card">
      <button onClick={increment}>Увеличить число</button>
      <button onClick={decrement}>Уменьшить число</button>
    </div>
  );
};

export default ButtonsContainer;
