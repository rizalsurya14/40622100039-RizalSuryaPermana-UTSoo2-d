<template>
  <div class="entry-data-mahasiswa">
    <h1>Entry Data Mahasiswa</h1>
  <v-container>
    <v-row>
      <v-text-field clearable label="NPM" v-model="mhs.npm" variant="outlined"></v-text-field>
    </v-row>
    <v-row>
      <v-text-field label="Nama" v-model="mhs.nama" variant="outlined"></v-text-field>
    </v-row>
    <v-row>
      <v-text-field label="IPK" v-model="mhs.ipk" variant="outlined"></v-text-field>
    </v-row>
    <v-row>
      <v-btn color="blue" @click="submitMahasiswa">Submit</v-btn>
    </v-row>
  </v-container>
</div>
</template>

<script lang="ts">
import { Mahasiswa } from '@/model/Mahasiswa'
export default {
  data() {
    return {
      mhs: new Mahasiswa('', '', 0)
    }
  },
  methods: {
    submitMahasiswa() {
      if (this.mhs.ipk <= 4) {
        alert('Data Mahasiswa ' + this.mhs.nama + ' Berhasil disimpan')
        this.mhs = new Mahasiswa('', '', 0)
      } else {
        alert('IPK tidak boleh dari 4')
        this.mhs = new Mahasiswa('', '', 0)
      }
    }
  }
}
</script>
<style scoped>
.entry-data-mahasiswa {
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
