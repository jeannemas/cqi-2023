import { redirect } from "@sveltejs/kit";

import { getCurrentLanguage } from "$lib/i18n";
import { Database } from "$lib/server/database";

import type { PageServerLoad } from "./$types";

export const load = (async ({ locals, params }) => {
  if (!locals.isOrganisator) {
    throw redirect(302, `/${getCurrentLanguage(params.lang)}`);
  }

  const { prisma } = await Database.getInstance();
  const reports = await prisma.report.findMany({
    select: {
      name: true,
      description: true,
      reportType: true,
    },
  });

  return {
    reports,
  };
}) satisfies PageServerLoad;

export async function post(req:any, res:any) {
    const {prisma} = await Database.getInstance();
    console.log(req);
    const report = await prisma.report.create({
      data: req.body,
    });
  
    return {
      body: report,
    };
}

