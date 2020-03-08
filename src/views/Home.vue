<template>
    <mdb-card-body>
        <home-form />
        <img src="../assets/img/bg-index.jpg" width="0" height="0" />
        <img src="../assets/img/bg-form.jpg" width="0" height="0" />
        <img src="../assets/img/bg-report.jpg" width="0" height="0" />
    </mdb-card-body>
</template>

<script>
    import HomeForm from "@/components/home/HomeForm";

    export default {
        name: 'Home',
        components: {HomeForm},
        beforeCreate() {
            document.body.className = 'page-index';
        }
    }
</script>
