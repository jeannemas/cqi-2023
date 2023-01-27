<script>
import Item from "../../lib/components/lost-found/item.svelte";
import { lostFoundItems } from "../../lib/module/lost-found";
let data = {
  name: "",
  desciption: "",
  date: "",
  time: "",
  id: null,
};

let isDataValid = true;
let search = "";

let addItem = () => {
  // valideData();
  if (isDataValid) {
    const newItem = {
      id: $lostFoundItems.length + 1,
      name: data.name,
      desciption: data.desciption,
      date: data.date,
      time: data.time,
    };
    $lostFoundItems = $lostFoundItems.concat(newItem);
    data = {
      name: "",
      desciption: "",
      date: "",
      time: "",
      id: null,
    };
  }
};

let valideData = () => {
  isDataValid =
    data.date.length != 0 &&
    data.desciption.length != 0 &&
    data.name.length != 0 &&
    data.time.length != 0;
};
</script>

<div>
  <h2>Objet perdu</h2>
  <form>
    <input
      bind:value="{search}"
      type="text"
      placeholder="nom de objet"
      class="input input-bordered input-info w-full max-w-xs"
    />
  </form>
  <label
    for="my-modal-claim"
    class="btn">Réclamez le</label
  >
  {#if $lostFoundItems.length > 0}
    <table>
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Date trouvé</th>
        <th>Heure trouvé</th>
        <th>Remise</th>
      </tr>

      {#each $lostFoundItems as item}
        {#if search.length == 0 || item.name
            .toLowerCase()
            .includes(search.toLowerCase()) || item.desciption
            .toLowerCase()
            .includes(search.toLowerCase()) || item.date
            .toLowerCase()
            .includes(search.toLowerCase()) || item.time
            .toLowerCase()
            .includes(search.toLowerCase())}
          <Item
            id="{item.id}"
            name="{item.name}"
            desciption="{item.desciption}"
            date="{item.date}"
            time="{item.time}"
          />
        {/if}
      {/each}
    </table>
  {:else}
    <p>Aucune objet trouvé</p>
  {/if}

  <h3>Objet non trouvé?</h3>
  <label
    for="my-modal-claim"
    class="btn">Réclamez le</label
  >
</div>

<!-- Modale pour create item -->
<input
  type="checkbox"
  id="my-modal-claim"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box">
    <label
      for="my-modal-claim"
      class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
    >
    <!-- form item -->
    <section class="section">
      <div class="container">
        <form
          method="post"
          class="box"
        >
          <div class="field">
            <label
              for="name"
              class="label"
            >
              Nom de l'objet
            </label>

            <div class="control">
              <input
                class="input"
                type="text"
                id="name"
                name="name"
                autocomplete="name"
                placeholder="nom de l'objet"
                bind:value="{data.name}"
                required
              />
            </div>
          </div>

          <div class="field">
            <label
              for="description"
              class="label"
            >
              Description de l'objet
            </label>

            <div class="control">
              <input
                class="input"
                type="text"
                id="description"
                name="description"
                autocomplete="description"
                placeholder="description de l'objet"
                bind:value="{data.desciption}"
                required
              />
            </div>
          </div>

          <div class="field">
            <label
              for="description"
              class="label"
            >
              Date perdu
            </label>
            <div class="control">
              <input
                class="input"
                type="date"
                id="description"
                name="description"
                bind:value="{data.date}"
                required
              />
            </div>
            <label
              for="description"
              class="label"
            >
              Heure perdu
            </label>
            <div class="control">
              <input
                class="input"
                type="time"
                id="time"
                name="time"
                bind:value="{data.time}"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="modal-action">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <label
        for="my-modal-claim"
        class="btn"
        on:click="{() => addItem()}">Envoyer</label
      >
    </div>
  </div>
</div>
