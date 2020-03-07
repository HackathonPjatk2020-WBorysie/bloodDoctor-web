<template>
    <form>
        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <mdb-input type="text" label="Twoje imie" outline />

        <div class="text-center mt-3">
            <router-link to="/form/a" tag="mdb-btn">
                Zaczynajmy
                <i class="ml-2 fas fa-chevron-right"></i>
            </router-link>
        </div>

<!--        <hr/>-->
<!--        <div class="d-flex justify-content-between">-->
<!--            <a href="#" class="text-decoration-none">-->
<!--                Nie pamiętasz hasła?-->
<!--            </a>-->
<!--            <a href="#" class="text-decoration-none" @click="switchCard">-->
<!--                Zarejestruj się-->
<!--            </a>-->
<!--        </div>-->

    </form>
</template>

<script>
    export default {
        name: "HomeForm"
    }
</script>

<style scoped>

</style>
