<template>
    <nav class="navbar">
        <ul>
            <div>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
            <div>
                <li>Language</li>
            </div>
        </ul>

        <div class="bottom-container-with-search">
            <div>Logo</div>

            <div class="form-wrapper">
                <form action="" class="search-form" @submit.prevent="handleSubmit">
                    <input type="text" name="" id="" v-model="searchInfo">
                    <button>Search</button>
                </form>
            </div>
            
            <div>{{ searchInfo }}</div>
        </div>
        
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const searchInfo = ref('')

const handleSubmit = async () => {
    console.log(searchInfo.value)
}
</script>

<style lang="scss">
.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 20;

    width: 100%;
    height: 75px;

    background-color: var(--sec-text);

    color: var(--accent);
    font-weight: bolder;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;

        width: 800px;
        padding: 5px;
        margin: 0px;

        list-style-type: none;

        //RouterLink Container 
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
        // RouterLink
        > div > a {
            text-decoration: none;
            color: var(--accent);
        }
    }

    .bottom-container-with-search {
        flex: 1;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;

        width: 100%;

        .form-wrapper {
            width: 800px;
            background-color: var(--accent);
        }
    }

    .search-form {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 30px;

        background-color: white;

        //Search Bar
        > input {
            flex: 1;
            border: none;
            background-color: var(--accent);

            color: var(--main-text);
        }
        //Prevent focus border
        > input:focus {
            outline: none;
        }

        //Search Button
        > button {
            border: none;
        }
    }
}
</style>