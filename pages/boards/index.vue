<template>
  <div>
    <h1>Boards</h1>
    <BoardItem
      v-for="board in boards"
      :board="board"
      :key="board.id"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import BoardItem from '@/components/board/BoardItem'

const { mapState, mapActions } = createNamespacedHelpers('board')

export default {
  name: 'Boards',
  components: { BoardItem },
  data: () => ({}),
  computed: {
    ...mapState(['boards']),
  },
  mounted() {
    this.loadBoards()
  },
  methods: {
    ...mapActions(['loadBoards']),
  },
}
</script>

<style scoped>
</style>
