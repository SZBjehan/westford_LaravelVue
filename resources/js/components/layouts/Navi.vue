<template>
    <div class="navi" id="navi">
        <div class="navi-b">

            <ul class="nav-ul">
                <li class="nav-li"><a href="/study">Study Permit</a></li>
                <li class="nav-li"><a href="/work">Work Permit</a></li>
                <li class="nav-li"><a href="/familys">Family Sponsorship</a></li>
                <li class="nav-li"><a href="/business">Business Immigration</a></li>
                <li class="nav-li"><a href="/refusal">Refusal Appeals</a></li>
                <li class="nav-li"><a href="/fees">Fees</a></li>
                
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
  name: 'Navi'
        
}
</script>
