<!-- Hasil 1 -->

<!-- <template>
  <div>
    <h2>Image Upload</h2>
    <input type="file" @change="handleImageChange" />
    <input type="text" v-model="itemName" required />
    <button @click="uploadImage">Upload Image</button>
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { getDownloadURL, uploadBytes, ref as storageRef } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { storage, db } from '@/main';

export default {
  data() {
    return {
      selectedImage: null,
      imageUrl: null,
      itemName: '',
    };
  },
  methods: {
    handleImageChange(event) {
      this.selectedImage = event.target.files[0];
    },
    async uploadImage() {
      if (!this.selectedImage) {
        console.error('No image selected.');
        return;
      }

      const storagePath = 'images/' + this.selectedImage.name;
      const imageRef = storageRef(storage, storagePath);

      try {
        // Upload image to Firebase Storage
        await uploadBytes(imageRef, this.selectedImage);

        // Get the download URL
        const url = await getDownloadURL(imageRef);
        this.imageUrl = url;
        console.log('Image uploaded successfully:', url);

        // Save image URL to Firestore
        const imagesCollection = collection(db, 'TestingCreate');
        await addDoc(imagesCollection, { imageUrl: url, name: this.itemName, });
        console.log('Image URL saved to Firestore.');

        this.itemName = '';
        this.handleImageChange = null;
        // this.imageUrl = '';
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
  },
};
</script> -->

<!-- Hasil 2 -->

<!-- <template>
  <div>
    <h2>Multiple Image Upload</h2>
    <input type="file" @change="handleImageChange" multiple />
    <button @click="uploadImages">Upload Images</button>
    <div v-for="(url, index) in imageUrls" :key="index">
      <img :src="url" alt="Uploaded Image" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getDownloadURL, uploadBytes, ref as storageRef } from 'firebase/storage';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import { storage, db } from '@/main';

export default {
  data() {
    return {
      selectedImages: null,
      imageUrls: [],
    };
  },
  methods: {
    handleImageChange(event) {
      this.selectedImages = event.target.files;
    },
    async uploadImages() {
      if (!this.selectedImages || this.selectedImages.length === 0) {
        console.error('No images selected.');
        return;
      }

      for (let i = 0; i < this.selectedImages.length; i++) {
        const image = this.selectedImages[i];
        const storagePath = 'images/' + image.name + '_' + Math.floor(Math.random() * 100000) + 1;
        const imageRef = storageRef(storage, storagePath);
        const customDocumentId = `customId_${i + 1}`;

        try {
          // Upload image to Firebase Storage
          await uploadBytes(imageRef, image);

          // Get the download URL
          const url = await getDownloadURL(imageRef);
          this.imageUrls.push(url);
          console.log(`Image ${i + 1} uploaded successfully:`, url);

          // Save image URL to Firestore
          // const imagesCollection = collection(db, 'TestingCreate');
          // await addDoc(imagesCollection, { document: storagePath, imageUrl: url });

          const imagesCollection = collection(db, 'TestingCreate');
          const customDocumentRef = doc(imagesCollection, customDocumentId);
          await setDoc(customDocumentRef, { imageUrl: url });
          console.log(`Image ${i + 1} URL saved to Firestore.`);
        } catch (error) {
          console.error(`Error uploading image ${i + 1}:`, error);
        }
      }
    },
  },
};
</script> -->

<!-- Hasil 3 -->

<!-- <template>
  <div>
    <h2>Multiple Image Upload</h2>
    <input type="file" @change="handleImageChange" multiple />
    <button @click="uploadImages">Upload Images</button>
    <div v-for="(url, index) in imageUrls" :key="index">
      <img :src="url" alt="Uploaded Image" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getDownloadURL, uploadBytes, ref as storageRef } from 'firebase/storage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { storage, db } from '@/main';

