const Navbar = (() => {
    const nav = document.createElement('div');
    nav.innerHTML =
        `<nav class="navbar bg-dark border-bottom border-bottom-dark fixed-top navbar-expand-lg" data-bs-theme="light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Pancakeria</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>`

    return nav;
})

export default Navbar;