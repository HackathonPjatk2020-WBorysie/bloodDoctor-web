<template>
    <div>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-0">Biochemia</h2>
        <mdb-input type="text" label="CK M18" outline v-model="biochemy.CK_M18" />
        <mdb-input type="text" label="Kreatynina Jaffe M37" outline v-model="biochemy.Creatinine_Jaffe_M37" />
        <mdb-input type="text" label="GFR" outline v-model="biochemy.GFR" />
        <mdb-input type="text" label="Glukoza" outline v-model="biochemy.Glucose_L43" />
        <mdb-input type="text" label="Żelazo" outline v-model="biochemy.Iron_O95"/>
        <mdb-input type="text" label="Potas" outline v-model="biochemy.Potasium_N45"/>

        <div class="flex-between">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="submitBiochemy()">Dalej</mdb-btn>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BiochemySection",
        data(){
            return {
                biochemy: {
                    CK_M18: undefined,
                    Creatinine_Jaffe_M37: undefined,
                    GFR: undefined,
                    Glucose_L43: undefined,
                    Iron_O95: undefined,
                    Potasium_N45: undefined
                }
            }
        },
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
            submitBiochemy(){
                if(this.validateBiochemy()){
                    this.uploadBiochemy();
                    this.formNextPage();
                }
            },
            validateBiochemy(){
                return true;
            },
            uploadBiochemy(){
                this.$store.state.biochemy = this.biochemy;
                console.log(this.biochemy);
            }
        }
    }
</script>

<style scoped>

</style>
