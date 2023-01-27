<script lang="ts">
import { page } from "$app/stores";
import { getCurrentLanguage, getSupportedLanguages, i18n, type I18N } from "$lib/i18n";
import type { Link } from "../../../models/Link";

export let links: Link[];

let I18N: I18N;

$: I18N = i18n($page.params.lang);
</script>

<nav class="navbar bg-slate-200 drop-shadow-sm relative z-50">
  <div class="navbar-start">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a
          class="font-bold text-xl uppercase"
          href="{`/${getCurrentLanguage($page.params.lang)}`}">EvenTask</a
        >
      </li>

      {#each links as link}
        <li>
          <a href="{link.path}">
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label
        tabindex="0"
        class="btn btn-ghost m-1"
        title="{I18N.NAVBAR.CHANGE_LANGUAGE_ITEM}"
      >
        <i class="bi bi-translate text-2xl"></i>
      </label>

      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
      >
        {#each getSupportedLanguages() as lang}
          <li>
            <a
              href="{`/${lang}${$page.url.pathname.replace(/^\/[a-z]{2}(?:\/)?/, '/')}`}"
              class="uppercase"
            >
              {lang}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label
        tabindex="0"
        class="btn btn-ghost m-1"
      >
        <i class="bi bi-person-circle text-2xl"></i>
      </label>

      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="{`/${getCurrentLanguage($page.params.lang)}/account`}">
            {I18N.NAVBAR.MY_ACCOUNT_ITEM}
          </a>
        </li>

        <li>
          <a href="/auth/logout">
            {I18N.NAVBAR.LOGOUT_ITEM}
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
