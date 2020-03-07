<template>
    <form>
        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>
        <h2 class="h5 flex-center my-0">Wykonane badania krwi:</h2>

        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
            <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
        </div>

        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
            <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
        </div>

        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
            <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
        </div>

        <mdb-input type="checkbox" id="checkbox1" name="check1" v-model="check1" label="Material unchecked" />

        <router-link tag="mdb-btn" color="light-blue" to="/form/c">Dalej</router-link>
    </form>
</template>

<script>
    import Form from "./Form";
    export default {
        name: "ExaminationInterview",
        components: {Form}
    }
</script>

<style scoped>

</style>
