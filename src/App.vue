<template>
    <div id="app">
        <mdb-container>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </mdb-container>
    </div>
</template>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

    $image-path: '~@/../mdb/mdbvue/img';
    @import '~@/../mdb/mdbvue/scss/mdb-free.scss';

    body {
        background-color: rgba(128, 176, 210, 0.71);
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity .3s ease-in;
    }

    .fade-leave {
    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity .3s ease-in;
        animation: slide-out .3s ease-in-out forwards;
    }
    @keyframes slide-out {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(30px);
      }
    }

</style>
