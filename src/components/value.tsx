import type { FC } from "react";
import { useCount } from "../store/use-counter-store";

const Value: FC = () => {
  const count = useCount(); //кастомный селектор

  return <h2>{count}</h2>;
};

export default Value;