<template>
    <div class="user-list">

        <UserForm @add-user="addUser" />
        <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="removeUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { fetchUsers, addUser, deleteUser } from '../services/api';
    import UserForm from './UserForm.vue';

    export default {
        components: { UserForm },
        data() {
            return {
                users: []
            };
        },
        async created() {
            this.users = await fetchUsers();
        },
        methods: {
            async addUser(newUser) {
                const addedUser = await addUser(newUser);
                this.users.push(addedUser);
            },
            async removeUser(userId) {
                await deleteUser(userId);
                this.users = this.users.filter(user => user.id !== userId);
            }
        }
    };
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
    }

    button {
        background-color: #ff4d4d;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #ff1a1a;
    }

    .user-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tilte-user_list {
        text-align: center;
    }
</style>