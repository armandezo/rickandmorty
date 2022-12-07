<template>
    <img class="logo" src="@assets/logo.png" alt="" />
    <div class="container-search">
        <input
            type="text"
            v-model="searchValue"
            @keyup="filterSearch"
            maxlength="20"
        />
        <select v-model="changeValue" @change="filterSearch">
            <option value="">all</option>
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
        </select>
    </div>

    <template v-if="searchState">
        <div class="container-result">
            <div class="container-grid">
                <div v-for="item in dataObj?.data" :key="item.id" class="box">
                    <div class="box-content">
                        <img class="box-image" :src="item.image" alt="avatar" />
                        <div class="right-box">
                            <div class="right-box-container">
                                <div class="title-char">
                                    {{ item.name }}
                                </div>
                                <div class="detail-char">
                                    <p class="detail-char-text">
                                        {{ item.status }} - {{ item.species }}
                                    </p>
                                    <p class="detail-char-text">
                                        Last Known Location:
                                        {{ item.location["name"] }}
                                    </p>
                                    <p class="detail-char-text">Story train</p>
                                    <p class="detail-char-text">
                                        First seen in episode:
                                    </p>
                                    <p class="detail-char-text">
                                        {{ item.episode[0] }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="errors">
            <h2 class="row-span-2">Sin Resultados</h2>
            <h2 class="row-span-2" v-if="searchValue.length < 4">
                Minimo de caracteres 4
            </h2>
        </div>
    </template>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RickAndMortyApp from "@application/RickAndMortyApp";
import { IResponseApi } from "@interfaces/IResponseApi";

const dataObj = ref<IResponseApi>();
const searchValue = ref("");
const changeValue = ref("");
const searchState = ref(false);

const filterSearch = async () => {
    const validations =
        searchValue.value.length >= 4 && searchValue.value.length <= 20
            ? true
            : false;

    validations
        ? ((dataObj.value = await new RickAndMortyApp().getData(
              searchValue.value,
              changeValue.value
          )),
          dataObj.value.success
              ? (searchState.value = true)
              : (searchState.value = false))
        : ((dataObj.value = undefined), (searchState.value = false));
};
</script>
