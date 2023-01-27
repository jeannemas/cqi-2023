<script lang="ts">
import type { User } from "@prisma/client";
import { createEventDispatcher } from "svelte";

import { page } from "$app/stores";
import { i18n, type I18N } from "$lib/i18n";

type Payload = Partial<User>;

export let user: Payload = {};
export let submitButtonText: string;

const dispatch = createEventDispatcher();

let I18N: I18N;
let roles: I18N["USERS"]["ROLES"];

$: {
  I18N = i18n($page.params.lang);
  roles = I18N.USERS.ROLES;
}
</script>

<input
  type="checkbox"
  id="user-editor-modal"
  class="modal-toggle"
/>

<div class="modal">
  <div class="modal-box">
    <div class="form-control w-full max-w-xs">
      <label
        class="label"
        for="name"
      >
        <span class="label-text">{I18N.USERS.TABLE.NAME_COLUMN}</span>
      </label>

      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
        id="name"
        name="name"
        required
        bind:value="{user.name}"
        autocomplete="name"
      />
    </div>

    <div class="form-control w-full max-w-xs">
      <label
        class="label"
        for="email"
      >
        <span class="label-text">{I18N.USERS.TABLE.EMAIL_COLUMN}</span>
      </label>

      <input
        type="email"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
        name="email"
        id="email"
        required
        bind:value="{user.email}"
        autocomplete="email"
      />
    </div>

    <div class="form-control w-full max-w-xs">
      <label
        class="label"
        for="role"
      >
        <span class="label-text">{I18N.USERS.TABLE.ROLE_COLUMN}</span>
      </label>

      <select
        class="select select-bordered"
        bind:value="{user.role}"
      >
        {#each Object.entries(roles) as [key, label]}
          <option value="{key}">
            {label}
          </option>
        {/each}
      </select>
    </div>

    <div class="modal-action">
      <label
        for="user-editor-modal"
        class="btn"
      >
        {I18N.UTILS.CANCEL}
      </label>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <label
        for="user-editor-modal"
        class="btn btn-primary"
        on:click="{() => dispatch('submit', user)}">{submitButtonText}</label
      >
    </div>
  </div>
</div>
