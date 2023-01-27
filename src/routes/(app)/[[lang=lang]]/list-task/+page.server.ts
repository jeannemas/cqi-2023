import { redirect, type Actions } from "@sveltejs/kit";

import { Database } from "$lib/server/database";
import { auth } from "$lib/server/firebase-admin";

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
