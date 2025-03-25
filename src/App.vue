<template>
  <header class="main-title">
    <h1>Remember Me</h1>
  </header>
  <section>
    <ResourceItem :items="storedResources" @delete-item="deleteResource" />
  </section>
</template>

<script>
import ResourceItem from './components/resources-items/ResourceItem.vue'
export default {
  components: {
    ResourceItem,
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
    }
  },
  methods: {
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (resource) => resource.id !== id
      )
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

.main-title {
  text-align: center;
  color: #333;
  margin: 0;
  padding: 16px;
  background-color: #ffce8e;
  border: 1px solid #ddd;
  border-radius: 0 0 25px 25px;
}
</style>
