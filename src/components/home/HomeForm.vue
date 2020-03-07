<template>
    <form @submit.prevent="start()">

        <h1 class="flex-center my-0">BloodDoctor.io</h1>
        <hr/>

        <mdb-input type="text" label="Twoje imie" outline v-model="name" :class="{'shake': shake}"/>

        <div class="text-center mt-3">
            <mdb-btn color="light-blue" type="submit">
                Zaczynajmy
                <i class="ml-2 fas fa-chevron-right"></i>
            </mdb-btn>
        </div>

<!--        <hr/>-->
<!--        <div class="d-flex justify-content-between">-->
<!--            <a href="#" class="text-decoration-none">-->
<!--                Opcjonalna sekcja dodatkowa-->
<!--            </a>-->
<!--            <a href="#" class="text-decoration-none">-->
<!--                Dodatkowy link-->
<!--            </a>-->
<!--        </div>-->

    </form>
</template>

<script>
    export default {
        name: "HomeForm",
        data(){
            return {
                name: "",
                shake: false
            }
        },
        methods: {
            shakeInput(){
                this.shake = true;
                setTimeout(()=>{
                    this.shake = false;
                }, 400);
            },
            start(){
                if(this.name !== ""){
                    this.$store.state.name = this.name;
                    this.$router.push('/interview')
                }
                else {
                    this.shakeInput();
                }
            }
        }
    }
</script>

<style scoped>
    .shake {
        -webkit-box-shadow: 0px 0px 12px 2px rgba(184,14,14,0.8);
        -moz-box-shadow: 0px 0px 12px 2px rgba(184,14,14,0.8);
        box-shadow: 0px 0px 12px 2px rgba(184,14,14,0.8);
        animation: shake .2s ease-out;
        animation-iteration-count: 2;
    }
    @keyframes shake {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(15px);
        }
        50% {
            transform: translateX(0);
        }
        75% {
            transform: translateX(-15px);
        }
    }
</style>
