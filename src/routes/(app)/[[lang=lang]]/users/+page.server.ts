import { redirect, type Actions } from "@sveltejs/kit";

import { getCurrentLanguage } from "$lib/i18n";
import { Database } from "$lib/server/database";
import { auth } from "$lib/server/firebase-admin";

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

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name")?.toString() ?? null;
    const email = data.get("email")!.toString();
    const role = data.get("role")!.toString();
    const { prisma } = await Database.getInstance();

    try {
      const { uid } = await auth.createUser({
        displayName: name,
        email,
        password: email,
      });

      await prisma.user.create({
        data: {
          email,
          name,
          role,
          firebaseUid: uid,
        },
      });
    } catch (error) {
      console.error(error);

      return {
        success: false,
      };
    }

    throw redirect(303, request.url);
  },
} satisfies Actions;
