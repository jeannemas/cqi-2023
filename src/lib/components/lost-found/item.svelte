<script>
let modalIsOpen = false;

const openModal = () => (modalIsOpen = true);
const closeModal = () => (modalIsOpen = false);
const triggerModal = () => (modalIsOpen = !modalIsOpen);
/**
 * @type {String}
 */
export let name;
/**
 * @type {String}
 */
export let desciption;
/**
 * @type {String}
 */
export let time;
</script>

<tr>
  <td>{name}</td>
  <td>{desciption}</td>
  <td>{time}</td>
  <td
    ><button
      id="btn"
      class="btn"
      on:click="{() => triggerModal()}">Trouvé</button
    ></td
  >
</tr>

<div
  class="modal"
  class:is-active="{modalIsOpen}"
>
  <div class="modal-background"></div>

  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>

      <button
        class="delete"
        aria-label="close"></button>
    </header>

    <section class="modal-card-body">
      <!-- Content ... -->
    </section>

    <footer class="modal-card-foot">
      <button class="button is-success"> Save changes </button>

      <button class="button"> Cancel </button>
    </footer>
  </div>
</div>
