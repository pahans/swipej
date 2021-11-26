import { act } from "@testing-library/react";

export async function actWait(ms: number = 0): Promise<void> {
  await act(
    async (): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
  );
}
