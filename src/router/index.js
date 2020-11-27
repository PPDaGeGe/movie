import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import Music from '../views/Music.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'movie',
    component: Movie
}, {
    path: '/book',
    name: 'book',
    component: Book
}, {
    path: '/photo',
    name: 'photo',
    component: Photo
}, {
    path: '/music',
    name: 'music',
    component: Music
}, ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router