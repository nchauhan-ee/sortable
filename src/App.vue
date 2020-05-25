<template>
  <div class="row">
    <div class="col-6">
      <h3>Draggable</h3>

      <draggable
        :list="list"
        class="list-group"
        ghost-class="ghost"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
          :data-testid="element.name"
        >{{ element.name }}</div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "App",
  order: 0,
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 },
        { name: "George", id: 2 },
        { name: "Rick", id: 2 },
        { name: "Danny", id: 2 }
      ],
      dragging: false
    };
  }
};
</script>
<style>
.list-group-item {
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #e3e3e3;
}

.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0;
  background: #c8ebfb;
}
</style>