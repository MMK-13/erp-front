import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
{
	path: '/dashboard',
	name: 'dashboard',
	component: DashboardView
}, {
	path: '/',
	name: 'login',
	component: LoginView
}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
