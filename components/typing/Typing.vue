<template>
  <v-text-field
    ref="editorInput"
    v-model="editor"
    :label="text"
    :disabled="!active"
    :autofocus="active"
  />
</template>

<script>
export default {
  name: 'Typing',
  props: {
    text: { type: String, required: true },
    index: { type: Number, required: true },
    isLast: { type: Boolean, required: true },
    active: { type: Boolean, required: true },
    clear: { type: Boolean, required: true },
    onSuccess: { type: Function, required: true },
    onStartTimer: { type: Function, required: true },
    onEndTimer: { type: Function, required: true },
  },
  data: function() {
    return {
      editor: null,
    }
  },
  watch: {
    editor() {
      if (this.index === 0 && this.editor !== null) this.onStartTimer()
      if (String(this.editor).trim() === this.text) {
        this.onSuccess(this.index)
        if (this.isLast) this.onEndTimer()
      }
    },
    clear() {
      this.clear && (this.editor = null)
    },
  },
  updated() {
    this.active && this.$refs.editorInput.focus()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.typing {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: left;
  .view-line {
  }
  .editor {
    width: 90%;
  }
}
</style>
