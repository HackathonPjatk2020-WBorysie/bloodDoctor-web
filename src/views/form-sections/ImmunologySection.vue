<template>
    <div>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-0">Zawartość krwi</h2>
        <mdb-input type="text" label="CK M18" outline />
        <mdb-input type="text" label="Kreatyna Jaffe M37" outline />
        <mdb-input type="text" label="GFR" outline />
        <mdb-input type="text" label="Glukoza" outline />
        <mdb-input type="text" label="Żelazo" outline />
        <mdb-input type="text" label="Potas" outline />

        <h2 class="h5 flex-center my-0">Immunologia</h2>
        <mdb-input type="text" label="TSH" outline />
        <mdb-input type="text" label="fT4" outline />
        <mdb-input type="text" label="FT3" outline />

        <div class="flex-between">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="formNextPage()">Dalej</mdb-btn>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ImmunologySection",
        methods: {
            formPrevPage(){
                if(this.$store.state.activePage !== 0){
                    this.$store.state.activePage--;
                    this.$router.push('/form/'+this.$store.state.tests[this.$store.state.activePage]);
                }
                else {
                    this.$router.push('/interview');
                }
            },
            formNextPage(){
                this.$store.state.activePage++;
                if(this.$store.state.activePage === this.$store.state.tests.length){
                    this.$router.push('/camera');
                }
                else {
                    this.$router.push('/form/'+this.$store.state.tests[this.$store.state.activePage]);
                }
            },
        }
    }
</script>

<style scoped>

</style>
