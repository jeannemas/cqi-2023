<script lang='ts'>
    import { page } from "$app/stores";

    import { i18n, type I18N } from "$lib/i18n";

    let I18N: I18N;
    let types: I18N["REPORT"]["TYPES"];
    $: {
        I18N = i18n($page.params.lang);
        types = I18N.REPORT.TYPES;
    };


    enum Assitance {
      ORGANISATOR,
      VOLUNTEER,
      SECURITY,
      FIRSTAID
    }

    let name = '';
    let description = '';
    let typeOfAssistance = Assitance.VOLUNTEER;
  
    /**
   * @param {{ preventDefault: () => void; }} event
   */
    function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();
      // TODO Envoyer les données au serveur ici
      console.log(name, description, typeOfAssistance);
    }

    let list = [
      { name: 'John', description: '30' },
      { name: 'Jane', description: '25' },
      { name: 'Bob', description: '35' }
    ];

    function valueEnum (key:string){
      if (key === "ORGANISATOR"){
        return Assitance.ORGANISATOR;
      } else if (key === "SECURITY"){
        return Assitance.SECURITY;
      } else if (key === "FIRSTAID"){
        return Assitance.FIRSTAID;
      } else {
        return Assitance.VOLUNTEER;
      }
    }

  </script>


  <div style="margin-left: 1%; display:flex; flex-direction:row; align-items:flex_start; flex: auto auto;" >
    <form class="form-control w-full max-w-xs" on:submit={handleSubmit}>
      <label class="label" for="name"><span class="label-text">{I18N.REPORT.NAME} :</span></label>
      <input class="input input-bordered w-full max-w-xs" type="text" id="name" bind:value={name} required>
    
      <label class="label" for="description">{I18N.REPORT.DESCRIPTION} :</label>
      <textarea rows="10" id="description" bind:value={description} required></textarea>
    
      <label class="label" for="type-of-assistance">{I18N.REPORT.TYPEOFASSITANCE} :</label>
      <select class="select select-bordered" bind:value={typeOfAssistance}>
        {#each Object.entries(types) as [key,label]}
          <option value="{valueEnum(key)}">{label}</option>
        {/each}
      </select>
    
      <button class="btn btn-primary" type="submit">{I18N.REPORT.SEND}</button>
    </form>  
  
    <table class="table table-striped" style="margin-left:20px;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#each list as problem}
          <tr>
            <td>{problem.name}</td>
            <td>{problem.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
