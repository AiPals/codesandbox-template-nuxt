<template>
  <div class="quiz-container">
    <h2>Alphabet Quiz</h2>
    <div v-if="!quizStarted">
      <button @click="startQuiz">Start Quiz</button>
    </div>
    <div v-else>
      <div v-if="questionNumber <= totalQuestions">
        <p>Question {{ questionNumber }} of {{ totalQuestions }}</p>
        <p>Listen to the sound and type the letter you hear:</p>
        <button @click="playSound(currentLetter)">Play Sound</button>
        <input
          v-model="userAnswer"
          type="text"
          maxlength="1"
          @keyup.enter="submitAnswer"
        />
        <button @click="submitAnswer">Submit</button>
        <p>{{ feedback }}</p>
      </div>
      <div v-else>
        <p>Your score: {{ score }} out of {{ totalQuestions }}</p>
        <button @click="restartQuiz">Retry Quiz</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AlphabetQuiz extends Vue {
  quizStarted = false
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  currentLetter = ''
  userAnswer = ''
  feedback = ''
  score = 0
  questionNumber = 0
  totalQuestions = 5

  startQuiz() {
    this.quizStarted = true
    this.score = 0
    this.questionNumber = 1
    this.nextQuestion()
  }

  nextQuestion() {
    this.userAnswer = ''
    this.feedback = ''
    const randomIndex = Math.floor(Math.random() * this.letters.length)
    this.currentLetter = this.letters[randomIndex]
  }

  playSound(letter: string) {
    const audio = new Audio(`/sounds/${letter}.mp3`)
    audio.play()
  }

  submitAnswer() {
    if (this.userAnswer.toUpperCase() === this.currentLetter) {
      this.feedback = 'Correct!'
      this.score++
    } else {
      this.feedback = `Incorrect. The correct letter was "${this.currentLetter}".`
    }
    if (this.questionNumber < this.totalQuestions) {
      this.questionNumber++
      setTimeout(() => {
        this.nextQuestion()
      }, 2000)
    } else {
      this.quizStarted = false
      this.questionNumber++
    }
  }

  restartQuiz() {
    this.quizStarted = false
    this.score = 0
    this.questionNumber = 0
  }
}
</script>

<style scoped>
.quiz-container {
  text-align: center;
  margin-top: 20px;
}
.quiz-container input {
  font-size: 18px;
  padding: 5px;
}
.quiz-container button {
  font-size: 18px;
  padding: 5px 10px;
  margin: 10px;
}
</style>