<template>
    <div class="mt-1 mb-2">
        <label>{{ label }}:</label>
        <select class="browser-default custom-select" v-model.number="value" @change="setValue()">
            <option value="-1">Poniżej normy</option>
            <option value="0" selected>W normie</option>
            <option value="1">Powyżej normy</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "okMeter",
        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: Number,
                default: 0
            }
        },
        methods: {
            setValue(){
                this.$emit('input', this.value);
            }
        }
    }
</script>

<style scoped>

</style>
