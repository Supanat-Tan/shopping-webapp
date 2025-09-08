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
            v-bind:key="item._id" 
            :productId="item._id"
            :msg="item.productName"
            :amount="item.soldAmount"
            />
          </div>

        </div>

        <div class="category-item-container">
          <h3>Category (Currently in development)</h3>

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
import type { CategoryItemType, ProductListType } from '@/types/type';
import CategoryItem from '@/components/CategoryItem.vue';
import { useI18n } from '@/i18n/i18n';
import { computed, onMounted, ref } from 'vue';

const { language } = useI18n();

let popularProduct = ref<ProductListType>([]);
const popularItems = computed(() => popularProduct.value)

onMounted(async () => {
  const response = await fetch(`https://supanat-main-backend.onrender.com/api/product?soldAmount=most`);
  popularProduct.value = await response.json();
})

//Testing
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
