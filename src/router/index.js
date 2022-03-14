import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Appointments from "../views/AppointmentsView.vue";
import Reviews from "../views/ReviewsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/appointments",
    name: "appointments",
    component: Appointments,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: Reviews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
