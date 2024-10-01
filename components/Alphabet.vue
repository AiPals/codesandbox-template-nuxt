<template>
  <div class="alphabet-container">
    <h2>Alphabet Letters</h2>
    <div class="letters">
      <div
        v-for="letter in letters"
        :key="letter.char"
        class="letter"
        @click="playSound(letter.char)"
        :aria-label="`Letter ${letter.char}`"
        role="button"
        tabindex="0"
        @keyup.enter="playSound(letter.char)"
      >
        <div>{{ letter.char }}</div>
        <div class="phonetic">{{ letter.phonetic }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  data() {
    return {
      letters: [
        { char: 'A', phonetic: '/eɪ/' },
        { char: 'B', phonetic: '/biː/' },
        { char: 'C', phonetic: '/siː/' },
        { char: 'D', phonetic: '/diː/' },
        { char: 'E', phonetic: '/iː/' },
        { char: 'F', phonetic: '/ɛf/' },
        { char: 'G', phonetic: '/dʒiː/' },
        { char: 'H', phonetic: '/eɪtʃ/' },
        { char: 'I', phonetic: '/aɪ/' },
        { char: 'J', phonetic: '/dʒeɪ/' },
        { char: 'K', phonetic: '/keɪ/' },
        { char: 'L', phonetic: '/ɛl/' },
        { char: 'M', phonetic: '/ɛm/' },
        { char: 'N', phonetic: '/ɛn/' },
        { char: 'O', phonetic: '/oʊ/' },
        { char: 'P', phonetic: '/piː/' },
        { char: 'Q', phonetic: '/kjuː/' },
        { char: 'R', phonetic: '/ɑːr/' },
        { char: 'S', phonetic: '/ɛs/' },
        { char: 'T', phonetic: '/tiː/' },
        { char: 'U', phonetic: '/juː/' },
        { char: 'V', phonetic: '/viː/' },
        { char: 'W', phonetic: '/ˈdʌbəl.juː/' },
        { char: 'X', phonetic: '/ɛks/' },
        { char: 'Y', phonetic: '/waɪ/' },
        { char: 'Z', phonetic: '/ziː/' },
      ],
    };
  },
  methods: {
    playSound(letter) {
      const audio = new Audio(`/sounds/${letter}.mp3`);
      audio.play();
    },
  },
};
</script>

<style scoped>
.alphabet-container {
  text-align: center;
}
.letters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.letter {
  font-size: 24px;
  margin: 5px;
  width: 60px;
  height: 70px;
  line-height: 30px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;
}
.letter:hover {
  background-color: #e0e0e0;
}
.phonetic {
  font-size: 14px;
  color: #555;
  font-family: 'Doulos SIL', serif;
}
</style>