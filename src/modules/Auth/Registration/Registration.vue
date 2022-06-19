<template>
  <div class="registration">
    <div class="registration-errors" v-if="registrationError">
      <h3>Неверно введены данные:</h3>
      <ul>
        <li v-for="error in registrationErrors" :key="error.error">{{ error.title }}</li>
      </ul>
    </div>
    <div class="registration__form-wrapper">
      <form action="http://localhost:8000" method="post" enctype="multipart/form-data" class="registration__form--first-step">
        <label for="email" class="registration__form-label">Email</label>
        <input type="email" id="email" v-model="user.email" class="registration__form-input" />

        <label for="password" class="registration__form-label">Пароль</label>
        <input type="password" id="password" v-model="user.password" class="registration__form-password" />

        <label for="confirm-password" class="registration__form-label">Подтвердите пароль</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" class="registration__form-password" />

        <label for="account-type" class="registration__form-label">Тип аккаунта</label>
        <select name="account-type" id="account-type" v-model="user.accountType" class="registration__form-select">
          <option value="notStated">Не выбран</option>
          <option value="teacher">Логопед</option>
          <option value="parent">Родитель</option>
          <option value="child">Ребенок</option>
        </select>
      </form>
<!--      <q-btn class="registration__button-goto-next" @click="gotoNext">Продолжить</q-btn>-->
    </div>

    <div class="registration__form-wrapper">
      <form action="http://localhost:8000" method="post" enctype="multipart/form-data" class="registration__form--second-step">
        <label for="name" class="registration__form-label">Имя</label>
        <input type="text" id="name" v-model="userData.name" class="registration__form-input" />

        <label for="surname" class="registration__form-label">Фамилия</label>
        <input type="text" id="surname" v-model="userData.surname" class="registration__form-input" />

        <label for="patronymic" class="registration__form-label">Отчество</label>
        <input type="text" id="patronymic" v-model="userData.patronymic" class="registration__form-input">

        <label for="birth-date" class="registration__form-label">Дата рождения</label>
        <input type="text" id="birth-date" v-model="userData.birthDate" class="registration__form-input" />

        <label for="sex" class="registration__form-label">Пол</label>
        <select name="sex" id="sex"  v-model="userData.sex" class="registration__form-select" >
          <option value="notStated">Не выбран</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </form>
<!--      <q-btn class="registration__button-goto-next" @click="gotoNext">Продолжить</q-btn>-->
    </div>

    <div class="registration__form-wrapper">
      <form action="http://localhost:8000" method="post" enctype="multipart/form-data" class="registration__form--third-step">
        <label for="passport-numbers" class="registration__form-label">Серия и номер паспорта</label>
        <input type="text" id="passport-numbers" v-model="userData.passport.passportNumbers" class="registration__form-input" />

        <label for="passport-organ" class="registration__form-label">Кем выдан</label>
        <input type="text" id="passport-organ" v-model="userData.passport.passportOrgan" class="registration__form-input" />

        <label for="issue-date" class="registration__form-label">Дата выдачи</label>
        <input type="text" id="issue-date" v-model="userData.passport.issueDate" class="registration__form-input" />

        <label for="subdivision-code" class="registration__form-label">Код подразделения</label>
        <input type="text" id="subdivision-code" v-model="userData.passport.subdivisionCode" class="registration__form-input" />
      </form>
<!--      <q-btn class="registration__button-goto-next" @click="gotoNext">Продолжить</q-btn>-->
    </div>

    <div class="registration__form-wrapper logoped">
      <form action="http://localhost:8000" method="post" enctype="multipart/form-data" class="registration__form--teacher-step">
        <label for="institution" class="registration__form-label">Образовательное учреждение</label>
        <input type="text" id="institution" v-model="teacherData.institution" class="registration__form-input" />

        <label for="qualification" class="registration__form-label">Квалификация</label>
        <input type="text" id="qualification" v-model="teacherData.qualification" class="registration__form-input" />

        <label for="diploma" class="registration__form-label">Диплом / лицензия</label>
        <input type="file" id="diploma" class="registration__form-file" @change="handleFileChange"/>
      </form>
<!--      <q-btn class="registration__button-goto-next" @click="gotoNext">Продолжить</q-btn>-->

    </div>

    <div class="registration__form-wrapper final-step">
      <form action="http://localhost:8000" method="post" enctype="multipart/form-data" class="registration__form--final-step">
        <p class="registration__form-label--checkbox"><input type="checkbox" id="personal-data-agreement" v-model="userAgreement" class="registration__form-checkbox" />Соглашение на обработку персональных данных</p>

        <p class="registration__form-label--checkbox"><input type="checkbox" id="user-agreement" v-model="personalDataAgreement" class="registration__form-checkbox" />Пользовательское соглашение</p>
      </form>
      <q-btn class="registration__button-submit" @click="submit">Зарегистрироваться</q-btn>
    </div>
  </div>
</template>

<script lang="ts" src="./Registration.code.ts" />

<style scoped lang="scss" src="./Registration.scss" />
