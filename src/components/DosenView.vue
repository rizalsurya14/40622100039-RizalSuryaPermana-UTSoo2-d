<template>
  <v-container>
      <div class="outer-box">
          <h2>Entry Data Dosen</h2><br>
      <v-row>
          <v-text-field label="NIDN" variant="outlined" v-model="dsen.nidn"></v-text-field>
      </v-row>
      <v-row>
          <v-text-field label="Nama" variant="outlined" v-model="dsen.nama"></v-text-field>
      </v-row>
      <v-row>
          <v-btn color="blue" @click="submitDosen">Submit</v-btn>
      </v-row>
      </div>
  </v-container>
</template>

<script lang="ts">
import { dosen } from '@/model/Dosen';

export default {
  data() {
      return {
          dsen: new dosen(0, '') // Pastikan konstruktor Dosen sesuai dengan ini
      };
  },
  methods: {
      submitDosen() {
          if (!this.dsen.nidn || !this.dsen.nama) {
              alert('Mohon isi semua data sebelum mengirim.');
              return; // Stops further execution if any field is empty
          }
          // If all conditions are met
          alert(`Data Dosen ${this.dsen.nama} dengan NIDN ${this.dsen.nidn} berhasil disimpan`);
          this.dsen = new dosen(0, ''); // Reset form
      }
  }
}
</script>
<style scoped>
.outer-box {
  /* Add your styling here */
  padding: 20px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
