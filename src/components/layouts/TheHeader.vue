<template>
    <!-- Header with dynamic background color -->
    <header :style="{ backgroundColor: bgColor }">
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true, // Title is required for the header
        },
        bgColor: {
            type: String,
            required: true, // Background color is required for styling
        },
    },
}
</script>

<style scoped>
header {
    text-align: center;
    color: #333;
    margin: 0;
    padding: 16px;
    border: 1px solid;
    border-radius: 0 0 25px 25px;
    transition: background-color 0.2s ease-in-out;
    user-select: none;
}
</style>