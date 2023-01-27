import { redirect } from "@sveltejs/kit";

import { isLoggedIn } from "$lib/utils/authGuard";

import type { PageServerLoad } from "./$types";

export const load = (({ cookies, locals }) => {
  if (isLoggedIn(locals)) {
    cookies.delete("token", {
      path: "/",
    });
  }

  throw redirect(303, "/auth/login");
}) satisfies PageServerLoad;
