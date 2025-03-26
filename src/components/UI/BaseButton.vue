<template>
    <!-- Button with dynamic styles -->
    <button :type="type" :style="buttonStyles" @mouseover="hover = true" @mouseleave="hover = false"
        @mousedown="active = true" @mouseup="active = false">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button', // Default button type
        },
        colorScheme: {
            type: Object,
            default: () => ({
                bgColor: '#007bff',
                hoverColor: '#0056b3',
                activeColor: '#003f7f',
            }),
        },
    },
    data() {
        return {
            hover: false,
            active: false,
        }
    },
    computed: {
        // Compute button styles dynamically
        buttonStyles() {
            if (this.active) {
                return { backgroundColor: this.colorScheme.activeColor }
            } else if (this.hover) {
                return { backgroundColor: this.colorScheme.hoverColor }
            } else {
                return { backgroundColor: this.colorScheme.bgColor }
            }
        },
    },
}
</script>

<style scoped>
button {
    position: relative;
    bottom: 1px;
    padding: 8px 16px;
    font-size: 1rem;
    color: #333;
    border: 1px solid;
    border-top: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}
</style>