<template>
  <div class="box">
    <h1>Selamat Datang di Aplikasi</h1>
    <p>Aplikasi ini dibuat oleh:</p>
    <p>NPM: 4062210039</p>
    <p>Nama: Rizal Surya Permana</p>
      
    
  </div>
</template>
<style>
    .box {
      width: 80%;        /* Set width to 80% of the viewport width for some spacing on the sides */
      max-width: 500px; /* Maximum width of the box could be 1000px */
      height: auto;      /* Height adjusts to content */
      min-height: 250px; /* Minimum height of the box */
      border: 1px solid black;
      margin-top: 100px;
      padding: 50px;
      margin: 20auto;    /* Top and bottom margins 0, and auto margins on the sides for centering */
      text-align: center;
      box-sizing: border-box; /* Include padding and border in the element's size */
      position: absolute; /* Position the box absolutely relative to the nearest positioned ancestor */
      top: 0;             /* Align the top edge of the box with the top of the viewport */
      left: 50%;          /* Set left to 50% of the viewport */
      transform: translateX(-50%); /* Move box back to the left by 50% of its own width to center it */
    }
</style>

