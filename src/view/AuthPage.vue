<template>
    <div class="auth-page">
        <div class="auth-main-container">

            <div class="type-switcher">
                <button @click="switchType(true)" :class="{ underline: !isSignIn, }">Sign-in</button>
                <button @click="switchType(false)" :class="{ underline: isSignIn, }">Sign-up</button>
            </div>

            <form class="input-form" @submit.prevent="handleSubmit">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" autocomplete="email" v-model="emailRef">

                <label v-if="!isSignIn" for="username">Username</label>
                <input v-if="!isSignIn" type="text" name="username" id="username" autocomplete="username" v-model="usernameRef">

                <label for="password">Password</label>
                <input type="password" name="password" id="password" :autocomplete="isSignIn ? 'current-password' : 'new-password'" v-model="passwordRef">

                <span v-if="isSignIn">Forget Your password?<p>Click Here</p></span>

                <label v-if="!isSignIn" for="confirm-password">Comfirm Password</label>
                <input v-if="!isSignIn" type="password" name="confirm-password" id="confirm-password" autocomplete="new-password" v-model="confirmPasswordRef">

                <button>{{ isSignIn? "Sign-in" : "Sign-up" }}</button>
            </form>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'vue-router';

const { login, signup } = useAuth();

const router = useRouter();

const isSignIn = ref(true);

//For form
const usernameRef = ref('');
const passwordRef = ref('');
const emailRef = ref('');
const confirmPasswordRef = ref('');


const switchType = (type: boolean) => {
    if (type) {
        isSignIn.value = true;
    }

    else if (!type) {
        isSignIn.value = false;
    }
}

const handleSubmit = async () => {
    if (isSignIn.value) {
        const result = await login({
            email: emailRef.value,
            password: passwordRef.value
        });

        if ('error' in result) {
            alert(result.error);
        }
        else {
            router.push('/');
        }
    }

    else if (!isSignIn.value) {
        const result = await signup({
            email: emailRef.value,
            username: usernameRef.value,
            password: passwordRef.value
        })

        if ('error' in result) {
            alert(result.error);
        }
        else {
            usernameRef.value = '';
            emailRef.value = '';
            passwordRef.value = '';
            confirmPasswordRef.value = '';
            alert(result.message)
            switchType(true);
        }
    }
}
</script>

<style lang="scss">
.auth-page {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;
}

.auth-main-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 500px;
    height: 500px;
    padding: 0px 0px 20px 0px;
    
    background-color: $sec-text;
}

.type-switcher {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;

    //Both Sign-in and Sig-nup Button
    > button {
        flex: 1;

        height: 50px;

        border: none;
        background-color: $sec-text;
    
        color: $accent;

        cursor: pointer;
    }

    //Just for The middle line
    > button:nth-child(1) {
        border-right: 2px solid $accent;
    }

    > button.underline {
        border-bottom: 2px solid $accent;
    }
}


.input-form {
    @include flex-column-center;

    width: 100%;
    margin-top: 20px;

    > label {
        margin-bottom: 10px;

        color: $accent;
    }

    > input {
        width: 300px;
        height: 30px;
        margin-bottom: 20px;

        background-color: $accent;
        border: none;

        color: $sec-text;
        text-align: center;

        
    }
    //Prevent Focus
    > input:focus {
        outline: none;
    }

    //Forget Password Element
    > span {
        display: flex;
        flex-direction: row;
        gap: 10px;

        margin-bottom: 20px;

        color: $accent;

        //Click Here Text
        > p {
            margin: 0px;

            color: $background;

            cursor: pointer;
        }

    }

    //Submit Button
    > button {
        width: 100px;
        height: 50px;
        margin-top: 30px;

        background-color: $main-text;
        border: none;

        color: $accent;
    }
}
</style>