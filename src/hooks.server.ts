import type { User } from "@prisma/client";
import { redirect, type Handle } from "@sveltejs/kit";

import { verifyIdToken } from "$lib/server/auth-utils/verifyIdToken";
import { Database } from "$lib/server/database";
import { isLoggedIn } from "$lib/utils/authGuard";

export const handle = (async ({ event, resolve }) => {
  const {
    locals,
    url: { pathname },
  } = event;
  const decodedIdToken = await verifyIdToken(event);
  const { prisma } = await Database.getInstance();

  let user: User | null = null;
  let isOrganisator = false;
  let isVolunteer = false;

  if (decodedIdToken) {
    user = await prisma.user.findUnique({
      where: {
        firebaseUid: decodedIdToken.uid,
      },
    });
  }

  if (user) {
    isOrganisator = user.role === "ORGANISATOR";
    isVolunteer = user.role === "VOLUNTEER";
  }

  locals.decodedIdToken = decodedIdToken;
  locals.user = user;
  locals.isOrganisator = isOrganisator;
  locals.isVolunteer = isVolunteer;

  if (!pathname.startsWith("/auth")) {
    if (!isLoggedIn(locals)) {
      throw redirect(303, `/auth/login?redirect=${pathname}`);
    }
  }

  const response = await resolve(event);

  return response;
}) satisfies Handle;
