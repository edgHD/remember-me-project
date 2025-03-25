<template>
    <button :type="type">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ['type'],
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
    background-color: #ffce8e;
    border-top: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

button:hover {
    background-color: #ffa939;
}

button:active {
    background-color: #ff9100;
}
</style>