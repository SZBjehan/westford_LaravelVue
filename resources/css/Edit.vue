<template>
    <section>        
        <div>
    <h1>Edit Post</h1>
    <form @submit="updatePost()">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Update Name:</label>
            <input type="text" class="form-control" v-model="post.name" value="post.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Update email:</label>
            <input type="text" class="form-control" v-model="post.email" value="post.email">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
    </section>
</template>
<script>
import axios from 'axios';

export default {
     name: 'Add',
    data() {
        return {
          post: {}
        }
      },
      created() {
        let uri = `http://127.0.0.1:8000/api/post/{id}/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `http://127.0.0.1:8000/api/post/{id}/${this.$route.params.id}`;
          this.axios.put(uri, this.post).then((response) => {
            console.log(response);
            this.$router.push({name: 'home'});
          });
        }
      }
}

</script>

<style>
    section{
        background-color: antiquewhite; 
    }
    table{
        margin-top: 5%;
        width: 100%;
        position: center;

    }
    .title{
        font-style: bold;
        font-family: Georgia;
        font-size: 20px;
    }
    h2{
        color: saddlebrown;
    }
    a{
        color: rgb(6, 88, 109);
    }
    a:hover{
        color: red;

    }
    .fc{
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-content: center;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        max-width: 500px;
        margin: auto;
        text-align: center;
        transition: 0.5s;
        cursor: pointer;
    }
</style>
