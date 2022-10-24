import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView'
import LoginView from '../views/LoginView'
import ProfileView from '../views/ProfileView'

const routes = [
{
	path: '/dashboard',
	name: 'dashboard',
	component: DashboardView
}, {
	path: '/',
	name: 'login',
	component: LoginView
}, {
	path: '/profile',
	name: 'profile',
	component: ProfileView,
}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkActiveClass: 'rooter-link-active',
	routes
})

export default router
