<template>
  <TheHeader :title="'Remember Me'" :bg-color="headerColor" />
  <TheNavbar :active-tab="selectedTab" :color-scheme="colorScheme" @selected-tab="setTab"
    @color-change="updateHeaderColor" />
  <section>
    <component :is="selectedTab === 'resource-item' ? 'ResourceItem' : 'AddResource'" :items="storedResources"
      @delete-item="deleteResource" @add-resource="postResource" />
  </section>
</template>

<script>
import ResourceItem from './components/learning-resources/ResourceItem.vue'
import AddResource from './components/learning-resources/AddResource.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import TheNavbar from './components/layouts/TheNavbar.vue'

export default {
  components: {
    ResourceItem,
    AddResource,
    TheHeader,
    TheNavbar,
  },
  data() {
    return {
      colorSchemes: {
        resources: {
          bgColor: '#ffce8e',
          hoverColor: '#ffa939',
          activeColor: '#ff9100'
        },
        add: {
          bgColor: '#8eaaff',
          hoverColor: '#3869ff',
          activeColor: '#003fff'
        }
      },
      selectedTab: 'resource-item',
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
      headerColor: '#ffce8e', // Initial color
    }
  },
  computed: {
    colorScheme() {
      return this.selectedTab === 'resource-item'
        ? this.colorSchemes.resources
        : this.colorSchemes.add
    }
  },
  methods: {
    postResource(resource) {
      this.storedResources.push(resource)
    },
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (resource) => resource.id !== id
      )
    },
    updateHeaderColor(color) {
      this.headerColor = color
    },
    setTab(tab) {
      this.selectedTab = tab
      this.headerColor = tab === 'resource-item'
        ? this.colorSchemes.resources.bgColor
        : this.colorSchemes.add.bgColor
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
