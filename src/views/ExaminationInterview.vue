<template>
    <mdb-container class="my-5">

        <mdb-row>
            <mdb-col col="col-11 col-lg-6" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <form @submit.prevent="initiateForm()">

                            <h1 class="flex-center my-0">BloodDoctor.io</h1>
                            <hr/>

                            <mdb-list-group class="mb-3">
                                <mdb-list-group-item>
                                    <h2 class="h5 flex-center my-0">Wykonane badania krwi:</h2>
                                </mdb-list-group-item>
                                <mdb-list-group-item>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="morfology" value="morfology" v-model="tests">
                                        <label class="custom-control-label" for="morfology">Morfologia</label>
                                    </div>
                                </mdb-list-group-item>
                                <mdb-list-group-item>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="biochemy" value="biochemy" v-model="tests">
                                        <label class="custom-control-label" for="biochemy">Biochemia</label>
                                    </div>
                                </mdb-list-group-item>
                                <mdb-list-group-item>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="immunology" value="immunology" v-model="tests">
                                        <label class="custom-control-label" for="immunology">Immunologia</label>
                                    </div>
                                </mdb-list-group-item>
                            </mdb-list-group>

                            <mdb-btn type="submit" color="light-blue">Dalej</mdb-btn>

                        </form>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    import Form from "./Form";
    export default {
        name: "ExaminationInterview",
        components: {Form},
        data(){
            return {
                tests: []
            }
        },
        methods: {
            initiateForm(){
                this.$store.state.tests = this.tests;
                this.$store.state.activePage = 0;
                this.$router.push('/form/'+this.$store.state.tests[0]);
            }
        }
    }
</script>

<style scoped>

</style>
