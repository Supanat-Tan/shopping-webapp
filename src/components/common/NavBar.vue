<template>
    <nav class="navbar">
        <ul>
            <li>{{ data }} 1</li>
            <li>{{ data }} 2</li>
            <li>{{ data }} 3</li>
        </ul>

        <div class="bottom-container-with-search">
            <div>Logo</div>

            <div class="form-wrapper">
                <form action="" class="search-form">
                    <input type="text" name="" id="">
                    <button>Search</button>
                </form>
            </div>
            
            <div>Cart</div>
        </div>
        
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    props: {
        data: String,
    }
});
</script>

<style lang="scss">
.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 75px;

    background-color: green;

    color: white;
    font-weight: bolder;

    ul {
        display: flex;
        flex-direction: row;

        padding: 10px;
        margin: 0px;

        list-style-type: none;
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
            background-color: white;
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
            border: none;
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