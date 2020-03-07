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

        <div class="flex-between">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="formNextPage()">Dalej</mdb-btn>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BiochemySection",
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
            }
        }
    }
</script>

<style scoped>

</style>
