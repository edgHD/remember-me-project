<template>
    <nav>
        <base-button v-for="(button, index) in buttons" :key="index"
            @mouseover="$emit('hover-color', button.hoverColor)" @mouseleave="$emit('hover-color', '')">
            {{ button.label }}
        </base-button>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            buttons: [
                { label: 'Button 1', hoverColor: '#ffa939' },
                { label: 'Button 2', hoverColor: '#ffa939' },
            ],
        }
    },
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-evenly;
}
</style>