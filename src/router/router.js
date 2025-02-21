import { createRouter, createWebHistory } from 'vue-router';
import ManageUser from '@/vue-curd/UserList.vue';
import Lifecycle from '@/lifecycle/lifecycle.vue';
import HelloComponent from '@/components/HelloComponent.vue';

const routes = [
    {
        path: '/',
        name: 'HelloComponent',
        component: HelloComponent
    },
    {
        path: '/lifeCycle',
        name: 'Lifecycle',
        component: Lifecycle
    },
    {
        path: '/manageUser',
        name: 'ManageUser',
        component: ManageUser
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;