<template>
    <div>

        <Head />
        <Navi />
        <ImmigrateToCan />
        <ImmigrationLevel />
        <ExpressEntry />
        <CanadianExperienceClass />
        <FederalSkilledTradesProgram />
        <ProvincialNomineeProgram />
        <AtlanticImmigrationPilotProgram />
        <CanadaRuralandNorthernImmigrationPilot />
        
        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import ImmigrateToCan from './layouts/immigrate/ImmigrateToCan.vue'
import ImmigrationLevel from './layouts/immigrate/Immigration-Levels-Plan.vue'
import ExpressEntry from './layouts/immigrate/Express-Entry.vue'
import CanadianExperienceClass from './layouts/immigrate/Canadian-Experience-Class.vue'
import FederalSkilledTradesProgram from './layouts/immigrate/Federal-Skilled-Trades-Program.vue'
import ProvincialNomineeProgram from './layouts/immigrate/Provincial-Nominee-Program.vue'
import AtlanticImmigrationPilotProgram from './layouts/immigrate/Atlantic-Immigration-Pilot-Program.vue'
import CanadaRuralandNorthernImmigrationPilot from './layouts/immigrate/Canada-Rural-and-Northern-Immigration-Pilot.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'Immigrate',
    components:{
        Head, Footer, Navi, ImmigrateToCan, ImmigrationLevel, ExpressEntry, CanadianExperienceClass, FederalSkilledTradesProgram, ProvincialNomineeProgram, AtlanticImmigrationPilotProgram, CanadaRuralandNorthernImmigrationPilot 
    }
}
</script>