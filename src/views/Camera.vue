<template>
    <mdb-container class="my-5">
        <mdb-row>
            <mdb-col col="col-11 col-lg-7" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <mdb-col col="col-12" class="mb-3 d-flex justify-content-between align-items-center">
                            <mdb-btn @click="$router.go(-1)" color="primary" class="bg-white" size="sm">
                                <i class="mr-2 fas fa-chevron-left" /> Powrót
                            </mdb-btn>
                            <select class="browser-default custom-select col-6" v-model="deviceId">
                                <option :value="device.deviceId" v-for="(device, index) in cameras" :selected="!index">
                                    {{ device.label }}
                                </option>
                            </select>
                        </mdb-col>
                        <hr />
                        <mdb-col col="col-8" class="mx-auto d-flex justify-content-center">
                            <web-cam
                                width="400" height="300"
                                @cameras="captureVideo($event)"
                                :device-id="deviceId"
                            />
                        </mdb-col>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    import WebCam from "vue-web-cam/src/webcam.vue";

    export default {
        name: "Camera",
        components: { WebCam },
        data () {
            return {
                photo: null,
                cameras: [],
                deviceId: ""
            };
        },
        methods: {
            captureVideo($event){
                this.cameras = $event;
                this.deviceId = this.cameras[0].deviceId;
            }
        },
        mounted() {
            console.log(this.cameras);
        },
        beforeCreate() {
            document.body.className = 'page-report';
        }
    }
</script>

<style scoped>

</style>
