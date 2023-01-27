<script lang="ts">
import { page } from "$app/stores";
import { i18n, type I18N } from "$lib/i18n";

import type { ActionData } from "./$types";

export let form: ActionData;

const redirect = $page.url.searchParams.get("redirect") ?? "/";

let I18N: I18N;

$: I18N = i18n($page.params.lang);
</script>

<svelte:head>
  <title>{I18N.AUTH.TITLE}</title>
</svelte:head>

{#if form?.message}
  <p class="error">
    {form.message}
  </p>
{/if}

<form
  action="?/login"
  class="card w-96 p-8"
  method="post"
>
  <h1 class="uppercase whitespace-nowrap text-4xl font-bold">{I18N.AUTH.TITLE}</h1>

  <input
    type="hidden"
    name="redirect"
    value="{redirect}"
  />

  <div class="form-control w-full max-w-xs">
    <label
      class="label"
      for="email"
    >
      <span class="label-text">{I18N.AUTH.EMAIL_FIELD}</span>
    </label>

    <input
      type="email"
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs"
      id="email"
      name="email"
      required
      autocomplete="email"
    />
  </div>

  <div class="form-control w-full max-w-xs">
    <label
      class="label"
      for="password"
    >
      <span class="label-text">{I18N.AUTH.PASSWORD_FIELD}</span>
    </label>

    <input
      type="password"
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs"
      id="password"
      name="password"
      required
      autocomplete="current-password"
    />
  </div>

  <div class="form-control w-full max-w-xs mt-5">
    <button
      class="btn"
      type="submit"
    >
      {I18N.AUTH.LOGIN_BUTTON}
    </button>
  </div>
</form>
