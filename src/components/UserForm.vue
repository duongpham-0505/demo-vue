<template>
    <div>
        <h2>Thêm mới người dùng</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name : </label>
                <input type="text" v-model="name" id="name" required>
            </div>
            <div>
                <label for="email">Email : </label>
                <input type="email" v-model="email" id="email" required>
            </div>
            <button type="submit">Thêm mới</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        handleSubmit() {
            const newUser = {
                name: this.name,
                email: this.email
            };
            this.$emit('add-user', newUser);
            this.name = '';
            this.email = '';
        }
    }
};
</script>

<style scoped>
    div {
        margin-bottom: 10px;
    }

    div h2 {
        color: rgb(103, 227, 0);
    }

    label {
        font-weight: bold;
    }

    button {
        width: 150px;
        padding: 10px;
        border: none;
        background-color: rgb(103, 227, 0);
        color: white;
        font-weight: 700;
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
    }
    
    input {
        width: 330px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    input:focus {
        outline: none;
    }

    label {
        margin-bottom: 5px;
        margin-right: 20px;
    }
</style>