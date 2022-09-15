import AllCustomer from './components/AllCustomer.vue';
import CreateCustomer from './components/CreateCustomer.vue';
import EditCustomer from './components/EditCustomer.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllCustomer
    },
    {
        name: 'create',
        path: '/create',
        component: CreateCustomer
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditCustomer
    }
];