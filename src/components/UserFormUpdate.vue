<template>
    <div>
        <h1>User Form Update</h1>
        <form @submit.prevent="updateUser">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="user.name" id="name" />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="user.email" id="email" />
            </div>
            <button type="submit">Update User</button>
        </form>
        <h2>Updated User Data</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="updatedUser">
                    <td>{{ updatedUser.name }}</td>
                    <td>{{ updatedUser.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'UserFormUpdate',
    data() {
        return {
            user: {
                name: '',
                email: ''
            },
            userId: 1,
            updatedUser: null
        };
    },
    methods: {
        fetchUserData() {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
                .then(response => response.json())
                .then(data => {
                    this.user.name = data.name;
                    this.user.email = data.email;
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
            console.log('fetchUserData: Đã fetch dữ liệu user success.');
        },
        updateUser() {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.user)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('User updated:', data);
                    this.updatedUser = data;
                })
                .catch(error => {
                    console.error('Error updating user:', error);
                });
        }
    },
    beforeCreate() {
        console.log('beforeCreate: Componet đang trong quá trình khởi tạo.');
    },
    created() {
        console.log('created: Component đã được khởi tạo nhưng chưa gắn vào DOM.');
        this.fetchUserData();
    },
    beforeMount() {
        console.log('beforeMount: dữ liệu đã được gắn vào DOM nhưng chưa được render ra giao diện.');
    },
    mounted() {
        console.log('mounted: được gắn vào DOM và đã render ra giao diện.');
    },
    beforeUpdate() {
        console.log('beforeUpdate: Component sắp cập nhật DOM.');
    },
    updated() {
        console.log('updated: DOM đã được cập nhật với dữ liệu mới.');
    },
    beforeUnmount() {
        console.log('beforeUnmount: Component sắp bị xóa khỏi DOM..');
    },
    unmounted() {
        console.log('unmounted: Component đã bị xóa khỏi DOM.');
    },
};
</script>

<style scoped></style>