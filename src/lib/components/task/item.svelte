<script lang="ts">
import { tasks } from "../../module/task";
import { volonteers } from "../../module/volonteer";

export let id: number;
export let name: string;
export let description: string;
export let volonteer: string;
export let startDate: string;
export let startTime: string;
export let endDate: string;
export let endTime: string;

let deleteItem = () => {
  var index = $tasks.map(({ id }: any) => id).indexOf(id);
  $tasks.splice(index, 1);
  $tasks = $tasks;
};

let data = {
  name: name,
  description: description,
  volonteer: volonteer,
  startDate: startDate,
  startTime: startTime,
  endDate: endDate,
  endTime: endTime,
  id: null,
};

let editItem = () => {
  var index = $tasks.map(({ id }: any) => id).indexOf(id);
  $tasks[index] = data;
  $tasks = $tasks;
};
</script>

<tr>
  <td>{name}</td>
  <td>{description}</td>
  <td>{volonteer}</td>
  <td>{startDate}</td>
  <td>{startTime}</td>
  <td>{endDate}</td>
  <td>{endTime}</td>
  <td>
    <label
      for="my-modal-edit"
      class="btn">Modifier</label
    >
    <label
      for="my-modal-suppr"
      class="btn">Supprimer</label
    >
  </td>
</tr>

<input
  type="checkbox"
  id="my-modal-suppr"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Confirmez la suppression de {name}</h3>
    <div class="modal-action">
      <label
        for="my-modal-suppr"
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

<!-- Modale pour edit item -->
<input
  type="checkbox"
  id="my-modal-edit"
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
        for="my-modal-edit"
        class="btn"
        on:click="{() => editItem()}">Envoyer</label
      >
    </div>
  </div>
</div>
