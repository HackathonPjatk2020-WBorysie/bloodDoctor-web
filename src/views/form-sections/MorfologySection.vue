<template>
    <div>

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <h2 class="h5 flex-center my-0">Morfologia</h2>

        <ok-meter label="WBC" v-model="morfology.WBC" desc="Liczba krwinek białych"/>
        <ok-meter label="RBC" v-model="morfology.RBC" desc="Liczba krwinek czerwonych" />
        <ok-meter label="HGB" v-model="morfology.HGB" desc="Stężenie hemoglobiny"/>
        <ok-meter label="HCT" v-model="morfology.HCT" desc="Stosunek objętości erytrocytów do objętości całej krwi"/>
        <ok-meter label="MCH" v-model="morfology.MCH" desc="Wskaźnik średniej masy hemoglobiny w krwince czerwonej"/>
        <ok-meter label="MCHC" v-model="morfology.MCHC" desc="Wskaźnik średniego stężenia hemoglobiny w jednostkowej objętości krwinek czerwonych"/>
        <ok-meter label="MCV" v-model="morfology.MCV" desc="Średnia objętość krwinek czerwonych" />
        <ok-meter label="RDW-SD" v-model="morfology.RDW_SD" desc="Rozkład objętości krwinek czerwonych"/>
        <ok-meter label="PLT" v-model="morfology.PLT" desc="Wskaźnik ilości płytek krwi na mm sześcienny krwi"/>
        <ok-meter label="PDW" v-model="morfology.PDW" />
        <ok-meter label="P-LCR" v-model="morfology.P_LCR" />
        <ok-meter label="MPV" v-model="morfology.MPV" />
        <ok-meter label="PCT" v-model="morfology.PCT" />
        <ok-meter label="LYMP" v-model="morfology.LYMP" desc="Procentowa norma limfocytów" />
        <ok-meter label="NEUT" v-model="morfology.NEUT" desc="Procentowa norma neutrofilów" />
        <ok-meter label="MONO" v-model="morfology.MONO" desc="Procentowa norma monocytów" />
        <ok-meter label="EOS" v-model="morfology.EOS" desc="Procentowa norma eozynofilów" />
        <ok-meter label="BASO" v-model="morfology.BASO" desc="Procentowa norma bazofilów" />
        <ok-meter label="IG" v-model="morfology.IG" />

        <hr/>

        <div class="d-flex justify-content-between w-100 mt-2">
            <mdb-btn outline="primary" @click="formPrevPage()">Wstecz</mdb-btn>
            <mdb-btn color="primary" @click="submitMorfology()">Dalej</mdb-btn>
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
