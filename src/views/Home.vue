<template>
    <mdb-container class="my-5">

        <mdb-row>
            <mdb-col col="col-11 col-lg-5" class="mx-auto">
                <mdb-card class="p-4">
                    <mdb-card-body>
                        <home-form></home-form>
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
