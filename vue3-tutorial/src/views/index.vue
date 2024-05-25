<script setup lang="ts">
import CommonButton from '../components/CommonButton.vue'
import { computed, ref } from 'vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { todoList } = storeToRefs(todoStore)

const isShowCompletedTodo = ref(true)

const showingTodoList = computed(() =>
  isShowCompletedTodo.value
  ? todoList.value
  : todoStore.uncompletedTodoList
)

function completeTodo(id: number) {
  const targetTodo = todoList.value.find(todo => todo.id === id)
  if (targetTodo) {
    targetTodo.completed = true
  }
}

function deleteTodo(id: number) {
  const newTodoList = todoList.value.filter(todo => todo.id !== id)
  todoList.value = newTodoList
}
</script>

<template>
  <article>
    <section id="todoList">
      <template v-if="showingTodoList.length">
        <table :border="1">
          <tr>
            <th>タイトル</th>
            <th>内容</th>
            <th>状態</th>
            <th>完了</th>
            <th>削除</th>
          </tr>
          <tr v-for="todo in showingTodoList" :key="todo.id">
            <td id="todoTitle">{{ todo.title }}</td>
            <td id="todoBody">{{ todo.body }}</td>
            <td :class="todo.completed ? false : 'uncompleted'">
              {{ todo.completed ? '完了' : '未完了' }}
            </td>
            <td>
              <CommonButton text="完了" bg-color="yellowgreen" @click-button="completeTodo(todo.id)" />
            </td>
            <td>
              <CommonButton text="削除" bg-color="pink" @click-button="deleteTodo(todo.id)" />
            </td>
          </tr>
        </table>
      </template>
      <p id="congratulations" v-else>
        Todos all completed🎉
      </p>
      <div id="checkboxArea">
        <input type="checkbox" name="toggleShowCompleted" v-model="isShowCompletedTodo" />
        <label for="toggleShowCompleted">完了済のTodoを表示する</label>
      </div>
    </section>
    <RouterLink id="createLink" :to="{ name: 'create'}">追加</RouterLink>
  </article>
</template>

<style scoped>
article {
  padding: 36px 12px;
}

#addTodo {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

#inputTitle {
  width: 200px;
  height: 30px;
}

#inputBody {
  width: 320px;
  height: 30px;
}

#todoList {
  margin: 42px auto;
  width: fit-content;
}

table {
  border: 1;
  border-collapse: collapse;
}

th, td {
  padding: 6px 12px;
  text-align: center;
  min-width: 60px;
}

#todoTitle {
  min-width: 120px;
}

#todoBody {
  min-width: 240px;
}

.uncompleted {
  font-weight: bold;
  color: crimson;
}

#congratulations {
  margin-top: 36px;
  font-weight: bold;
  font-size: 24px;
  color: #A52175;
}

#checkboxArea {
  margin-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

#checkboxArea input {
  height: 18px;
  width: 18px;
}

a#createLink{
  display: block;
  margin: 56px auto 0;
  width: fit-content;
  padding: 4px 16px;
  font-size: 16px;
  border: 1px solid #3261AB;
  border-width: 1px;
  border-radius: 4px;
  background-color: #007FB1;
  color: #F6F6F6;
}
a#createLink:hover{
  opacity: 0.5;
}
</style>