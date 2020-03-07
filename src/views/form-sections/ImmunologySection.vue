<template>
    <div>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-0">Immunologia</h2>
        <ok-meter label="TSH" v-model="immunology.TSH_L69"/>
        <ok-meter label="fT4" v-model="immunology.fT4_O69"/>
        <ok-meter label="FT3" v-model="immunology.FT3_O55"/>

        <div class="d-flex justify-content-between w-100 mt-1">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="sumbitImmunology()">Dalej</mdb-btn>
        </div>

    </div>
</template>

<script>
    import OkMeter from "@/components/okMeter";
    export default {
        name: "ImmunologySection",
        components: {OkMeter},
        data() {
            return {
                immunology: {
                    TSH_L69: 0,
                    fT4_O69: 0,
                    FT3_O55: 0
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
