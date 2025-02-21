<template>
    <form @submit.prevent="updateUser" class="form-update_user">
        <h3 class="title-update_user">Chỉnh sửa người dùng</h3>
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
        <button type="submit">Update</button>
        <button @click="$emit('cancel')">Cancel</button>
    </form>
</template>

<script>
    import "../assets/css/userFormUpdate.css";
    
    export default {
        props: ['selectedUser'],
        data() {
            return {
                user: { ...this.selectedUser },
                phoneError: ''
            };
        },
        watch: {
            selectedUser(newUser) {
                this.user = { ...newUser };
            }
        },
        methods: {
            updateUser() {
                if (this.phoneError) {
                    this.phoneError = "Vui lòng sửa lỗi trước khi cập nhật!";
                    return;
                }
                this.$emit('user-updated', this.user);
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
