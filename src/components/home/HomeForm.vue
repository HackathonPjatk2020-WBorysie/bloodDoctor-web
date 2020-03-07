<template>
    <form>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <mdb-input type="text" label="Twoje imie" outline />

        <div class="text-center mt-3">
            <mdb-btn color="light-blue" @click="start()">
                Zaczynajmy
                <i class="ml-2 fas fa-chevron-right"></i>
            </mdb-btn>
        </div>

<!--        <hr/>-->
<!--        <div class="d-flex justify-content-between">-->
<!--            <a href="#" class="text-decoration-none">-->
<!--                Opcjonalna sekcja dodatkowa-->
<!--            </a>-->
<!--            <a href="#" class="text-decoration-none">-->
<!--                Dodatkowy link-->
<!--            </a>-->
<!--        </div>-->

    </form>
</template>

<script>
    export default {
        name: "HomeForm",
        data(){
            return {
                name: ""
            }
        },
        methods: {
            start(){
                this.$store.state.name = this.name;
                this.$router.push('/interview')
            }
        }
    }
</script>

<style scoped>

</style>
