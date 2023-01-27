
<script>
    // TODO get liste de la bd
    let list = [
      { name: 'John', description: '30' },
      { name: 'Jane', description: '25' },
      { name: 'Bob', description: '35' }
    ];
  </script>
  
  <a href="/report">report</a>
  <a href="/report/history">history</a>
  <table>
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
  