<template>
    <header class="main-title">
        <h1>{{ title }}</h1>
    </header>
</template>
<script>
export default {
    props: ['title'],
}
</script>
<style scoped>
header {
    text-align: center;
    color: #333;
    margin: 0;
    padding: 16px;
    background-color: #ffce8e;
    border: 1px solid #ddd;
    border-radius: 0 0 25px 25px;
}
</style>