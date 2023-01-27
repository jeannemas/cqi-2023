import { getCurrentLanguage, i18n } from "$lib/i18n";

import type { Link } from "../../../models/Link";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals, params }) => {
  const I18N = i18n(params.lang);
  const links = [
    {
      path: `/${getCurrentLanguage(params.lang)}/users`,
      label: I18N.NAVBAR.USERS_ITEM,
      organisator: true,
    },
    {
      path: `/${getCurrentLanguage(params.lang)}/lost-found`,
      label: I18N.NAVBAR.LOST_AND_FOUND,
      organisator: true,
    },
    {
      path: `/${getCurrentLanguage(params.lang)}/list-task`,
      label: I18N.NAVBAR.LIST_TASK,
      organisator: true,
    },
  ] satisfies Link[];

  return {
    links: links.filter((link) => !link.organisator || locals.isOrganisator),
  };
}) satisfies LayoutServerLoad;
