<script lang="ts">
export let autocomplete = "";
export let label: string;
export let name: string;
export let placeholder = "";
export let required = false;
export let type = "text";
export let value: string;
</script>

<div class="form-control w-full max-w-xs">
  <label
    class="label"
    for="{name}"
  >
    <span class="label-text">{label}</span>
  </label>

  <input
    type="{type}"
    placeholder="{placeholder}"
    class="input input-bordered w-full max-w-xs"
    id="{name}"
    name="{name}"
    required="{required}"
    value="{value}"
    autocomplete="{autocomplete}"
    on:input
  />
</div>