export default {
  data() {
    return {
      selectedImages: null,
      imageUrls: [],
    };
  },
  methods: {
    handleImageChange(event) {
      this.selectedImages = event.target.files;
    },
    async uploadImages() {
      if (!this.selectedImages || this.selectedImages.length === 0) {
        console.error('No images selected.');
        return;
      }

      for (let i = 0; i < this.selectedImages.length; i++) {
        const image = this.selectedImages[i];
        const customDocumentId = `customId_${i + 1}`;
        const storagePath = `images/${customDocumentId}/${image.name}`;
        const imageRef = storageRef(storage, storagePath);

        try {
          // Upload image to Firebase Storage
          await uploadBytes(imageRef, image);

          // Get the download URL
          const url = await getDownloadURL(imageRef);
          this.imageUrls.push(url);
          console.log(`Image ${i + 1} uploaded successfully:`, url);

          // Save image URL to Firestore with custom document ID
          const imagesCollection = collection(db, 'TestingCreate');
          const customDocumentRef = doc(imagesCollection, customDocumentId);
          await setDoc(customDocumentRef, { imageUrl: url });
          console.log(`Image ${i + 1} URL saved to Firestore with custom ID.`);
        } catch (error) {
          console.error(`Error uploading image ${i + 1}:`, error);
        }
      }
    },
  },
};
</script> -->

<!-- Hasil 4 -->
<!-- <template>
  <div>
    <h2>Multiple Image Upload</h2>
    <input type="file" @change="handleImageChange" multiple />
    <button @click="uploadImages">Upload Images</button>
    <div v-for="(url, index) in imageUrls" :key="index">
      <img :src="url" alt="Uploaded Image" />
    </div>
  </div>
</template> -->

<!-- <script>
import { ref } from 'vue';
import { getDownloadURL, uploadBytes, ref as storageRef } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { storage, db } from '@/main';

export default {
  data() {
    return {
      selectedImages: null,
      imageUrls: [],
      // customDocumentId: `yourCustomDocumentId_${incrementID + 1}`, // Replace with your desired custom ID
    };
  },
  methods: {
    handleImageChange(event) {
      this.selectedImages = event.target.files;
    },
    async uploadImages() {
      if (!this.selectedImages || this.selectedImages.length === 0) {
        console.error('No images selected.');
        return;
      }

      const customDocumentRef = collection(db, 'TestingCreate');
      
      for (let i = 0; i < this.selectedImages.length; i++) {
        const image = this.selectedImages[i];
        const storagePath = `images/${image.name + '_' + Math.floor(Math.random() * 100000) + 1}`;
        const imageRef = storageRef(storage, storagePath);
        // const customDocumentId = `customId_${i + 1}`; // Replace with dynamic generation logic
        
        try {
          // Upload image to Firebase Storage
          await uploadBytes(imageRef, image);

          // Get the download URL
          const url = await getDownloadURL(imageRef);
          this.imageUrls.push(url);
          console.log(`Image ${i + 1} uploaded successfully:`, url);
        } catch (error) {
          console.error(`Error uploading image ${i + 1}:`, error);
        }
      }

      // Save image URLs to Firestore with custom document ID
      await addDoc(customDocumentRef, {
        nomor: `${Math.floor(Math.random() * 100000) + 1}`,
        imageUrls: this.imageUrls,
      });

      console.log('Image URLs saved to Firestore with custom ID.');
    },
  },
};
</script> -->

