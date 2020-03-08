<template>
    <mdb-card-body>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </mdb-card-body>
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
