<template>
    <section>
        <div>
            <h2>Table</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Create</a></li>
                
            </ul>
        </div>
        
    </section>
</template>
<script>
//import axios from 'axios'

export default {
  name: 'Navi'
        
}
</script>

<style>
    section{
        background-color: antiquewhite; 
    }
        h2{
        text-align: center;
        color: saddlebrown;
    }
    a{
        color: rgb(6, 88, 109);
    }
    a:hover{
        color: red;

    }
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;;
    align-items: center;
  }
  
  li {
    float: left;
    
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #111;
  }
</style>
