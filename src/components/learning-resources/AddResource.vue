<template>
    <!-- Dialog for invalid input -->
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="inputIsInvalid = false">
        <template #default>
            <p>Please fill out all fields.</p>
        </template>
        <template #actions>
            <button @click="inputIsInvalid = false">Close</button>
        </template>
    </base-dialog>

    <!-- Form for adding a resource -->
    <form @submit.prevent="submitResource">
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
    inject: ['addResource'], // Inject the addResource method from the parent
    data() {
        return {
            inputIsInvalid: false, // Tracks if the input is invalid
            title: '',
            description: '',
            link: '',
        }
    },
    methods: {
        // Validate and submit the resource
        submitResource() {
            if (this.title.trim() && this.description.trim() && this.link.trim()) {
                this.addResource({
                    id: this.$uuid(), // Generate a unique ID
                    title: this.title,
                    description: this.description,
                    link: this.link,
                })
                this.resetForm() // Reset the form after submission
            } else {
                this.inputIsInvalid = true // Show error dialog if input is invalid
            }
        },
        // Reset the form fields
        resetForm() {
            this.title = ''
            this.description = ''
            this.link = ''
        },
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px auto;
    padding: 16px;
    max-width: 500px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
}

label {
    font-size: 1.5rem;
    font-weight: bold;
    color: #444;
}

input,
textarea {
    padding: 8px;
    resize: vertical;
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