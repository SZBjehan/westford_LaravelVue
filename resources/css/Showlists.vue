<template>
    <section>
        <div>
        </div>
        <table border="1">
            <tr>
                <td><input type="int" v-model="search_id" placeholder="Search ID" /></td>
                <td><input type="text" v-model="search_name" placeholder="Search by name" /> </td>
                <td><input type="text" v-model="search_email" placeholder="Search by email" /> </td>

            </tr>
            <tr class="title">
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Delete</td>
            </tr>
            <tr v-for="item in filteredPost" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>

                <td>
                    <button class="btn btn-danger" @click="deletePost(item.id)"> Delete </button>
                </td>
            </tr>
        </table>
    </section>
</template>
<script>
import axios from "axios";

export default {
    name: "Showlists",
    data() {
        return {
            userData: [],
            search_id: "",
            search_name: "",
            search_email: "",
        };
    },
    computed: {
                
        filteredEmail() {
            return this.userData.filter(userData => userData.email.includes(this.search_email));
        },
        filteredPost() {
            return this.userData.filter(userData => userData.name.toLowerCase().includes(this.search_name.toLowerCase()) 
                    && userData.email.toLowerCase().includes(this.search_email.toLowerCase()) 
                    && userData.id.toString().includes(this.search_id.toString())); 
                    //&& userData.id.isInteger.includes(this.search_id));
                   
            //return this.userData.filter(userData => userData.name.includes(this.search_name));
        }
    },

    methods: {
        deletePost(id) {
            console.log(id);

            let uri = `http://127.0.0.1:8000/api/post/` + id;
            console.log(uri);
            this.axios.delete(uri).then(response => {
                this.userData.splice(this.userData.indexOf(id), 1);
            });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/post") //'http://127.0.0.1:8000/api/post'
            .then(response => {
                this.userData = response.data;
            });
    }
};
</script>

<style>
section {
    background-color: antiquewhite;
}
table {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    position: center;
}
.title {
    font-style: bold;
    font-family: Georgia;
    font-size: 20px;
}
h2 {
    color: saddlebrown;
}
.ima {
    width: 10px;
    height: 10px;
}
</style>