<!-- Hasil 5 -->
<template>
  <div class="container">
      <div class="text-center">
        <img src="@/assets/pas.png" class="logo-pas">
      </div>
      <div class="card" style="margin-top: 30px;">
        <div class="card-header">
          <h3 class="tulisan-komplain" style="text-align: center; color: #B02120; padding: 10px; font-weight: bold; font-family: 'Kdam Thmor Pro', sans-serif;">Komplain Penilaian Petugas Kebersihan Team GA</h3>
        </div>
        <div class="card-body">
          <div class="row form-komplain" style="margin: 25px;">
            <div class="col-sm-6">
              <form @submit.prevent="uploadImages">
                <div class="mb-3">
                  <label for="Nama" class="form-label" style="font-family: 'Kdam Thmor Pro', sans-serif;">Nama</label>
                  <input type="text" v-model="nama" class="form-control" placeholder="Masukan Nama" required>
                </div>
                <div class="mb-3">
                  <label for="Departemen" class="form-label" style="font-family: 'Kdam Thmor Pro', sans-serif;">Departemen</label>
                  <input type="text" v-model="departemen" class="form-control" placeholder="Masukan Departemen" required>
                </div>
                <div class="mb-3">
                  <label for="Departemen" class="form-label" style="font-family: 'Kdam Thmor Pro', sans-serif;">Keterangan</label>
                  <textarea class="form-control" v-model="keterangan" placeholder="Masukan Keterangan" required></textarea>
                  <div id="emailHelp" class="form-text">Contoh : Untuk Area Lobby-Depan PT-Pos PB masih ada sampah botol minum</div>
                </div>
                <div class="mb-3">
                  <label for="foto" class="form-label" style="font-family: 'Kdam Thmor Pro', sans-serif;">Foto</label>
                  <input type="file" @change="handleImageChange" :key="fileInputKey" class="form-control" required multiple>
                </div>
                <button type="submit" class="btn btn-danger mt-3 simpan-komplain">Simpan</button>
              </form>
            </div>
            <div class="col-sm-6">
              <div class="row">
                  <div class="preview-tulisan">
                    <h4 class="text-center preview-foto">Preview Foto</h4>
                  </div>
                  <div class="text-center col m-2 tempat-foto" v-for="(url, index) in imageUrls" :key="index">
                    <img :src="url" class="foto-komplain" style="width: 200px;" alt="Uploaded Image" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

  .preview-foto {
    font-weight: bold;
    font-family: 'Kdam Thmor Pro', sans-serif;
    color: #B02120;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 600px) {
      .logo-pas {
        width: 300px;
        margin-top: 10px;
        margin-bottom: -5px;
      }

      .form-komplain {
        display: flex;
        flex-direction: column;
      }

      .simpan-komplain {
        width: 100%;
        margin-top: -3px;
      }

      .preview-foto {
        margin-top: 30px;
      }

      .tempat-foto {
        margin-top: 10x;
      }

      .foto-komplain {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 100px;
        margin: 0 auto;
      }

      .tulisan-komplain {
        font-size: 23px;
      }
  }
</style>

<script>
import { ref } from 'vue';
import { getDownloadURL, uploadBytes, ref as storageRef } from 'firebase/storage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { storage, db } from '@/main';

export default {
  data() {
    return {
      nama: "",
      departemen: "",
      keterangan: "",
      timestamp: "",
      imageUrls: [],
      selectedImages: null,
      fileInputKey: 0,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      this.timestamp = dateTime;
    },
    handleImageChange(event) {
      this.selectedImages = event.target.files;

      // Clear previous previews
      this.imageUrls = [];
      this.generateImagePreviews();
    },
    generateImagePreviews() {
      for (let i = 0; i < this.selectedImages.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrls.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedImages[i]);
      }
    },
    async uploadImages() {
      if (!this.selectedImages || this.selectedImages.length === 0) {
        console.error('No images selected.');
        return;
      }

      const customDocumentRef = collection(db, 'GAMonitoringKomplain');
      
      for (let i = 0; i < this.selectedImages.length; i++) {
        const image = this.selectedImages[i];
        const storagePath = `GAMonitoringKomplain/${image.name + '_' + Math.floor(Math.random() * 100000) + 1}`;
        const imageRef = storageRef(storage, storagePath);
        
        try {
          // Upload image to Firebase Storage
          await uploadBytes(imageRef, image);

          // Get the download URL
          const url = await getDownloadURL(imageRef);
          console.log(`Image ${i + 1} uploaded successfully:`, url);
        } catch (error) {
          console.error(`Error uploading image ${i + 1}:`, error);
        }
      }

      // Save image URLs to Firestore with custom document ID
      await addDoc(customDocumentRef, {
        nama: this.nama,
        departemen: this.departemen,
        keterangan: this.keterangan,
        tanggal: this.timestamp,
        foto: this.imageUrls,
      });

      // Save image URL to Firestore with custom document ID
      // const imagesCollection = collection(db, 'TestingCreate');
      // const customDocumentId = `${Math.floor(Math.random() * 100000) + 1}`;
      // const getData = doc(customDocumentRef, customDocumentId);
      // await setDoc(getData, { 
      //   nama: this.nama,
      //   departemen: this.departemen,
      //   keterangan: this.keterangan,
      //   tanggal: this.timestamp,
      //   foto: this.imageUrls,
      // });
      // console.log(`Image ${i + 1} URL saved to Firestore with custom ID.`);

      console.log('Image URLs saved to Firestore with custom ID.');
      
      this.nama = '';
      this.departemen = '';
      this.keterangan = '';
      this.timestamp = '';
      this.fileInputKey++;
      this.$swal({            
        icon: 'success',                   
        title: 'Berhasil',    
        text: 'Komplain penilaian kebersihan Team GA berhasil disimpan',                        
        timer: 2000,                                
        showConfirmButton: false
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    },
  },
};
</script>