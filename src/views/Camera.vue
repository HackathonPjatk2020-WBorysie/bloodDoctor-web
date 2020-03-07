<template>
    <div>
        Camera! Model:
        {{ BloodTest }}
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
        }
    }
</script>

<style scoped>

</style>
