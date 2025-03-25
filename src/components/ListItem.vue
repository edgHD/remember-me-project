<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link">View Resource</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['items'],
}
</script>

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    margin: 16px 0;
    padding: 16px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
}

h3 {
    margin: 0 0 8px;
    font-size: 1.5rem;
    color: #333;
}

p {
    margin: 0 0 12px;
    font-size: 1rem;
    color: #666;
}

a {
    font-size: 1rem;
    color: #007BFF;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

a:hover {
    color: #00b953;
}
</style>