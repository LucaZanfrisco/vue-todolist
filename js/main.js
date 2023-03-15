"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      newText: "",
      todoInfo: {
        done: false,
        text: "",
      },
      todoList: [],
    };
  },
  methods: {
    done(index) {
      if (this.todoList[index].done === false) {
        this.todoList[index].done = true;
        console.log("fatto");
      } else if (this.todoList[index].done === true) {
        this.todoList[index].done === false;
        console.log("da fare");
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      if (this.newText.trim() !== "") {
        let { text, done } = this.todoInfo;
        text = this.newText;
        this.todoList.push({
          text,
          done,
        });
        this.newText = "";
      }
    },
  },
}).mount("#app");
