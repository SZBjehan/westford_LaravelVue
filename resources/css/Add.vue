<template>
    <section>        
        <div>   
            <form action="" @submit="createPost()">     
            Name: <br> <input type="text" v-model="post.name"  name="name" placeholder="enter name" value="" /> <br>
            Email: <br> <input type="email" v-model="post.email" name="email" placeholder="enter email" value="" /> <br>
            <!-- Photo: <br> <input type="file" @change="onFileSelected">
            <img :src="avatar" alt=""> -->
            <button  >Upload</button>
            </form>
      </div>
    </section>
</template>
<script>
import axios from 'axios';

export default {
     name: 'Add',
    data(){
        return {
            post:{
                name: '',
                email: ''
            }
        }
    },

    methods: {
        createPost(){
            //  const article = { title: "Vue POST Request Example" };
            // axios.post('http://127.0.0.1:8000/api/post', article)
            //     .then(response => this.form = response.data.name);
            
            const asd = { title: "Vue POST Request Example" };
             console.log(this.post);
            axios.post('http://127.0.0.1:8000/api/posts',this.post).then (response => {
                this.post = response.data,
                this.$router.push({name: 'home'});
            });
            
            // e.preventDefault();
            //     let currentObj = this;
            //     this.axios.post('http://127.0.0.1:8000/api/post', {
            //         name: this.name,
            //         email: this.email
            //     })
            //     .then(function (response) {
            //         currentObj.name = response.data.name;
            //         currentObj.email = response.data.email;
                    
            //     });
        }

    //     submitForm(){
    //        axios.post('http://127.0.0.1:8000/api/post', {
    //         name: this.name,
    //         email: this.email,
        
    //         }).then(response => {
    //         // console.log(response);
    //         this.response = response.data
    //   })
    //       }
  }
    }

    

// addPost(){
//        let uri = 'http://127.0.0.1:8000/api/post';
//        this.axios.post(uri, this.post).then((response) => {
//        this.$router.push({name: 'posts'});
//     });



//   data() {
//       return {
//           avatar: null
//       }
//   },
//   methods:{
//       onFileSelected(event) {
//           console.log(event)
//           //this.selectedFile = event.target.files[0]
//           let image = event.target.files[0]
//           let reader = new FileReader();
//           reader.readAsDataURL(image);
//           reader.onload = event => {
//               console.log(event)
//               this.avatar = event.target.result
//           }

//       },
// //      upload(){
// //          axios.post('http://127.0.0.1:8000/api/post', {image}:this.avatar)
// //      }

//       onUpload() {
//           const fd = new FormData();
//           fd.append('image', this.selectedFile, this.selectedFile.image)
//           axios.post('http://127.0.0.1:8000/api/post', fd, {
//               onUploadProgress: uploadEvent => {
//                   console.log(' Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
//               }
//           })
//             .then(res => {
//                 console.log(res)
//             })
//       }
//   }
          

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
