<script lang="ts">
import { lostFoundItems } from "../../module/lost-found";

export let id: number;
export let name: string;
export let description: string;
export let date: string;
export let time: string;

let deleteItem = () => {
  var index = $lostFoundItems.map(({ id }: any) => id).indexOf(id);
  $lostFoundItems.splice(index, 1);
  $lostFoundItems = $lostFoundItems;
};
</script>

<tr>
  <td>{name}</td>
  <td>{description}</td>
  <td>{date}</td>
  <td>{time}</td>
  <td>
    <label
      for="my-modal-found"
      class="btn">Trouvé</label
    >
  </td>
</tr>

<input
  type="checkbox"
  id="my-modal-found"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Est-ce que {name} a bien été trouvé?</h3>
    <div class="modal-action">
      <label
        for="my-modal-found"
        class="btn">Non</label
      >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <label
        for="my-modal-found"
        class="btn"
        on:click="{() => {
          deleteItem();
        }}">Oui</label
      >
    </div>
  </div>
</div>
