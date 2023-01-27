<script>
    const Assitance = {
      Organisateur: "Organisateur",
      Benevole:"Benevole",
      Securite:"Securite",
      PremierSoins:"PremierSoins"
    }

    let name = '';
    let description = '';
    let typeOfAssistance = Assitance.Benevole;
  
    /**
   * @param {{ preventDefault: () => void; }} event
   */
    function handleSubmit(event) {
      event.preventDefault();
      // TODO Envoyer les données au serveur ici
      console.log(name, description, typeOfAssistance);
    }
  </script>
  
  <a href="/report">report</a>
  <a href="/report/history">history</a>

  <form on:submit={handleSubmit}>
    <label for="name">Nom:</label>
    <input type="text" id="name" bind:value={name} required>
  
    <label for="description">Description:</label>
    <textarea id="description" bind:value={description} required></textarea>
  
    <label for="type-of-assistance">Type d'assistance:</label>
    <select bind:value={typeOfAssistance}>
      {#each Object.keys(Assitance) as key}
        <option value={key}>{key}</option>
      {/each}
    </select>
  
    <button type="submit">Envoyer</button>
  </form>  