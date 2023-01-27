import type { RequestEvent } from "@sveltejs/kit";

import { auth } from "$lib/server/firebase-admin";

export const verifyIdToken = async ({ cookies }: RequestEvent) => {
  const token = cookies.get("token");

  if (!token) {
    return null;
  }

  try {
    return await auth.verifyIdToken(token);
  } catch {
    return null;
  }
};
