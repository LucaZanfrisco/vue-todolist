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
    // Metodo che aggiunge la classe todoDone se l'elemento della lista è stato gia fatto
    done(index) {
      if (this.todoList[index].done === false) {
        this.todoList[index].done = true;
      } else {
        this.todoList[index].done = false;
      }
    },
    // Metodo che rimuove l'elemento quando si clicca sull'icona del cestino
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    // Metodo che aggiunge all'array gli oggetti in base a quello che scrivono nell'input per aggiungere ToDo
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
