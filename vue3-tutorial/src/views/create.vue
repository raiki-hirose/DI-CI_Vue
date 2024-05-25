<script setup lang="ts">
import CommonButton from '../components/CommonButton.vue'
import { ref, computed } from 'vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'
import router from '@/router';

const todoStore = useTodoStore()
const { todoList, currentId } = storeToRefs(todoStore)

const inputTitle = ref('')
const inputBody = ref('')

const isDisabledAddButton = computed(() => !inputTitle.value || !inputBody.value)

function addTodo() {
  if (!inputTitle.value || !inputBody.value) {
    return
  }

  todoList.value.push({
    id: currentId.value,
    title: inputTitle.value,
    body: inputBody.value,
    completed: false,
  })

  todoStore.incrementId()
  router.push({ name: 'home'})
}
</script>

<template>
  <article>
    <h2>新しいTodoを追加</h2>
    <div>
      <h3>タイトル：</h3>
      <input id="inputTitle" type="text" v-model="inputTitle" autocomplete="off" placeholder="タイトルを入力" />
    </div>
    <div>
      <h3>内容：</h3>
      <input id="inputBody" type="text" v-model="inputBody" autocomplete="off" placeholder="内容を入力" />
    </div>
    <CommonButton
      text="追加する"
      bg-color="#007FB1"
      :disabled="isDisabledAddButton"
      @click-button="addTodo"
    />
    <RouterLink id="homeLink" :to="{ name: 'home'}">→ 一覧に戻る</RouterLink>
  </article>
</template>

<style scoped>
article {
  width: fit-content;
  margin: 0 auto;
  padding: 42px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 42px;
}

input {
  margin-top: 4px;
  padding-left: 8px;
  width: 320px;
  height: 30px;
}

button {
  color: white;
  align-self: center;
}

#homeLink {
  margin-top: 24px;
  color: #23AC0E;
  font-weight: bold;
  align-self: center;
}

#homeLink:hover {
  opacity: 0.7;
}
</style>