<template>
  <!-- Header and Navbar -->
  <TheHeader :title="'Remember Me'" :bg-color="headerColor" />
  <TheNavbar :active-tab="selectedTab" :color-scheme="colorScheme" @selected-tab="setTab"
    @color-change="updateHeaderColor" />
  <!-- Dynamic component switching with keep-alive -->
  <section>
    <keep-alive>
      <component :is="selectedTab === 'resource-item' ? 'ResourceItem' : 'AddResource'" :items="storedResources"
        @delete-item="deleteResource" @add-resource="postResource" />
    </keep-alive>
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
      // Define color schemes for tabs
      colorSchemes: {
        resources: {
          bgColor: '#ffce8e',
          hoverColor: '#ffa939',
          activeColor: '#ff9100',
        },
        add: {
          bgColor: '#8eaaff',
          hoverColor: '#3869ff',
          activeColor: '#003fff',
        },
      },
      selectedTab: 'resource-item', // Default tab
      storedResources: [
        {
          id: this.$uuid(),
          title: 'edgHD',
          description: 'My GitHub profile',
          link: 'https://github.com/edgHD',
        },
      ],
      headerColor: '#ffce8e', // Initial header color
    }
  },
  computed: {
    // Dynamically determine the color scheme based on the selected tab
    colorScheme() {
      return this.selectedTab === 'resource-item'
        ? this.colorSchemes.resources
        : this.colorSchemes.add
    },
  },
  provide() {
    // Provide the addResource method to child components
    return {
      addResource: this.postResource,
    }
  },
  mounted() {
    // Load stored resources from localStorage on app load
    const savedResources = localStorage.getItem('storedResources')
    if (savedResources) {
      this.storedResources = JSON.parse(savedResources)
    }
  },
  watch: {
    // Watch for changes in storedResources and save to localStorage
    storedResources: {
      handler(newResources) {
        localStorage.setItem('storedResources', JSON.stringify(newResources))
      },
      deep: true, // Ensure nested changes are detected
    },
  },
  methods: {
    // Add a new resource to the list
    postResource(resource) {
      this.storedResources.push(resource)
    },
    // Delete a resource by ID
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(
        (resource) => resource.id !== id
      )
    },
    // Update the header color dynamically
    updateHeaderColor(color) {
      this.headerColor = color
    },
    // Set the active tab and update the header color
    setTab(tab) {
      this.selectedTab = tab
      this.headerColor =
        tab === 'resource-item'
          ? this.colorSchemes.resources.bgColor
          : this.colorSchemes.add.bgColor
    },
  },
}
</script>

<style>
/* Global styles */
* {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
}
</style>
