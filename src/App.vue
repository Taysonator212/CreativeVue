<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link> |</li>
        <li><router-link to="/Appointments">Appointments</router-link></li>
        <li><router-link to="/Reviews">Reviews</router-link></li>
      </ul>
    </nav>
    <router-view />

    <footer
      style="
        background-color: black;
        display: flex;
        justify-content: space-between;
      "
    >
      <p>
        <a
          href="https://github.com/BYUCS260/weather-app-Taysonator212"
          style="color: DarkGrey; float: left"
          >GitHub Repository</a
        >
      </p>
      <p style="float: center; color: DarkGrey">
        Feel free to contact me through these means<br />
        <a href="taysonshepherd@gmail.com" style="color: DarkGrey"
          >taysonshepherd@gmail.com</a
        ><br />
        Phone Number: 509-881-9561 <br />
        PO box: 123456789
      </p>

      <p style="float: right; color: DarkGrey">
        A quick message from the page admin <br />
        hey, if you somehow hacked in, please dont grief <br />
        This is just a page for a class project sooo <br />
        Don't be a Jackwagon
      </p>
    </footer>
  </div>
</template>

<style>
nav {
  background-color: DarkGrey;
}
ul {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
