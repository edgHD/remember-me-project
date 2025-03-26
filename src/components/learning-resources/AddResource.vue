<template>
    <!-- Dialog for invalid input -->
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="inputIsInvalid = false">
        <template #default>
            <p>{{ errorMessage }}</p>
        </template>
        <template #actions>
            <button @click="inputIsInvalid = false">Close</button>
        </template>
    </base-dialog>

    <!-- Form for adding a resource -->
    <div class="container">
        <form @submit.prevent="submitResource">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" placeholder="Enter the title of the resource" />
            <label for="description">Description</label>
            <textarea id="description" v-model="description"
                placeholder="Enter a description of the resource"></textarea>
            <label for="link">Link</label>
            <input type="text" id="link" v-model="link" placeholder="Enter the link to the resource" />
            <button type="submit">Add Resource</button>
        </form>
    </div>
</template>

<script>
export default {
    inject: ['addResource'], // Inject the addResource method from the parent
    data() {
        return {
            inputIsInvalid: false, // Tracks if the input is invalid
            errorMessage: '', // Stores the error message for the dialog
            title: '',
            description: '',
            link: '',
        }
    },
    methods: {
        // Validate and submit the resource
        submitResource() {
            if (!this.title.trim() || !this.description.trim() || !this.link.trim()) {
                this.errorMessage = 'Please fill out all fields.' // Error for empty fields
                this.inputIsInvalid = true
                return
            }

            if (!this.isValidLink(this.link.trim())) {
                this.errorMessage = 'Please enter a valid link (e.g., https://example.com).' // Error for invalid link
                this.inputIsInvalid = true
                return
            }

            const formattedLink = this.formatLink(this.link.trim()) // Ensure the link is properly formatted
            this.addResource({
                id: this.$uuid(), // Generate a unique ID
                title: this.title,
                description: this.description,
                link: formattedLink,
            })
            this.resetForm() // Reset the form after submission
        },
        // Check if the link is valid
        isValidLink(link) {
            const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i
            return urlPattern.test(link)
        },
        // Format the link to ensure it starts with https://
        formatLink(link) {
            if (!link.startsWith('http://') && !link.startsWith('https://')) {
                return `https://${link}`
            }
            return link
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
.container {
    display: flex;
    justify-content: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px 25px;
    padding: 16px;
    width: 500px;
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