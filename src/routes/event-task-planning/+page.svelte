<form id="eventTaskForm" on:submit|preventDefault="{handleSubmit}">
    <label for="eventTaskName">Nom de la tâche:</label>
    <input type="text" id="eventTaskName" bind:value="{eventTaskName}" required>

    <label for="eventTaskDescription">Description de la tâche:</label>
    <textarea id="eventTaskDescription" bind:value="{eventTaskDescription}" required></textarea>

    <label for="eventTaskPerson">Personne en charge de la tâche</label>
    <select id="eventTaskPerson" bind:value="{eventTaskPerson}">
        <option></option>
        <!-- FIXME : Remove this, testing purpose-->
        <option value="samuel">samuel</option>
        <option value="samuel2">samuel2</option>
        <option value="samuel3">samuel3</option>
    </select>    

    <label for="eventTaskStartDate">Date de début de la tâche:</label>
    <input type="date" id="eventTaskStartDate" bind:value="{eventTaskStartDate}" required>

    <label for="eventTaskStartTime">Heure de début de la tâche:</label>
    <input type="time" id="eventTaskStartDate" bind:value="{eventTaskStartTime}" required>

    <label for="eventTaskEndDate">Date de fin de la tâche:</label>
    <input type="date" id="eventTaskEndDate" on:change="{manageEndDate}" bind:value="{eventTaskEndDate}" required>

    <label for="eventTaskEndTime">Heure de fin de la tâche:</label>
    <input type="time" id="eventTaskEndTime" on:change="{manageEndTime}" bind:value="{eventTaskEndTime}" required>

    <input type="submit" value="Créer la tâche">
  </form>
  
<script lang="ts">
  
  let eventTaskName: string = "";
  let eventTaskDescription: string = "";
  let eventTaskPerson: string = ""
  let eventTaskStartDate: Date = new Date();
  let eventTaskStartTime: Date = new Date();
  let eventTaskEndDate: Date = new Date();
  let eventTaskEndTime: Date = new Date(); 
  
  function handleSubmit() { 
      // TODO, La logique ici est de se connecter avec Prisma et de faire la requete SQL
      // TODO, en attente de la logique de Jeanne pour copier
      console.log("On envoie les données");
  }

  // Vérifie si la date de fin n'est pas plus petite que la date de début. Sinon fixe la date de fin à la même date (et heure)
  // que la date de début.
  function manageEndDate() {
    if (eventTaskEndDate < eventTaskStartDate) {
        eventTaskEndDate = eventTaskStartDate;
    }
  }

  function manageEndTime() {
    console.log(eventTaskStartTime.toDateString)
    if (eventTaskEndDate === eventTaskStartDate && eventTaskEndTime < eventTaskStartTime) {
        eventTaskEndTime = eventTaskStartTime;
    }
  }
</script>