<script lang="ts">
import type { LayoutServerData } from "./$types";
import Navbar from "./Navbar.svelte";

export let data: LayoutServerData;
</script>

<Navbar links="{data.links}" />

<slot />
