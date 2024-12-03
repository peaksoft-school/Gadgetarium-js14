import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

// export { default as Garbage } from "../icon/garbage.svg";
// export { default as EditLine } from "../icon/editLine.svg";
// export {default as ChangeAican} from '../icon/AicanChanig.svg'
// export {default as Streca} from '../icon/Strelca.svg'
