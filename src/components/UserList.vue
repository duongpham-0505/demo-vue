<template>
    <div class="user-list">

        <UserForm @add-user="addUser" />
        <table class="table table-striped table-bordered ">
            <thead class="thead-dark ">
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td class="text-center">{{ user.name }}</td>
                    <td class="text-center">{{ user.email }}</td>
                    <td class="text-center">
                        <button class="btn btn-warning btn-sm actions" @click="editUser(user.id)">Edit</button>
                        <button class="btn btn-danger btn-sm" @click="removeUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { fetchUsers, addUser, deleteUser } from '../services/api';
    import UserForm from './UserFormAdd.vue';
    import Swal from 'sweetalert2';

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
                try {
                    const addedUser = await addUser(newUser);
                    console.log(addedUser);
                    if (addedUser === null || Object.keys(addedUser).length === 0) {
                        Swal.fire('Error!', 'User added can not successfully!', 'error');
                    } else {
                        this.users.push(addedUser);
                        Swal.fire('Success!', 'User added successfully!', 'success');
                    }
                } catch (error) {
                    Swal.fire('Error!', 'An error occurred while adding the user. Please try again later.', 'error');
                    alert('An error occurred while adding the user. Please try again later.');
                }
            },
            async removeUser(userId) {
                await deleteUser(userId);
                this.users = this.users.filter(user => user.id !== userId);
            },
            async editUser(userId) {
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

    .actions {
        margin-right: 15px;
        background-color: rgb(193, 193, 53);
    }

    td button {
        width: 70px;
    }
</style>