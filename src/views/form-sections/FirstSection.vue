<template>
    <div>
        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>
        <h2 class="h5 flex-center my-0">Morfologia</h2>
        <mdb-input type="text" label="WBC" outline />
        <mdb-input type="text" label="RBC" outline />
        <mdb-input type="text" label="HGB" outline />
        <mdb-input type="text" label="HCT" outline />
        <mdb-input type="text" label="MCH" outline />
        <mdb-input type="text" label="MCHC" outline />
        <mdb-input type="text" label="MCV" outline />
        <mdb-input type="text" label="RDW-SD" outline />
        <mdb-input type="text" label="PLT" outline />
        <mdb-input type="text" label="PDW" outline />
        <mdb-input type="text" label="P-LCR" outline />
        <mdb-input type="text" label="MPV" outline />


        <router-link tag="mdb-btn" color="light-blue" to="/form/b">Dalej</router-link>
    </div>
</template>

<script>
    export default {
        name: "FirstSection"
    }
</script>

<style scoped>

</style>
