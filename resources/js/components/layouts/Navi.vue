<template>
    <div class="navi" id="navi">
        <nav class="navi-b " id="navbar">
            
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <ul class="nav-list">
                <div class="nav-menu">
                    <li class="nav-li dropdown"><a href="/immigrate">Immigrate</a>
                        <ul class="dropdown-content">
                            <a href="/immigrate#ImmigrateToCan">Immigrate To Canada </a>
                            <a href="/immigrate#Immigration-Levels-Plan">Immigration Level </a>
                            <a href="/immigrate#Express-Entry">Express Entry </a>
                            <a href="/immigrate#Canadian-Experience-Class">Canadian Experience Class </a>
                            <a href="/immigrate#Federal-Skilled-Trades-Program">Federal Skilled Trades Program </a>
                            <a href="/immigrate#Provincial-Nominee-Program">Provincial Nominee Program </a>
                            <a href="/immigrate#Atlantic-Immigration-Pilot-Program">Atlantic Immigration Pilot Program </a>
                            <a href="/immigrate#Canada-Rural-and-Northern-Immigration-Pilot">Canada Ruraland Northern Immigration Pilot </a>
                        </ul>
                    </li>
                    <li class="nav-li"><a href="/study">Study Permit</a> </li>
                    <li class="nav-li"><a href="/business">Business Immigration</a></li>
                    <li class="nav-li"><a href="/familys">Family Sponsorship</a></li>
                    <li class="nav-li"><a href="/work">Work Permit</a></li>
                    <li class="nav-li"><a href="/refusal">Refusal Appeals</a></li>
                    <li class="nav-li"><a href="/fees">Fees</a></li>
                    <li class="nav-li"><a href="/latest">Latest News</a></li>
                </div>
            </ul>
            


        </nav>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'Navi',
    mounted(){
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('nav-list')[0]
        
        toggleButton.addEventListener('click', ()=>{
            navbarLinks.classList.toggle('active')
        })
    
    }

}
</script>

