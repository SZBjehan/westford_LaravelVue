<template>
    <div>
        
        <Head />
        <Navi />
        
        <div id="Appointment40Min" class="study">
            <div class="stu-head">
                <h2 class="text-head">40 Min – Virtual Consultation – $100 USD</h2>
                <h3>Web conferencing details provided upon confirmation</h3>
                <br>
                Md Ashiqur Rahman is a Regulated Canadian Immigration Consultant (License no. is R708023). His area of expertise include Economic and Business Migration, Provincial Nomination Programs, Study Permit, Work Permit, Family Sponsorship programs. 
<br><br>This booking is for a consultation over the period of 20 minutes and will be as per the terms & conditions set out in the initial consultation agreement as listed on our website. 
<br><br>We request you to provide as much details about the issue in discussion as possible. This enables us to be better prepared for the meeting and to provide you with prompt accurate solutions. There are almost 100 Canadian immigration programs. It is practically not possible for the consultant to be familiar and updated with all the requirements, criteria, changes and updates at all time. Similar applies for the regulatory requirements for different occupations for each provinces as this varies frequently and is a vast subject that needs detailed review. If need be, the consultant at his discretion may email you with follow up details as discussed during the conversation whereas necessary.
<br><br>The consultation may be recorded for our record, reference, training and quality check. In case you do not want the consultation to be recorded, please let the consultant know at the very beginning of the session. By proceeding to book the call, you consent and agree for the call to be recorded.
<br><br>We will not be able to review/assess profile or documents or NOC during the discussion call as that takes time and relevant resources. Should you desire as such, you may avail our specific services for the same.

            </div>
            <br>
            <br>

            <AppBar />


        </div>
        
        <Footer />
        
    </div>
</template>

<script>

import Head from '../Head.vue'
import Navi from '../Navi.vue'
import AppBar from './AppBar.vue'
import Footer from '../Footer.vue'

export default {
    name: 'Appointment40Min',
    components:{
        Head, Footer, Navi , AppBar
    },

}
</script>