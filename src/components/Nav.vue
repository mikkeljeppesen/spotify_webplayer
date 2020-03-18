<template>
  <nav>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.href">{{link.innerHTML}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  height: 15rem;
  width: 100vw;
  position: fixed;
  z-index: 2;
}

ul {
  display: flex;
  margin: auto 0;
  padding: 0;
}

li {
  list-style: none;
  text-align: center;
  margin: 0 2rem;
  border-bottom: 1px solid #1f1f1f;
}

a {
  color: white;
  text-decoration: none;
  font-size: 3rem;
  transition: all 0.2s ease;
}

a.active {
  border-bottom: 1px solid #e8ae00;
}

a:hover {
  color: #e8ae00;
}

@media only screen and (min-device-width: 667px) {
  nav {
    justify-content: flex-end;
  }
  li {
    margin-right: 8rem;
  }
  a {
    font-size: 3rem;
  }
}
</style>