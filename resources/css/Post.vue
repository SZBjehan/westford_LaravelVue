<template>
    <article>
        <h3>{{ post.id }}</h3>
        <p> {{ post.name }} </p>
    </article>
</template>


<script>
export default{
    data(){
      return {
        userData:undefined,
        search: ''
      }
    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/post') //'http://127.0.0.1:8000/api/post'
            .then(response => {
                
                this.userData = response.data;
            });
    }
};
</script>
