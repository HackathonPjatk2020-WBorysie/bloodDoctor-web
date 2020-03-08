<template>
    <mdb-container class="my-5">
        <mdb-row>
            <mdb-col col="col-11 col-lg-11" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <web-cam
                            width="400" height="300"
                            @cameras="captureVideo($event[0].deviceId)"
                            :device-id="deviceId"
                        />
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
                deviceId: ""
            };
        },
        methods: {
            captureVideo(deviceId){
                this.deviceId = deviceId;
            }
        },
        mounted() {
            console.log(WebCam);
        },
        beforeCreate() {
            document.body.className = 'page-report';
        }
    }
</script>

<style scoped>

</style>
