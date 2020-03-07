<template>
    <div>

        <h1 class="flex-center my-undefined">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-undefined">Morfologia</h2>

        <ok-meter label="WBC" v-model="morfology.WBC" />
        <ok-meter label="RBC" v-model="morfology.RBC" />
        <ok-meter label="HGB" v-model="morfology.HGB" />
        <ok-meter label="HCT" v-model="morfology.HCT" />
        <ok-meter label="MCH" v-model="morfology.MCH" />
        <ok-meter label="MCHC" v-model="morfology.MCHC" />
        <ok-meter label="MCV" v-model="morfology.MCV" />
        <ok-meter label="RDW-SD" v-model="morfology.RDW_SD" />
        <ok-meter label="PLT" v-model="morfology.PLT" />
        <ok-meter label="PDW" v-model="morfology.PDW" />
        <ok-meter label="P-LCR" v-model="morfology.P_LCR" />
        <ok-meter label="MPV" v-model="morfology.MPV" />
        <ok-meter label="PCT" v-model="morfology.PCT" />
        <ok-meter label="LYMP" v-model="morfology.LYMP" />
        <ok-meter label="NEUT" v-model="morfology.NEUT" />
        <ok-meter label="MONO" v-model="morfology.MONO" />
        <ok-meter label="EOS" v-model="morfology.EOS" />
        <ok-meter label="BASO" v-model="morfology.BASO" />
        <ok-meter label="IG" v-model="morfology.IG" />

        <div class="d-flex justify-content-between w-100 mt-1">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="submitMorfology()">Dalej</mdb-btn>
        </div>


    </div>
</template>

<script>
    import OkMeter from "@/components/okMeter";
    export default {
        name: "MorfologySection",
        components: {OkMeter},
        data(){
            return {
                morfology: {
                    WBC: 0,
                    RBC: 0,
                    HGB: 0,
                    HCT: 0,
                    MCH: 0,
                    MCHC: 0,
                    MCV: 0,
                    RDW_SD: 0,
                    PLT: 0,
                    PDW: 0,
                    P_LCR: 0,
                    MPV: 0,
                    PCT: 0,
                    LYMP: 0,
                    NEUT: 0,
                    MONO: 0,
                    EOS: 0,
                    BASO: 0,
                    IG: 0
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
            submitMorfology(){
                if(this.validateMorfology()){
                    this.uploadMorfology();
                    this.formNextPage();
                }
            },
            validateMorfology(){
              return true;
            },
            uploadMorfology(){
                this.$store.state.morfology = this.morfology;
                console.log(this.morfology);
            }
        },
        beforeCreate() {
            document.body.className = 'page-form';
        }
    }
</script>

<style scoped>

</style>
