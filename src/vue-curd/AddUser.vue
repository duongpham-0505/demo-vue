<template>
    <form @submit.prevent="addUser" class="form-add_user">
        <h3 class="title-add_user">Thêm mới người dùng</h3>
        <div>
            <label for="name">Full Name :</label>
            <input type="text" v-model="user.name" id="name" placeholder="Nhập họ và tên..." />
        </div>
        <div>
            <label for="email">Email :</label>
            <input type="email" v-model="user.email" id="email" placeholder="Nhập email..." />
        </div>
        <div>
            <label for="phone">Phone :</label>
            <input type="text" v-model="user.phone" id="phone" placeholder="Nhập số điện thoại..." @input="validatePhone"/>
            <p v-if="phoneError" style="color: red; font-size: 14px; margin-top: 5px;">{{ phoneError }}</p>
        </div>
        <button type="submit">Add User</button>
    </form>
</template>

<script>
    import "../assets/css/viewUserList.css";

    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    phone: ''
                },
                phoneError: ''
            };
        },
        methods: {
            addUser() {
                if (this.phoneError) {
                    this.phoneError = "Vui lòng sửa lỗi trước khi thêm mới!";
                    return;
                }
                this.$emit('user-added', this.user);
                this.user = { name: '', email: '', phone: '' };
            },
            validatePhone() {
                if (!/^\d+$/.test(this.user.phone)) {
                    this.phoneError = "Số điện thoại chỉ được chứa số!";
                } else if (this.user.phone.length !== 10) {
                    this.phoneError = "Số điện thoại phải có đúng 10 chữ số!";
                } else {
                    this.phoneError = "";
                }
            }
        }
    };
</script>
