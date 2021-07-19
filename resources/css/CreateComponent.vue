
<template>
   <div>
        <Navi />
        <Add />
  </div>
</template>

<script>
import Navi from '../components/Navi'
import Add from '../components/Add'

    export default {
        name:'CreateComponent',
        components:{
            Navi,Add
        },
        
    }
    
</script>