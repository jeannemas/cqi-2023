import { RequestHandler } from "./$types";

export const POST = (() => {
    return Response.json(null)
}) satisfies RequestHandler