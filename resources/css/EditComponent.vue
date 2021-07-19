
<template>
  <div>
        <Navi />
        <Edit />
  </div>
  
</template>

<script>
import Navi from '../components/Navi'
import Edit from '../components/Edit'

    export default {
         name:'CreateComponent',
        components:{
            Navi,Edit
        },
      
    }
</script>