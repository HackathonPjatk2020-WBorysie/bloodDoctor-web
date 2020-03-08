<template>
    <div class="mt-1 mb-2">
        <label>{{ label }}:</label>
        <div class="d-flex align-items-center">
            <select class="browser-default custom-select" :class="{'mr-3': desc !== ''}" v-model.number="value" @change="setValue()">
                <option value="-1">Poniżej normy</option>
                <option value="0" selected>W normie</option>
                <option value="1">Powyżej normy</option>
            </select>
            <mdb-tooltip trigger="hover" :options="{placement: 'right'}" v-if="desc !== ''">
                <div slot="tip">
                    <div>{{ desc }}</div>
                </div>
                <div slot="reference" class="d-flex justify-content-center align-items-center">
                    <i class="fas fa-question-circle h3 m-0" />
                </div>
            </mdb-tooltip>
        </div>
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
            },
            desc: {
                type: String,
                default: ""
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
