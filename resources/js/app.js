require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import Home from './components/Home.vue';
import StudyPermit from './components/StudyPermit.vue';
import WorkPermit from './components/WorkPermit.vue';
import FamilySponsorship from './components/FamilySponsorship.vue';
import BusinessImmigration from './components/BusinessImmigration.vue';
import RefusalAppeals from './components/RefusalAppeals.vue';
import About from './components/About.vue';
import Fees from './components/Fees.vue';
import LatestNews from './components/LatestNews.vue';
import Immigrate from './components/Immigrate.vue';

// import ImmigrateToCan from './components/layouts/immigrate/ImmigrateToCan.vue'
// import ImmigrationLevel from './components/layouts/immigrate/Immigration-Levels-Plan.vue'
// import ExpressEntry from './components/layouts/immigrate/Express-Entry.vue'
// import CanadianExperienceClass from './components/layouts/immigrate/Canadian-Experience-Class.vue'
// import FederalSkilledTradesProgram from './components/layouts/immigrate/Federal-Skilled-Trades-Program.vue'
// import ProvincialNomineeProgram from './components/layouts/immigrate/Provincial-Nominee-Program.vue'
// import AtlanticImmigrationPilotProgram from './components/layouts/immigrate/Atlantic-Immigration-Pilot-Program.vue'
// import CanadaRuralandNorthernImmigrationPilot from './components/layouts/immigrate/Canada-Rural-and-Northern-Immigration-Pilot.vue'

import Career from './components/Career.vue';
import Contact from './components/Contact.vue';
import Appointment from './components/Appointment.vue';
import Appointment20Min from './components/layouts/appointment/Appointment20Min.vue';
import Appointment40Min from './components/layouts/appointment/Appointment40Min.vue';
import Appointment60Min from './components/layouts/appointment/Appointment60Min.vue';





const routes = [{
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'study',
        path: '/study',
        component: StudyPermit
    },
    {
        name: 'work',
        path: '/work',
        component: WorkPermit
    },
    {
        name: 'familys',
        path: '/familys',
        component: FamilySponsorship
    },
    {
        name: 'business',
        path: '/business',
        component: BusinessImmigration
    },
    {
        name: 'refusal',
        path: '/refusal',
        component: RefusalAppeals
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'fees',
        path: '/fees',
        component: Fees
    },
    {
        name: 'latest',
        path: '/latest',
        component: LatestNews
    },
    {
        name: 'immigrate',
        path: '/immigrate',
        component: Immigrate
    },
    // {
    //     name: 'ImmigrateToCan',
    //     path: '/ImmigrateToCan',
    //     component: ImmigrateToCan
    // },
    // {
    //     name: 'ImmigrationLevel',
    //     path: '/ImmigrationLevel',
    //     component: ImmigrationLevel
    // },
    // {
    //     name: 'ExpressEntry',
    //     path: '/ExpressEntry',
    //     component: ExpressEntry
    // },
    // {
    //     name: 'CanadianExperienceClass',
    //     path: '/CanadianExperienceClass',
    //     component: CanadianExperienceClass
    // },
    // {
    //     name: 'FederalSkilledTradesProgram',
    //     path: '/FederalSkilledTradesProgram',
    //     component: FederalSkilledTradesProgram
    // },
    // {
    //     name: 'ProvincialNomineeProgram',
    //     path: '/ProvincialNomineeProgram',
    //     component: ProvincialNomineeProgram
    // },
    // {
    //     name: 'AtlanticImmigrationPilotProgram',
    //     path: '/AtlanticImmigrationPilotProgram',
    //     component: AtlanticImmigrationPilotProgram
    // },
    // {
    //     name: 'CanadaRuralandNorthernImmigrationPilot',
    //     path: '/CanadaRuralandNorthernImmigrationPilot',
    //     component: CanadaRuralandNorthernImmigrationPilot
    // },
    {
        name: 'career',
        path: '/career',
        component: Career
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'appointment',
        path: '/appointment',
        component: Appointment
    },
    {
        name: 'appointment20',
        path: '/appointment20',
        component: Appointment20Min
    },
    {
        name: 'appointment40',
        path: '/appointment40',
        component: Appointment40Min
    },
    {
        name: 'appointment60',
        path: '/appointment60',
        component: Appointment60Min
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
const app = new Vue(Vue.util.extend({
    router
}, App)).$mount('#app');
