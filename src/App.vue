<template>
  <ListItem :items="storedResources" />
</template>

<script>
import ListItem from './components/ListItem.vue'
export default {
  components: {
    ListItem,
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
          description: 'Watch a complete library of anime.',
          link: 'https://crunchyroll.com',
        },
      ],
    }
  },
}
</script>
