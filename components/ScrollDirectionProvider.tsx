"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";

export function ScrollDirectionProvider() {
  useScrollDirection();
  return null;
}
