<template>
  <ul></ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [{
        id: this.$uuid(),
        title: 'Official Guide',
        description: 'The official Vue.js documentation.',
        link: 'https://vuejs.org'
      },
      {
        id: this.$uuid(),
        title: 'Crunchyroll',
        description: 'Watch a complete library of anime.',
        link: 'https://crunchyroll.com'
      }],
    }
  },
}
</script>