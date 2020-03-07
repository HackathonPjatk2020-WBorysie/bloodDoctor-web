<template>
    <div>

        <h1 class="flex-center my-undefined">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-undefined">Morfologia</h2>

        <mdb-input type="text" label="WBC" outline v-model="morfology.WBC" />
        <mdb-input type="text" label="RBC" outline v-model="morfology.RBC" />
        <mdb-input type="text" label="HGB" outline v-model="morfology.HGB" />
        <mdb-input type="text" label="HCT" outline v-model="morfology.HCT" />
        <mdb-input type="text" label="MCH" outline v-model="morfology.MCH" />
        <mdb-input type="text" label="MCHC" outline v-model="morfology.MCHC" />
        <mdb-input type="text" label="MCV" outline v-model="morfology.MCV" />
        <mdb-input type="text" label="RDW-SD" outline v-model="morfology.RDW_SD" />
        <mdb-input type="text" label="PLT" outline v-model="morfology.PLT" />
        <mdb-input type="text" label="PDW" outline v-model="morfology.PDW" />
        <mdb-input type="text" label="P-LCR" outline v-model="morfology.P_LCR" />
        <mdb-input type="text" label="MPV" outline v-model="morfology.MPV" />
        <mdb-input type="text" label="PCT" outline v-model="morfology.PCT" />
        <mdb-input type="text" label="LYMP" outline v-model="morfology.LYMP" />
        <mdb-input type="text" label="NEUT" outline v-model="morfology.NEUT" />
        <mdb-input type="text" label="MONO" outline v-model="morfology.MONO" />
        <mdb-input type="text" label="EOS" outline v-model="morfology.EOS" />
        <mdb-input type="text" label="BASO" outline v-model="morfology.BASO" />
        <mdb-input type="text" label="IG" outline v-model="morfology.IG" />

        <div class="flex-between">
            <mdb-btn outline="light-blue" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="light-blue" @click="submitMorfology()">Dalej</mdb-btn>
        </div>


    </div>
</template>

<script>
    export default {
        name: "MorfologySection",
        data(){
            return {
                morfology: {
                    WBC: undefined,
                    RBC: undefined,
                    HGB: undefined,
                    HCT: undefined,
                    MCH: undefined,
                    MCHC: undefined,
                    MCV: undefined,
                    RDW_SD: undefined,
                    PLT: undefined,
                    PDW: undefined,
                    P_LCR: undefined,
                    MPV: undefined,
                    PCT: undefined,
                    LYMP: undefined,
                    NEUT: undefined,
                    MONO: undefined,
                    EOS: undefined,
                    BASO: undefined,
                    IG: undefined
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
        }
    }
</script>

<style scoped>

</style>
