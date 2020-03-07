<template>
    <div>
        Camera! Model:
        {{ BloodTest }}
        <mdb-btn color="orange" @click="sendData()">Wyślij do kuby!</mdb-btn>
        <router-link to="/">Na początek</router-link>
    </div>
</template>

<script>
    import BloodTest from "@/models/BloodTest";

    export default {
        name: "Camera",
        data(){
            return {
                BloodTest: new BloodTest(
                    this.$store.state.name,
                    this.$store.state.morfology,
                    this.$store.state.biochemy,
                    this.$store.state.immunology
                )
            }
        },
        methods: {
            sendData(){
                let url = 'https://blood-doctor-be.herokuapp.com/bloodTest';
                let body = this.BloodTest;
                let headers = {
                  'Content-Type': 'application/json'
                };
                this.$http.post(url, body, {headers}).then(response => {
                    alert("Success!");
                }, error => {
                    alert("Error!")
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>
