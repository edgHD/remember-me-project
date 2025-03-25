<template>
    <form @submit.prevent="addResource">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" placeholder="Enter the title of the resource" />
        <label for="description">Description</label>
        <textarea id="description" v-model="description" placeholder="Enter a description of the resource"></textarea>
        <label for="link">Link</label>
        <input type="text" id="link" v-model="link" placeholder="Enter the link to the resource" />
        <button type="submit">Add Resource</button>
    </form>
</template>

<script>
export default {
    emits: ['add-resource'],
    data() {
        return {
            id: this.$uuid(),
            title: '',
            description: '',
            link: '',
        }
    },
    methods: {
        addResource() {
            if (this.title && this.description && this.link) {
                this.$emit('add-resource', {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    link: this.link,
                })
                this.title = ''
                this.description = ''
                this.link = ''
            } else {
                alert('Please fill out all fields.')
            }
        },
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    padding: 16px;
    max-width: 500px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

label {
    font-size: 1rem;
    font-weight: bold;
    color: #444;
}

input,
textarea {
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s ease-in-out;
}

input:focus,
textarea:focus {
    border-color: #007bff;
}

button {
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

button:hover {
    background-color: #0056b3;
}

button:active {
    background-color: #003f7f;
}
</style>