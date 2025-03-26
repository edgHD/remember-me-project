<template>
    <nav>
        <base-button v-for="button in buttons" :key="button.id" :class="{ active: activeTab === button.id }"
            :color-scheme="colorScheme" @click="$emit('selected-tab', button.id)"
            @mouseover="$emit('color-change', colorScheme.hoverColor)"
            @mouseleave="$emit('color-change', colorScheme.bgColor)"
            @mousedown="$emit('color-change', colorScheme.activeColor)"
            @mouseup="$emit('color-change', colorScheme.hoverColor)">
            {{ button.label }}
        </base-button>
    </nav>
</template>

<script>
export default {
    props: ['activeTab', 'colorScheme'],
    emits: ['selected-tab', 'color-change'],
    data() {
        return {
            buttons: [
                { id: 'resource-item', label: 'Stored Resources' },
                { id: 'add-resource', label: 'Add Resources' },
            ]
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-evenly;
}

.active {
    font-weight: bold;
}
</style>