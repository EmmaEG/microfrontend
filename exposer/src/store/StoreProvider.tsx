"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Store } from "./Store-tofix";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}
