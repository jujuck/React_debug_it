import React from 'react'

const NavBar = () => {
  return (
    <nav class="columns is-8" role="navigation" aria-label="main navigation">
      <div class="column is-one-fifth">
        <button class="image is-128x128 m-auto">
          <img
            src="./assets/logo.jpeg"
            alt="logo" />
        </button>
      </div>

      <div id="navbarBasicExample" class="column is-three-quarter m-auto">
        <div class="">
          <button class="button is-black m-4">
            Home
          </button>

          <button class="button is-black m-4">
            My beers
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar