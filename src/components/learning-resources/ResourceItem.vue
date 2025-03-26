<template>
    <ul>
        <base-card v-if="items.length > 0" v-for="item in items" :key="item.id">
            <div class="title">
                <h3>{{ item.title }}</h3>
                <button class="delete-item" @click="this.$emit('delete-item', item.id)">🗑️</button>
            </div>
            <p>{{ item.description }}</p>
            <a :href="item.link">View Resource</a>
        </base-card>
        <base-card v-else class="empty">
            <p>No resources found.</p>
        </base-card>
    </ul>
</template>

<script>
export default {
    props: ['items'],
    emits: ['delete-item'],
}
</script>

<style scoped>
ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    gap: 16px;
    margin: 0 25px;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 8px;
}

h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #444;
}

.delete-item {
    background-color: #333;
    cursor: pointer;
    font-size: 1rem;
    text-align: end;
    transition: background-color 0.2s ease-in-out;
}

.delete-item:hover {
    background-color: #700000;
}

p {
    margin: 0 0 12px;
    font-size: 1rem;
    color: #666;
}

.empty p {
    text-align: center;
    user-select: none;
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