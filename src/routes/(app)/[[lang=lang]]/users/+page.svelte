<script lang="ts">
import { page } from "$app/stores";
import UserEditor from "$lib/components/user-editor/UserEditor.svelte";
import { i18n, type I18N } from "$lib/i18n";

import type { PageServerData } from "./$types";

export let data: PageServerData;

let I18N: I18N;

$: I18N = i18n($page.params.lang);
</script>

<svelte:head>
  <title>{I18N.USERS.TITLE}</title>
</svelte:head>

<div class="overflow-x-auto p-5">
  <label
    for="user-editor-modal"
    class="btn btn-primary mb-5"
  >
    {I18N.USERS.CREATE_USER_BUTTON}
  </label>

  <table class="table w-full">
    <thead>
      <tr>
        <th>{I18N.USERS.TABLE.NAME_COLUMN}</th>

        <th>{I18N.USERS.TABLE.EMAIL_COLUMN}</th>

        <th>{I18N.USERS.TABLE.ROLE_COLUMN}</th>
      </tr>
    </thead>

    <tbody>
      {#each data.users as user}
        <tr>
          <td>{user.name}</td>

          <td>{user.email}</td>

          <td>{user.role}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<UserEditor
  user="{{
    email: '',
    name: '',
    role: 'VOLUNTEER',
  }}"
  submitButtonText="{I18N.UTILS.CREATE}"
/>
