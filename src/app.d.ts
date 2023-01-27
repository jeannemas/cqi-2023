// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { User } from "@prisma/client";
import type { DecodedIdToken } from "firebase-admin/auth";

declare global {
  declare namespace App {
    interface Error {
      message: string;
    }

    interface Locals {
      decodedIdToken: DecodedIdToken | null;
      user: User | null;
      isOrganisator: boolean;
      isVolunteer: boolean;
    }

    // interface PageData {}

    // interface Platform {}
  }
}
