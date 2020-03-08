<template>
    <div>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-0">Biochemia</h2>

        <ok-meter label="CK M18" v-model="biochemy.CK_M18" />
        <ok-meter label="Kreatynina Jaffe M37" v-model="biochemy.Creatinine_Jaffe_M37" />
        <ok-meter label="GFR" v-model="biochemy.GFR" />
        <ok-meter label="Glukoza" v-model="biochemy.Glucose_L43" desc="Ilość cukru (glukozy) we krwi"/>
        <ok-meter label="Żelazo" v-model="biochemy.Iron_O95" desc="Ilość żelaza w krwi"/>
        <ok-meter label="Potas" v-model="biochemy.Potasium_N45" desc="Ilość potasu we krwi"/>

        <div class="d-flex justify-content-between w-100 mt-1">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="submitBiochemy()">Dalej</mdb-btn>
        </div>

    </div>
</template>

<script>
    import OkMeter from "@/components/okMeter";
    export default {
        name: "BiochemySection",
        components: {OkMeter},
        data(){
            return {
                biochemy: {
                    CK_M18: 0,
                    Creatinine_Jaffe_M37: 0,
                    GFR: 0,
                    Glucose_L43: 0,
                    Iron_O95: 0,
                    Potasium_N45: 0
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
                    this.$router.push('/report');
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
        },
        beforeCreate() {
            document.body.className = 'page-form';
        }
    }
</script>

<style scoped>

</style>
