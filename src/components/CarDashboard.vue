<template>
  <div class="car-dashboard">
    <h1>Dashboard</h1>
    <table>
      <thead>
        <tr>
          <th>Nömrə</th>
          <th>Çəkilmə vaxtı</th>
          <th>Region</th>
          <th>İçəridədir</th>
          <th>Post Nömrəsi</th>
          <th>Nömrə Şəkli</th>
          <th>Kamaz Şəkli</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in mockData" :key="index">
          <td>{{ data.plateText }}</td>
          <td>{{ data.detectionTime }}</td>
          <td>{{ data.region }}</td>
          <td>
            {{ data.isEntrance ? 'Hə' : 'Yox' }}
          </td>
          <td>{{ data.postId }}</td>
          <td>
            <img 
              :src="data.plateImage" 
              :class="getImageClass(index, 'plate')" 
              @click="onImageClick(index, 'plate')" 
            />
          </td>
          <td>
            <img 
              :src="data.truckImage" 
              :class="getImageClass(index, 'truck')" 
              @click="onImageClick(index, 'truck')" 
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="enlargedImage" class="modal" @click="closeModal">
    </div>
  </div>
</template>

<script>
import { mockData } from '../data/mockData';

export default {
  name: 'CarDashboard',
  data() {
    return {
      enlargedImage: null,
      enlargedImageIndex: null,
      enlargedImageType: null,
      mockData
    };
  },
  methods: {
    getImageClass(index, type) {
      return {
        'fullWidthImage': this.enlargedImageIndex === index && this.enlargedImageType === type,
        'hidden': this.enlargedImageIndex === index && this.enlargedImageType !== null
      };
    },
    onImageClick(index, type) {
      if (this.enlargedImageIndex === index && this.enlargedImageType === type) {
        this.enlargedImageIndex = null;
        this.enlargedImageType = null;
        this.enlargedImage = null;
      } else {
        this.enlargedImageIndex = index;
        this.enlargedImageType = type;
        this.enlargedImage = type === 'plate' ? this.mockData[index].plateImage : this.mockData[index].truckImage;
      }
    },
    closeModal() {
      this.enlargedImageIndex = null;
      this.enlargedImageType = null;
      this.enlargedImage = null;
    }
  }
}
</script>

<style src="../styles/CarDashboard.css"></style>
