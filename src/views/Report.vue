<template>
    <mdb-container class="my-5">

        <div v-if="loading" class="spinner-pos">
            <div class="spinner-grow text-danger" role="status" style="width: 5rem; height: 5rem">
                <span class="sr-only">Loading...</span>
            </div>
            <div>Wiktor przygotowuje dla Ciebie analizę...</div>
        </div>

        <mdb-row class="d-flex justify-content-end w-100" v-if="!loading">
            <mdb-col col="7">
                <mdb-card class="border border-bottom-0 rounded-0">
                    <mdb-card-body class="d-flex justify-content-around p-2">
                        <router-link to="/camera" tag="mdb-btn" color="primary" class="bg-white">
                            Analiza wideo produktów <i class="ml-2 fas fa-camera" />
                        </router-link>
                        <mdb-btn color="primary" @click="resetApp" class="bg-white">
                            Wykonaj inne badanie <i class="ml-2 fas fa-reply" />
                        </mdb-btn>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>

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
                                                <b>{{ key }}:</b> {{ value === 1 ? "Powyżej normy" : value === -1 ? "Poniżej normy" : "W normie" }}
                                            </li>
                                        </ul>
                                    </mdb-list-group-item>
                                    <mdb-list-group-item v-if="BloodTest.Biochemy !== null" class="patient-cell">
                                        <p>Biochemia:</p>
                                        <ul>
                                            <li v-for="(value, key) of BloodTest.Biochemy">
                                                <b>{{ key }}:</b> {{ value === 1 ? "Powyżej normy" : value === -1 ? "Poniżej normy" : "W normie" }}
                                            </li>
                                        </ul>
                                    </mdb-list-group-item>
                                    <mdb-list-group-item v-if="BloodTest.Immunology !== null" class="patient-cell">
                                        <p>Immunologia:</p>
                                        <ul>
                                            <li v-for="(value, key) of BloodTest.Immunology">
                                                <b>{{ key }}:</b> {{ value === 1 ? "Powyżej normy" : value === -1 ? "Poniżej normy" : "W normie" }}
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
                            <h3>Tych produktów powinieneś unikać:</h3>

                            <ul>
                                <li v-for="(value, key) in unsuggested">
                                    <span class="red-text">{{ value }}</span>
                                </li>
                            </ul>

                            <hr class="my-3" />

                            <h3>Te produkty powinieneś częściej spożywać:</h3>

                            <ul>
                                <li v-for="(value, key) in suggested">
                                    <span class="green-text">{{ value }}</span>
                                </li>
                            </ul>
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
                unsuggested: [],
                suggested: [],
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
                    let url1 = 'https://raw.githubusercontent.com/HackathonPjatk2020-WBorysie/bloodDoctor-ai/master/items.json';
                    this.$http.get(url1).then(response => {
                        this.unsuggested = response.body.Shrt_Desc;
                    });
                    let url2 = 'https://raw.githubusercontent.com/HackathonPjatk2020-WBorysie/bloodDoctor-ai/master/good_items.json';
                    this.$http.get(url2).then(response => {
                        this.suggested = response.body.Shrt_Desc;
                        this.loading = false;
                    });
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
    }
    ul {
        list-style-type: square !important;
    }
</style>
