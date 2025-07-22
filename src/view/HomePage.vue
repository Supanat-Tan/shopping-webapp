<template>
  <NavBar/>
  <SideBar />
    <div class="home-container">
      
      <div class="middle-container">
        <h2>Welcome to hobby store</h2>
        <p>What kind of product are you interested in?</p>

        <div>
          <div v-for="type in categories" :key="type.id">{{ type.category }}</div>
        </div>
      </div>

    </div>
    
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

//for testing
const categories = [
  {
    category: 'Model',
    id: 1
  },
  {
    category: 'Tools',
    id: 2
  },
  {
    category: 'Paint',
    id: 3
  },
  {
    category: 'Misc',
    id: 4
  },
]

const users = ref<User[]>([])

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (response.ok) {
    const data: User[] = await response.json();
    users.value = data
  }

})

</script>

<style lang="scss">

.home-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 75px;
  left: 0px;

  width: 100%;
}

.middle-container {
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 100%;

  background-color: var(--background);

  //Welcome text
  > h2 {
    margin: 0px;

    text-align: center;
    color: var(--main-text);
    font-size: 3rem;
  }

  //Secondary text
  > p {
    margin: 0px 0px 20px 0px;

    text-align: center;
    color: var(--sec-text);
    font-size: 1.5rem;
  }

  // Category Container
  > div {
    display: grid;
    grid-template-columns: 200px 200px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    //Each category div
    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 200px;
      height: 200px;

      border: 2px solid var(--sec-text);
      border-radius: 50px;

      color: var(--main-text);
      font-weight: bold;
      font-size: 2rem;

      transition: background-color 0.3s ease;
      cursor: pointer;
    }
    > div:hover {
      background-color: var(--accent);
    }
  }
}

</style>