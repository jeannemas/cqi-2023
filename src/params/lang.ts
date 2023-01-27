import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => /^[a-z]{2}$/.test(param)) satisfies ParamMatcher;
