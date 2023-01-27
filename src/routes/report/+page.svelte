<script>
    let name = '';
    let description = '';
    let typeOfAssistance = '';
  
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
    <select id="type-of-assistance" bind:value={typeOfAssistance} required>
      <option value="">--Choisir--</option>
      <option value="organisateur">Organisateur</option>
      <option value="benevole">Bénévole</option>
      <option value="securite">Sécurité</option>
      <option value="premierSoin">Premier Soins</option>
    </select>
  
    <button type="submit">Envoyer</button>
  </form>  