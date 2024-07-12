<template>
    <div class="home-page">
      <img src="../assets/dgk.png" alt="DGK Image" class="welcome-image">
      <h1>Xoş Gəlmisiniz</h1>
      <div class="button-container">
        <router-link to="/dashboard" tag="button" class="btn">Dashboarda gedin</router-link>
        <router-link to="/statistics" tag="button" class="btn">Statistikaya gedin</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home-page {
    text-align: center; 
    padding-top: 20px; 
  }
  
  .button-container {
    margin-top: 20px; 
  }
  
  .btn {
    margin: 0 10px; 
    padding: 10px 20px; 
    font-size: 16px; 
    text-decoration: none; 
    cursor: pointer; 
    border: none; 
    background-color: #007bff; 
    color: #fff;
  }
  
  .btn:hover {
    background-color: #0056b3; 
  }
  </style>
  