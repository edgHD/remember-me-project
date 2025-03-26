<template>
    <button :type="type" :style="{ backgroundColor: colorScheme?.bgColor }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'colorScheme']
}
</script>

<style scoped>
button {
    position: relative;
    bottom: 1px;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    border-top: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

button:hover {
    background-color: v-bind('colorScheme?.hoverColor') !important;
}

button:active {
    background-color: v-bind('colorScheme?.activeColor') !important;
}
</style>