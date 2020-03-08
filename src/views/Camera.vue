<template>

    <mdb-card-body>
        <mdb-col col="col-12" class="mb-3 d-flex justify-content-between align-items-center">
            <mdb-row>
                <mdb-col col="col-11 col-lg-6 my-2">
                    <mdb-btn @click="$router.go(-1)" color="primary" class="bg-white" size="block">
                        <i class="mr-2 fas fa-chevron-left"/> Powrót
                    </mdb-btn>
                </mdb-col>
                <mdb-col col="col-11 col-lg-6">
                    <select class="browser-default custom-select w-100" v-model="deviceId">
                        <option :value="device.deviceId" v-for="(device, index) in cameras" :selected="!index">
                            {{ device.label.substring(0, device.label.indexOf('(')) }}
                        </option>
                    </select>
                </mdb-col>
            </mdb-row>
        </mdb-col>
        <hr/>
        <mdb-col col="col-8" class="mx-auto d-flex justify-content-center">
            <web-cam
                    height="100%"
                    @cameras="captureVideo($event)"
                    :device-id="deviceId"
                    controls
            />
        </mdb-col>
    </mdb-card-body>
</template>

<script>
    import WebCam from "vue-web-cam/src/webcam.vue";

    export default {
        name: "Camera",
        components: {WebCam},
        data() {
            return {
                photo: null,
                cameras: [],
                deviceId: ""
            };
        },
        methods: {
            captureVideo($event) {
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
    video::-webkit-media-controls-play-button,
    video::-webkit-media-controls-pausebutton,
    video::-webkit-media-controls-volume-slider,
    video::-webkit-media-controls-timeline,
    video::-webkit-media-controls-current-time-display,
    video::-webkit-media-controls-mute-button {
        display: none;
    }
</style>
