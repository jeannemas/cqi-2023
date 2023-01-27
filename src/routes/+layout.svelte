<script>
import "@skeletonlabs/skeleton/styles/all.css";
import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
import "../app.postcss";
let showMenu = false;
let showCompteMenu = false;

function toggleMenu() {
    showMenu = !showMenu;
}

function toggleCompteMenu(){
    showCompteMenu = !showCompteMenu;
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
    <div class="dropdown">
        <button class="btn-compte">Compte</button>
        <ul class="dropdown-child">
            <li>
                <a href="#compte">Mon compte</a>
            </li>
            <li>
                <a href="#changer-event">Changer d'événement</a>
            </li>
            <li>
                <a href="#deconnexion">Déconnexion</a>
            </li>
        </ul>
    </div>
</nav>
<slot/>