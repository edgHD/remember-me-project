<template>
  <TheHeader :title="'Remember Me'" :hover-color="headerHoverColor" />
  <TheNavbar @hover-color="setHeaderHoverColor" />
  <section>
    <ResourceItem :items="storedResources" @delete-item="deleteResource" />
  </section>
</template>

<script>
import ResourceItem from './components/resources-items/ResourceItem.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import TheNavbar from './components/layouts/TheNavBar.vue'

export default {
  components: {
    ResourceItem,
    TheHeader,
    TheNavbar,
  },
  data() {
    return {
      storedResources: [
        {
          id: this.$uuid(),
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: this.$uuid(),
          title: 'Crunchyroll',
          description: 'Watch a complete library of anime!',
          link: 'https://crunchyroll.com',
        },
      ],
      headerHoverColor: '', // Track the hover color for the header
    }
  },
  methods: {
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (resource) => resource.id !== id
      )
    },
    setHeaderHoverColor(color) {
      this.headerHoverColor = color
    },
  },
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
}
</style>
