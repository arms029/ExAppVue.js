import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Home' },
    { path: '*', component: Home, menu: false }
];