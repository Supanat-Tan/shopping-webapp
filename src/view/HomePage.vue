<template>
  <NavBar/>
    <div class="home-container">
      
      <div class="middle-container">

        <div class="banner-wrapper">
          <div>
            <button class="left"> &lt; </button>
            <img src="" alt="Image will be add soon">
            <button class="right"> &gt; </button>
          </div>

          <div>
            <div><img src="" alt="Image will be add soon"></div>
            <div><img src="" alt="Image will be add soon"></div>
          </div>

        </div>

        <div class="popular-item-container">
          <h3>{{ language.homepage.popularproduct }}</h3>

          <div>
            <PopularBox 
            v-for="item in popularItems" 
            v-bind:key="item.id" 
            :msg="item.content"
            />
          </div>

        </div>

        <div class="category-item-container">
          <h3>Category</h3>

          <div>
            <CategoryItem 
            v-for="item in categoryItems"
            :key="item.id"
            :msg="item.content"
            />
          </div>
          
        </div>

      </div>

    </div>
    
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import '@/styles/homepage.scss'
import PopularBox from '@/components/PopularBox.vue';
import type { CategoryItemType, PopularProducts } from '@/types/type';
import CategoryItem from '@/components/CategoryItem.vue';
import { useI18n } from '@/i18n/i18n';

const { language } = useI18n();

//For testing
const popularItems: PopularProducts[] = [
  {
    id: 1,
    content: "OO"
  },
  {
    id: 2,
    content: "Wing"
  },
  {
    id: 3,
    content: "Freedom"
  },
  {
    id: 4,
    content: "Sazabi"
  }
]

const categoryItems: CategoryItemType[] = [
  {
    id: 1,
    content: "Models"
  },
  {
    id: 2,
    content: "Tools"
  },
  {
    id: 3,
    content: "Paint"
  },
  {
    id: 4,
    content: "Utility"
  },
  {
    id: 5,
    content: "Coat"
  },
  {
    id: 6,
    content: "Cutter"
  },
  {
    id: 7,
    content: "Storage"
  },
  {
    id: 8,
    content: "Sticker"
  },
]

</script>
