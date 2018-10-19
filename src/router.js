import Vue from 'vue'
import Router from 'vue-router'
import Job from './views/Job.vue'
import Company from './views/Company.vue'
import Personal from './views/Personal.vue'
import JobDetail from './views/JobDetail.vue'
import CompanyDetail from './views/CompanyDetail.vue'
import Layout from "./components/Layout.vue"
import LayoutBase from "./components/LayoutBase.vue"
import Search from "./views/Search.vue"
import MyResume from "./views/MyResume.vue"
import DeliverHistory from "./views/DeliverHistory.vue"
import JobCollect from "./views/JobCollect.vue"
import ResumeIntegrity from "./views/ResumeIntegrity.vue"
import CompanyIndex from "./components/CompanyIndex.vue"
import JobInRecruit from "./components/JobInRecruit.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children:[
        {
          path: 'job',
          name: 'job',
          component: Job,
        },
        {
          path: 'company',
          name: 'company',
          component: Company,
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal,
        },
      ]
    },
    {
      path: '/layoutBase',
      name: 'layoutBase',
      component: LayoutBase,
      children:[
        {
          path: 'jobDetail/:id',
          name: 'jobDetail',
          component: JobDetail,
        },
        {
          path: 'companyDetail/:id',
          name: 'companyDetail',
          component: CompanyDetail,
          children:[
            {
              path: 'companyIndex',
              name: 'companyIndex',
              component: CompanyIndex
            },
            {
              path: 'jobInRecruit',
              name: 'jobInRecruit',
              component: JobInRecruit
            },
            {
              path: '',
              redirect: 'jobInRecruit'
            }
          ]
        },
        {
          path: 'search',
          name: 'search',
          component: Search,
        },
        {
          path: 'myResume',
          name: 'myResume',
          component: MyResume,
        },
        {
          path: 'deliverHistory',
          name: 'deliverHistory',
          component: DeliverHistory,
        },
        {
          path: 'jobCollect',
          name: 'jobCollect',
          component: JobCollect,
        },
        {
          path: 'resumeIntegrity',
          name: 'resumeIntegrity',
          component: ResumeIntegrity,
        }
      ]
    },
    {
      path:"/",
      redirect:"/layout/job"
    }
  ]
})
