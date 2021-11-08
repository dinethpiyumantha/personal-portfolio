import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/AboutMe'
import Projects from '../components/Projects'
import MobileNav from '../components/MobileNav'
import FilterMenu from '../components/FilterMenu'

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: '/@menu',
        name: 'MobileNav',
        component: MobileNav
      },
    ]
});