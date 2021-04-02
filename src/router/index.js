import Vue from "vue";
import VueRouter from "vue-router";
import Entry from "../views/Entry.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EntryView",
    component: Entry
  },
  {
    path: "/records",
    name: "RecordView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Records.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
