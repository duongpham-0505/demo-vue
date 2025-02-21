<template>
    <div>
        <AddUser v-if="showForm" @user-added="handleUserAdded" />
        <UpdateUser v-else :selectedUser="user" @user-updated="handleUserUpdated" @cancel="cancelUpdate" />

        <h3 class="user-list">Danh sách người dùng</h3>
        <table class="table-user table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th class="text-center">ID</th>
                    <th class="text-center">Full Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Phone</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="text-center">{{ user.id }}</td>
                    <td class="text-center">{{ user.name }}</td>
                    <td class="text-center">{{ user.email }}</td>
                    <td class="text-center">{{ user.phone }}</td>
                    <td class="text-center">
                        <button class="btn btn-primary w-70" @click="editUser(user)">Update</button>
                        <button class="btn btn-primary w-70" @click="deleteUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import AddUser from './AddUser.vue';
    import UpdateUser from './UpdateUser.vue';
    import Swal from 'sweetalert2';
    import api from '@/services/api'

    export default {
        components: { AddUser, UpdateUser },
        data() {
            return {
                users: [],
                user: { name: '', email: '', phone: '' },
                showForm: true
            };
        },
        methods: {
            async getUsers() {
                try {
                    this.users = await api.getUsers();
                    console.log('Users:', this.users);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            },
            async handleUserAdded(newUser) {
                try {
                    const response = await api.addUser(newUser);
                    this.users.push(response);
                    Swal.fire({ icon: 'success', title: 'Thêm mới người dùng thành công!', timer: 1500 });
                } catch (error) {
                    console.error('Error adding user:', error);
                    Swal.fire({ icon: 'error', title: 'Thêm mới người dùng thất bại!', timer: 1500 });
                }
            },
            editUser(user) {
                this.showForm = false;
                this.user = { ...user };
            },
            cancelUpdate() {
                this.showForm = true;
                this.user = { name: '', email: '', phone: '' };
            },
            async handleUserUpdated(updatedUser) {
                try {
                    const response = await api.updateUser(updatedUser.id, updatedUser);                    
                    const index = this.users.findIndex(user => user.id === updatedUser.id);
                    if (index !== -1) {
                        this.users[index] = response
                    }
                    Swal.fire({ icon: 'success', title: 'Cập nhật người dùng thành công!', timer: 1500 });
                    this.cancelUpdate();
                } catch (error) {
                    console.error('Error updating user:', error);
                    Swal.fire({ icon: 'error', title: 'Cập nhật người dùng thất bại!', timer: 1500 });
                }
            },
            async deleteUser(id) {
                try {
                    await api.deleteUser(id);
                    this.users = this.users.filter(user => user.id !== id);
                    Swal.fire({ icon: 'success', title: 'Xóa người dùng thành công!', timer: 1500 });
                } catch (error) {
                    console.error('Error deleting user:', error);
                    Swal.fire({ icon: 'error', title: 'Xóa người dùng thất bại!', timer: 1500 });
                }
            }
        },
        created() {
            this.getUsers();
        }
    };
</script>
