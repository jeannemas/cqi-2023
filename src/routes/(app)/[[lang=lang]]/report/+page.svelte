<script lang='ts'>
    import { page } from "$app/stores";

    import { i18n, type I18N } from "$lib/i18n";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;

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
  
    const handleSubmit = async () => {
        // fetch(`/report`, {
        // method: "POST",
        // body: JSON.stringify({
        //     name,
        //     description,
        //     typeOfAssistance,
        // })
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(() => alert('Failed to submit'))
      console.log(name, description, typeOfAssistance);
    }

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
    <form class="form-control w-full max-w-xs"on:submit|preventDefault|stopPropagation={handleSubmit}>
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
          <th>{I18N.REPORT.NAME}</th>
          <th>{I18N.REPORT.DESCRIPTION}</th>
        </tr>
      </thead>
      <tbody>
        {#each data.reports as problem}
          <tr>
            <td>{problem.name}</td>
            <td>{problem.description}</td>
            <td>{problem.reportType}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
