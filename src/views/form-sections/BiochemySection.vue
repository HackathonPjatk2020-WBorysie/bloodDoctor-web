<template>
    <div>
        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>
        <h2 class="h5 flex-center my-0">Morfologia 2</h2>
        <mdb-input type="text" label="PCT" outline />
        <mdb-input type="text" label="LYMP" outline />
        <mdb-input type="text" label="NEUT" outline />
        <mdb-input type="text" label="MONO" outline />
        <mdb-input type="text" label="EOS" outline />
        <mdb-input type="text" label="BASO" outline />
        <mdb-input type="text" label="IG" outline />
        <mdb-btn color="light-blue" @click="formNextPage()">Dalej</mdb-btn>
    </div>
</template>

<script>
    export default {
        name: "BiochemySection",
        methods: {
            formNextPage(){
                this.$store.state.activePage++;
                if(this.$store.state.activePage === this.$store.state.tests.length){
                    this.$router.push('/camera');
                }
                else {
                    this.$router.push('/form/'+this.$store.state.tests[this.$store.state.activePage]);
                }
            }
        }
    }
</script>

<style scoped>

</style>
