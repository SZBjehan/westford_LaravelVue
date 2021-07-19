
<template>
  <div>
      <Navi />
      
      <Showlists />
  </div>
</template>

<script>
import Navi from '../components/Navi'
import Showlists from './Showlists.vue'

    export default {
        name:'HomeComponent',
        components:{
            Navi, Showlists,
        }
    }
</script>