<template>
    <div>
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
            <h2 class="title-update">Updated User Data</h2>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="updatedUser">
                        <td class="text-center userRender">{{ updatedUser.name }}</td>
                        <td class="text-center emailRender">{{ updatedUser.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

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
        async fetchUserData() {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`);
                this.user.name = response.data.name;
                this.user.email = response.data.email;
                // console.log('fetchUserData: đã fetch dữ liệu user thành công.', response.data);
            } catch (e) {
                console.error('Error fetching user data:', e);
            }
        },
        async updateUser() {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.userId}`, this.user);
                this.updatedUser = response.data;
                // console.log('updateUser: updatedUser =', this.updatedUser);
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }
    },
    beforeCreate() {
        console.log('beforeCreate: Component đang trong quá trình khởi tạo.');
        console.log('beforeCreate: Không thể truy cập data, methods, computed properties -> response : ' + this.$el);
    },
    created() {
        console.log('created: Component đã được khởi tạo nhưng chưa gắn vào DOM.');
        this.fetchUserData();
        console.log('created: Đã fetch dữ liệu user. -> response :' + this.$el);
    },
    beforeMount() {
        console.log('beforeMount: dữ liệu đã được gắn vào DOM nhưng chưa được render ra giao diện.');
        console.log('beforeMount: Không thể truy cập các phần tử trong DOM. -> response : ', this.$el);
    },
    mounted() {
        console.log('mounted: Component đã được gắn vào DOM và đã render ra giao diện.');
        console.log('mounted: Có thể truy cập các phần tử trong DOM. -> response', this.$el);
    },
    beforeUpdate() {
        // console.log('beforeUpdate: Component sắp cập nhật DOM.');
        // console.log('beforeUpdate: trước khi cập nhật DOM dữ liệu user cũ : ', this.$el);
        const userElement = document.querySelector(".userRender");
        const emailElement = document.querySelector(".emailRender");
        if (userElement && emailElement) {
            console.log('beforeUpdate: Trước khi cập nhật DOM dữ liệu user cũ: ', userElement.textContent, ' : email cũ : ', emailElement.textContent);
        } else {
            console.log('beforeUpdate: Elements not found');
        }
    },
    updated() {
        // console.log('updated: DOM đã được cập nhật với dữ liệu mới.');
        // console.log('updated: Sau khi cập nhật DOM dữ liệu user cũ : ', this.$el);
        const userElement = document.querySelector(".userRender");
        const emailElement = document.querySelector(".emailRender");
        if (userElement && emailElement) {
            console.log('updated: Sau khi cập nhật DOM dữ liệu user mới: ', userElement.textContent, ' : email mới: ', emailElement.textContent);
        } else {
            console.log('updated: Elements not found');
        }
    },
    beforeUnmount() {
        console.log('beforeUnmount: Component sắp bị xóa khỏi DOM.');
        console.log('beforeUnmount: Có thể thực hiện các công việc dọn dẹp trước khi component bị xóa. -> response : ', this.updatedUser);
    },
    unmounted() {
        console.log('unmounted: Component đã bị xóa khỏi DOM.');
        console.log('unmounted: Không thể truy cập các phần tử trong DOM. -> response : ', this.updatedUser);
    }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

form div {
    margin-bottom: 20px;
}

form div label {
    display: inline-block;
    width: 100px;
}

form div input {
    width: 350px;
    padding: 7px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

input:focus {
    outline: none;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.title-update {
    margin: 20px 0;
}
</style>