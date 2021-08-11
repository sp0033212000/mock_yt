import { useCallback, useEffect } from "react";
import { isNotSet } from "../../helper/format.checker";

export const useInteractiveOutsideTargetHandler = (
  el: HTMLElement | null,
  cb: Function
) => {
  const clickHandler = useCallback(
    (event: Event) => {
      if (isNotSet(el)) return;
      if (
        el instanceof HTMLElement &&
        event.target instanceof HTMLElement &&
        !el.contains(event.target)
      ) {
        cb();
      }
    },
    [cb, el]
  );

  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("touchstart", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("touchstart", clickHandler);
    };
  }, [clickHandler]);
};

export default useInteractiveOutsideTargetHandler;
