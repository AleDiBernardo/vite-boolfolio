<script>
  import axios from "axios";

	export default{
		data(){
			return{
				posts: [],
			}
		},
		created() {
			axios.get('http://127.0.0.1:8000/api/projects').then((resp)=> {
				this.posts = resp.data.results;
        console.log(this.posts);
			});
		}
	}
</script>

<template>
  <h1>Home</h1>
</template>

<style></style>
