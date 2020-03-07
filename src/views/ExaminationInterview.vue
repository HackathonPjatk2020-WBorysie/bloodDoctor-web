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
                                <mdb-list-group-item class="d-flex align-items-center justify-content-between">
                                    <h2 class="h5 flex-center align-items-center justify-content-center my-0">
                                        Wykonane badania krwi:
                                    </h2>
                                    <span class="red-text font-small" v-if="error">
                                         WYMAGANE min. 1
                                    </span>
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

                            <div class="d-flex justify-content-between w-100">
                                <mdb-btn outline="light-blue" @click="goToHome()">Wstecz</mdb-btn>
                                <mdb-btn type="submit" color="light-blue">Dalej</mdb-btn>
                            </div>

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
                tests: [],
                error: false
            }
        },
        methods: {
            goToHome(){
                this.$router.push('/');
            },
            initiateForm(){
                if(this.tests.length > 0){
                    this.$store.state.tests = this.tests;
                    this.$store.state.activePage = 0;
                    this.$router.push('/form/'+this.$store.state.tests[0]);
                }
                else {
                    this.error = true;
                }
            }
        },
        beforeCreate() {
            document.body.className = 'page-index';
        }
    }
</script>

<style scoped>

</style>
