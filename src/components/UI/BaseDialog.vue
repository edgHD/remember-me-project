<template>
    <Teleport to="body">
        <div class="dialog-container">
            <div class="backdrop" @click="$emit('close')"></div>
            <dialog open>
                <header>
                    <slot name="header">
                        <h2>{{ title }}</h2>
                    </slot>
                </header>
                <section>
                    <slot></slot>
                </section>
                <menu>
                    <slot name="actions">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </menu>
            </dialog>
        </div>
    </Teleport>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
        },
    },
}
</script>
<style scoped>
.dialog-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 101;
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 102;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

menu {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}
</style>