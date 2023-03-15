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
      todoList: [
        {
          done: false,
          text: "Latte",
        },
        {
          done: false,
          text: "Pane",
        },
        {
          done: false,
          text: "uova",
        },
        {
          done: false,
          text: "carne",
        },
        {
          done: false,
          text: "Tanto alcol",
        },
      ],
    };
  },
  methods: {
    done(index) {
      if (this.todoList[index].done === false) {
        this.todoList[index].done = true;
        console.log('fatto');
      } else if (this.todoList[index].done === true) {
        this.todoList[index].done === false; 
        console.log('da fare');
      }
     
    },
  },
}).mount("#app");
