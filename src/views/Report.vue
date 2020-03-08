<template>
    <mdb-container class="my-5">

        <div v-if="loading" class="spinner-pos">
            <div class="spinner-grow text-danger" role="status" style="width: 5rem; height: 5rem">
                <span class="sr-only">Loading...</span>
            </div>
            <div>Wiktor i Paweł przygotowują dla Ciebie analizę...</div>
        </div>

        <div class="mb-3 d-flex justify-content-end w-100" v-if="!loading">
            <router-link to="/camera" tag="mdb-btn" color="primary" class="bg-white">
                <i class="fas fa-camera" />
            </router-link>
            <mdb-btn color="primary" @click="resetApp" class="bg-white">
                Wykonaj inne badanie
            </mdb-btn>
        </div>
        <mdb-row v-if="!loading">
            <mdb-col col="col-11 col-lg-4" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <div>
                            <div>
                                <mdb-list-group>
                                    <mdb-list-group-item>
                                        <b>Pacjent: {{ BloodTest.name }}</b>
                                    </mdb-list-group-item>
                                    <mdb-list-group-item v-if="BloodTest.Morfology !== null" class="patient-cell">
                                        <p>Morfologia:</p>
                                        <ul>
                                            <li v-for="(value, key) of BloodTest.Morfology">
                                                <b>{{ key }}:</b> {{ value }}
                                            </li>
                                        </ul>
                                    </mdb-list-group-item>
                                    <mdb-list-group-item v-if="BloodTest.Biochemy !== null" class="patient-cell">
                                        <p>Biochemia:</p>
                                        <ul>
                                            <li v-for="(value, key) of BloodTest.Biochemy">
                                                <b>{{ key }}:</b> {{ value }}
                                            </li>
                                        </ul>
                                    </mdb-list-group-item>
                                    <mdb-list-group-item v-if="BloodTest.Immunology !== null" class="patient-cell">
                                        <p>Immunologia:</p>
                                        <ul>
                                            <li v-for="(value, key) of BloodTest.Immunology">
                                                <b>{{ key }}:</b> {{ value }}
                                            </li>
                                        </ul>
                                    </mdb-list-group-item>
                                </mdb-list-group>
                            </div>

                        </div>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
            <mdb-col col="col-11 col-lg-8" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <div>
                            >food list<
                        </div>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>

    </mdb-container>
</template>

<script>
    import BloodTest from "@/models/BloodTest";

    export default {
        name: "Camera",
        data(){
            return {
                BloodTest: new BloodTest(
                    this.$store.state.name,
                    this.$store.state.morfology,
                    this.$store.state.biochemy,
                    this.$store.state.immunology
                ),
                loading: true
            }
        },
        methods: {
            resetApp(){
                this.$store.state.name = "";
                this.$store.state.tests = [];
                this.$store.state.activePage = 0;
                this.$store.state.morfology = null;
                this.$store.state.biochemy = null;
                this.$store.state.immunology = null;
                this.$router.push('/');
            },
            async sendData(){
                let url = 'https://blood-doctor-be.herokuapp.com/bloodTest';
                let body = this.BloodTest;
                let headers = {
                  'Content-Type': 'application/json'
                };
                return await this.$http.post(url, body, {headers});
            }
        },
        mounted() {
            this.sendData().then(
                success => {
                    this.loading = false;
                },
                error => {

                }
            );
        },
        beforeCreate() {
            document.body.className = 'page-report';
        }
    }
</script>

<style scoped lang="scss">
    .spinner-pos {
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translateX(-50%) translateY(-50%);
        display: flex;
        color: crimson;
        font-weight: bold;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .patient-cell {
        display: flex;
        flex-direction: column;
        justify-content: flex-start !important;
        align-items: flex-start !important;
        ul {
            list-style-type: square !important;
        }
    }
</style>
