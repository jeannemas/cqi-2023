<form id="eventForm" on:submit|preventDefault="{handleSubmit}">
  <label for="eventName">Nom de l'événement:</label>
  <input type="text" id="eventName" bind:value="{eventName}" required>
  
  <label for="eventDescription">Description de l'événement:</label>
  <textarea id="eventDescription" bind:value="{eventDescription}" required></textarea>
  
  <label for="eventStartDate">Date de début de l'événement:</label>
  <input type="date" id="eventStartDate" bind:value="{eventStartDate}" required>
  
  <label for="eventEndDate">Date de fin de l'événement:</label>
  <input type="date" id="eventEndDate" bind:value="{eventEndDate}" required>
  
  <input type="submit" value="Créer l'événement">
</form>

<script lang="ts">

let eventName: string = "";
let eventDescription: string = "";
let eventStartDate: Date = new Date();
let eventEndDate: Date = new Date();

function handleSubmit() { 
    // TODO, La logique ici est de se connecter avec Prisma et de faire la requete SQL
    // TODO, en attente de la logique de Jeanne pour copier
}
</script>