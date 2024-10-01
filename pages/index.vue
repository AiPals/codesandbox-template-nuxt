<template>
  <div>
    <h1>Alphabet Practice Sandbox</h1>
    <Alphabet />
    <AlphabetQuiz />
  </div>
</template>

<script>
import Alphabet from '@/components/Alphabet.vue';
import AlphabetQuiz from '@/components/AlphabetQuiz.vue';

export default {
  components: {
    Alphabet,
    AlphabetQuiz,
  },
};
</script>

<style>
/* Add any page-specific styles here */
</style>
