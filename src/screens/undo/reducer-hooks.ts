import { useCallback, useReducer } from "react";

const UNDO = "UNDO";
const REDO = "REDO";
const SET = "SET";
const RESET = "RESET";

type State<T> = {
  past: T[];
  present: T;
  future: T[];
};

type ActionType = typeof UNDO | typeof REDO | typeof SET | typeof RESET;

type Action<T> = { newPresent: T; type: ActionType };

export const undoReducer = <T>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  const { past, present, future } = state;
  const { newPresent } = action;
  // return state;

  switch (action.type) {
    case UNDO: {
      if (past.length === 0) return state;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    }

    case REDO: {
      if (future.length === 0) return state;

      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    }

    case SET: {
      if (newPresent === present) return state;

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }

    case RESET: {
      return {
        past: [],
        present: newPresent,
        future: [],
      };
    }
    default:
      return state;
  }
};

export const useUndo = <T>(initialPresent: T) => {
  const [state, dispatch] = useReducer(
    (state: State<T>, action: Action<T>) => undoReducer<T>(state, action),
    {
      past: [],
      present: initialPresent,
      future: [],
    }
  );

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(
    (newPresent) => dispatch({ type: UNDO, newPresent }),
    []
  );
  const redo = useCallback(
    (newPresent) => dispatch({ type: REDO, newPresent }),
    []
  );
  const set = useCallback(
    (newPresent) => dispatch({ type: SET, newPresent }),
    []
  );
  const reset = useCallback(
    (newPresent) => dispatch({ type: RESET, newPresent }),
    []
  );

  return [
    state,
    {
      undo,
      canUndo,
      redo,
      canRedo,
      set,
      reset,
    },
  ] as const;
};
