<template>
    <mdb-container class="my-5">

        <mdb-row>
            <mdb-col col="col-11 col-lg-4" class="mx-auto">
                <mdb-card>
                    <mdb-card-body>
                        <transition name="fade" mode="out-in">
                            <home-form></home-form>
                        </transition>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>

    </mdb-container>
</template>

<script>
    import HomeForm from "@/components/home/HomeForm";

    export default {
        name: 'Home',
        components: {HomeForm}
    }
</script>
