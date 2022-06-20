<template>
  <div class="autherisation">
<!--    <div class="autherisation-errors" v-if="registrationError">-->
<!--      <h3>Неверно введены данные:</h3>-->
<!--      <ul>-->
<!--        <li v-for="error in registrationErrors" :key="error.error">{{ error.title }}</li>-->
<!--      </ul>-->
<!--    </div>-->
    <div class="autherisation__form-wrapper">
      <form action="http://localhost:8000" method="post" enctype="multipart/form-data" class="autherisation__form--first-step">
        <label for="email" class="autherisation__form-label">Email</label>
        <input type="email" id="email" v-model="user.email" class="autherisation__form-input" />

        <label for="password" class="autherisation__form-label">Пароль</label>
        <input type="password" id="password" v-model="user.password" class="autherisation__form-password" />
      </form>
      <q-btn class="autherisation__button-signin" @click="signIn">Продолжить</q-btn>
    </div>
    <div class="autherisation__redirect">
      <p class="autherisation__redirect--question">В первый раз здесь?</p>
      <a class="autherisation__redirect--link" @click="gotoRegistration">Зарегистрироваться</a>
    </div>
  </div>
</template>

<script lang="ts" src="./Autherisation.code.ts"/>

<style scoped lang="scss" src="./Autherisation.scss" />
