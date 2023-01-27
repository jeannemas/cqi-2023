<script>
import Item from "../../lib/components/task/item.svelte";
import { tasks } from "../../lib/module/task";
import { volonteers } from "../../lib/module/volonteer";

let data = {
  name: "",
  description: "",
  volonteer: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  id: null,
};

let addItem = () => {
  const newItem = {
    id: $tasks.length + 1,
    name: data.name,
    description: data.description,
    volonteer: data.volonteer,
    startDate: data.startDate,
    startTime: data.startTime,
    endDate: data.endDate,
    endTime: data.endTime,
  };
  $tasks = $tasks.concat(newItem);
  console.log($tasks);
  data = {
    name: "",
    description: "",
    volonteer: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    id: null,
  };
};
</script>

<div>
  <h2>Liste des tâches</h2>
  <label
    for="my-modal-claim"
    class="btn">Créer une tâche</label
  >
  {#if $tasks.length > 0}
    <table>
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Bénévole</th>
        <th>Date début</th>
        <th>Heure début</th>
        <th>Date fin</th>
        <th>Heure fin</th>
        <th>Action</th>
      </tr>

      {#each $tasks as item}
        <Item
          id="{item.id}"
          name="{item.name}"
          description="{item.description}"
          volonteer="{item.volonteer}"
          startDate="{item.startDate}"
          startTime="{item.startTime}"
          endDate="{item.endDate}"
          endTime="{item.endTime}"
        />
      {/each}
    </table>
  {:else}
    <p>Aucune tâche trouvée</p>
  {/if}
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
    <section class="section">
      <div class="container">
        <form
          method="post"
          class="box"
          on:submit|preventDefault="{addItem}"
        >
          <div class="field">
            <label
              for="name"
              class="label"
            >
              Nom de la tâche:
            </label>

            <div class="control">
              <input
                class="input"
                type="text"
                id="name"
                name="name"
                autocomplete="name"
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
              Description de la tâche:
            </label>

            <div class="control">
              <input
                class="input"
                type="text"
                id="description"
                name="description"
                autocomplete="description"
                bind:value="{data.description}"
                required
              />
            </div>
          </div>
          <label for="eventTaskPerson">Personne en charge de la tâche</label>
          <select
            id="eventTaskPerson"
            bind:value="{data.volonteer}"
          >
            <option></option>
            {#each $volonteers as volonteer}
              <option value="{volonteer}">{volonteer}</option>
            {/each}
          </select>

          <div class="field">
            <label
              for="description"
              class="label"
            >
              Date de début de la tâche:
            </label>
            <div class="control">
              <input
                class="input"
                type="date"
                id="description"
                name="description"
                bind:value="{data.startDate}"
                required
              />
            </div>
            <label
              for="description"
              class="label"
            >
              Heure de début de la tâche:
            </label>
            <div class="control">
              <input
                class="input"
                type="time"
                id="time"
                name="time"
                bind:value="{data.startTime}"
                required
              />
            </div>
          </div>
          <div class="field">
            <label
              for="description"
              class="label"
            >
              Date de fin de la tâche:
            </label>
            <div class="control">
              <input
                class="input"
                type="date"
                id="description"
                name="description"
                bind:value="{data.endDate}"
                required
              />
            </div>
            <label
              for="description"
              class="label"
            >
              Heure de fin de la tâche:
            </label>
            <div class="control">
              <input
                class="input"
                type="time"
                id="time"
                name="time"
                bind:value="{data.endTime}"
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
