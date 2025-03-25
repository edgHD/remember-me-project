<template>
    <li class="base-card">
        <slot></slot>
    </li>
</template>

<style scoped>
li {
    width: 45%;
    margin: 16px 0;
    padding: 16px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
}

@media (max-width: 889px) {
    li {
        width: 90%;
        margin: 16px 0;
    }
}
</style>