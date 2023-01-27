<script>
import Item from "../../lib/components/lost-found/item.svelte";
let items = [
    {
      id: 1,
      name: "Sweetest framework ever",
      desciption: "Church",
      time: "This is the content of this note"
    },
    {
      id: 2,
      name: "Sweetest framework ever",
      desciption: "Church",
      time: "This is the content of this note"
    },
  ];
</script>

<div>
  <h2>Objet perdu</h2>
  <form>
    <input
      type="text"
      placeholder="nom de objet"
      class="input input-bordered input-info w-full max-w-xs"
    />
  </form>
  <table>
    <tr>
      <th>Nom</th>
      <th>Description</th>
      <th>Heure trouvé</th>
      <th>Remise</th>
    </tr>

    {#each items as item}
      <Item name={item.name} desciption={item.desciption} time={item.time}/>
    {/each}
  </table>

  <h3>Objet non trouvé?</h3>
  <a href="/reclaim">Réclamez le</a>
</div>
