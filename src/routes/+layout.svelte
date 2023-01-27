<script>
import "@skeletonlabs/skeleton/styles/all.css";
import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
import "../app.postcss";
let showMenu = false;

function toggleMenu() {
    showMenu = !showMenu;
}
</script>

<h3 id="title">Titre</h3>

<nav>
<button class="btn-menu" on:click={toggleMenu}>
    Menu
</button>
<ul class="menu" class:open={showMenu}>
    <li>
        <a href="#Planification">Planification</a>
    </li>
    <li>
        <a href="#Horaire">Horaire</a>
    </li>
    <li>
        <a href="#Objetperdu">Objet Perdu</a>
    </li>
    <li>
        <a href="/report">Rapportage de probleme</a>
    </li>
</ul>
<button>Compte</button>
</nav>

<slot/>