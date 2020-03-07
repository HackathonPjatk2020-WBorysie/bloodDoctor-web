<template>
    <div>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-0">Immunologia</h2>
        <mdb-input type="text" label="TSH" outline v-model="immunology.TSH_L69"/>
        <mdb-input type="text" label="fT4" outline v-model="immunology.fT4_O69"/>
        <mdb-input type="text" label="FT3" outline v-model="immunology.FT3_O55"/>

        <div class="flex-between">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="sumbitImmunology()">Dalej</mdb-btn>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ImmunologySection",
        data() {
            return {
                immunology: {
                    TSH_L69: undefined,
                    fT4_O69: undefined,
                    FT3_O55: undefined
                }
            }
        },
        methods: {
            formPrevPage() {
                if (this.$store.state.activePage !== 0) {
                    this.$store.state.activePage--;
                    this.$router.push('/form/' + this.$store.state.tests[this.$store.state.activePage]);
                } else {
                    this.$router.push('/interview');
                }
            },
            formNextPage() {
                this.$store.state.activePage++;
                if (this.$store.state.activePage === this.$store.state.tests.length) {
                    this.$router.push('/camera');
                } else {
                    this.$router.push('/form/' + this.$store.state.tests[this.$store.state.activePage]);
                }
            },
            sumbitImmunology(){
                if(this.validateImmunology()){
                    this.uploadImmunology();
                    this.formNextPage();
                }
            },
            validateImmunology(){
                return true;
            },
            uploadImmunology(){
                this.$store.state.immunology = this.immunology;
                console.log(this.immunology);
            }
        }
    }
</script>

<style scoped>

</style>
