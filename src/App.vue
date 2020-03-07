<template>
  <div id="app">
    <mdb-container>
      <router-view/>
    </mdb-container>
  </div>
</template>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  $image-path: '~@/../mdb/mdbvue/img';
  @import '~@/../mdb/mdbvue/scss/mdb-free.scss';

  body {
    background-color: rgba(128,176,210,0.71);
  }

</style>
