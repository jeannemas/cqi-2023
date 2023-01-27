import { fail, redirect, type Actions } from "@sveltejs/kit";
import { signInWithEmailAndPassword, signOut, type AuthError } from "firebase/auth";

import { auth } from "$lib/server/firebase";
import { isLoggedIn } from "$lib/utils/authGuard";

import type { PageServerLoad } from "./$types";

export const load = (({ locals }) => {
  if (isLoggedIn(locals)) {
    throw redirect(303, "/");
  }
}) satisfies PageServerLoad;

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString() ?? null;
    const password = data.get("password")?.toString() ?? null;
    const redirectPath = data.get("redirect")?.toString() ?? null;

    if (!email || !password) {
      return fail(400, {
        message: "Missing email or password",
      });
    }

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      const token = await credentials.user.getIdToken();

      await signOut(auth);

      cookies.set("token", token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    } catch (err) {
      return fail(400, {
        message: (err as AuthError).message,
      });
    }

    throw redirect(303, redirectPath ?? "/");
  },
} satisfies Actions;
