import { redirect } from "@sveltejs/kit";

import { getCurrentLanguage } from "$lib/i18n";
import { Database } from "$lib/server/database";

import type { PageServerLoad } from "./$types";

export const load = (async ({ locals, params }) => {
  if (!locals.isOrganisator) {
    throw redirect(302, `/${getCurrentLanguage(params.lang)}`);
  }

  const { prisma } = await Database.getInstance();
  const users = await prisma.user.findMany({
    select: {
      email: true,
      id: true,
      name: true,
      role: true,
    },
  });

  return {
    users,
  };
}) satisfies PageServerLoad;
