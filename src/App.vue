<template>
  <RouterView />
  <LoadingPage v-if="isLoading" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { apiCall } from './services/userServices';
import { useUserStore } from './stores/userStore';
import LoadingPage from './view/LoadingPage.vue';
import { storeToRefs } from 'pinia';
import { useLoadingStore } from './stores/loading';

//User store
const userStore = useUserStore();

//loading store
const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore)


onMounted( async() => {
  checkUser();
});

const checkUser = async () => {
    try {
      loadingStore.setLoading(true);
      const response = await apiCall('check-user');

      if (response) {
        const json = await response.json();

        if (json.error) {
          console.log(json.error);
          userStore.setUser(null);
          loadingStore.setLoading(false);
          return
        }

        userStore.setUser(json);
        loadingStore.setLoading(false);
      }

    }

    catch(err) {
        console.log(err);
    }
}

</script>

<style lang="scss">

</style>
