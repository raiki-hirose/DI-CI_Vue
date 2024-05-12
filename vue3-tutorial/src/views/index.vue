<script setup lang="ts">
import CommonButton from '../components/CommonButton.vue'
import { computed, ref } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const currentId = ref(1)

const inputText = ref('')

const todoList = ref<Todo[]>([] as Todo[])

const isShowCompletedTodo = ref(true)

const showingTodoList = computed(() =>
  isShowCompletedTodo.value
  ? todoList.value
  : todoList.value.filter(todo => todo.completed === false)
  
)


function addTodo() {
  if (!inputText.value) {
    return
  }

  todoList.value.push({
    id: currentId.value,
    text: inputText.value,
    completed: false,
  })

  currentId.value++
  inputText.value = ''
}

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
    <div id="addTodo">
      <input type="text" v-model="inputText" placeholder="Todoを入力" />
      <CommonButton text="追加" color="skyblue" @click-button="addTodo" />
    </div>
    <section id="todoList">
      <template v-if="showingTodoList.length">
        <table border="1">
          <tr>
            <th>id</th>
            <th>todo</th>
            <th>状態</th>
            <th>完了</th>
            <th>削除</th>
          </tr>
          <tr v-for="todo in showingTodoList" :key="todo.id">
            <td>{{ todo.id }}</td>
            <td>{{ todo.text }}</td>
            <td :class="todo.completed ? false : 'uncompleted'">
              {{ todo.completed ? '完了' : '未完了' }}
            </td>
            <td>
              <CommonButton text="完了" color="yellowgreen" @click-button="completeTodo(todo.id)" />
            </td>
            <td>
              <CommonButton text="削除" color="pink" @click-button="deleteTodo(todo.id)" />
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

#addTodo input {
  width: 300px;
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
  min-width: 80px;
}

.uncompleted {
  font-weight: bold;
  color: red;
}

#congratulations {
  padding: 24px;
  font-weight: bold;
  font-size: 24px;
  color: #A52175;
}

#checkboxArea {
  margin-top: 24px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
}

#checkboxArea input {
  height: 18px;
  width: 18px;
}
</style>