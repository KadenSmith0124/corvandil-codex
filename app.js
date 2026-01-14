//Creates the same Navbar on every page using this script file
var navbarItems = 
`
  <nav class="navbar">
    <a href="/index.html" class="nav-title">Corvandil Codex</a>

    <div class="nav-links">
      <a href="/pages/deities.html">Pantheon</a>
      <a href="#">Locations</a>
    </div>
  </nav>
`
document.body.insertAdjacentHTML("afterbegin", navbarItems);