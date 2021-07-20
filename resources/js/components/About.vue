<template>
    <div>

        <Head />
        <Navi />
            
        <div class="text-cent">
            <img src="/images/myPhoto.jpg" class="myPhoto" alt="My Photo">
            <!-- <h2>Md Ashiqur Rahman</h2>
            <h3><b>RCIC, R708023</b></h3> -->
        </div>

        <div class="study" id="about">
            <div stu-head>
                <p> Westford Immigration Services is by <b class="text-head"> Md Ashiqur Rahman </b>, one of the only four active ICCRC members located in Bangladesh.</p>
                <p>Ashiq is a Regulated Canadian Immigration Consultant (RCIC, R708023), licensed and approved by Canadian Regulatory authority ICCRC to handle all kinds of immigration matters. He is also a member of Canadian Association of Professional Immigration Consultants (CAPIC). As an ex-employee of Fortune 500 companies like Amazon and Maersk Line, Ashiq is a seasoned professional with proven track records. </p>
                <p>His area of expertise:</p>

                <ul>
                    <li>Express Entry </li>
                    <li>Provincial Nomination program (PNP) </li>
                    <li>Study Permit </li>
                    <li>Business Migration </li>
                    <li>Work Permit </li>
                    <li>Family Sponsorship </li>

                </ul>
                <p>Ashiq earned his prestigious MBA from the top business school of Bangladesh, Institute of Business Administration (IBA), University of Dhaka. He completed his Honors in Immigration Consultant program from the reputed CDI College, Ontario. He is also an alumnus of Notre Dame College and Khulna University, two of the most august educational institutes of Bangladesh. </p>
                <p>One of Ashiq’s most defining traits being his superior communication skill effortlessly sets him apart from the rest and helps him connect to clients with ease. With over 10 years of executive experience in multiple Fortune 500 companies like Maersk Line and Amazon, he is your solution for a stress-free immigration experience. Such extensive corporate exposure and subsequent entrepreneurial network gives him an added edge to meet the demands of Business Migration clients. </p>
                <p>Now he helps making people's dream of migration to Canada come true. </p>
                <p>You can contact him on Facebook, LinkedIn, and also in person to consult any immigration queries. Call +8801633661199 or Whatsapp +14373889215 or email at westfordbd@gmail.com to book an appointment. </p>




            </div>
        </div>




        <Footer />
        
    </div>
</template>


<script>
import Head from './layouts/Head.vue'
import Navi from './layouts/Navi.vue'
import Footer from './layouts/Footer.vue'


export default {
    name:'About',
    components:{
        Head, Footer, Navi
    }
}
</script>