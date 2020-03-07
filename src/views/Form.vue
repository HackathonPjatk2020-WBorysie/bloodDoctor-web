<template>
    <mdb-container class="my-5">

        <mdb-row>
            <mdb-col col="col-11 col-lg-6" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    export default {
        name: "Form",
        beforeCreate() {
            document.body.className = 'page-form';
        }
    }
</script>

<style scoped>

</style>
