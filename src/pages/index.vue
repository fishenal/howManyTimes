<template>
  <div>
    <h2>首页</h2>
    <input id='add-input' v-model='newItem' @keyup.enter='addNew' placeholder='do what?'/>
    <ul>
        <li v-for='item in items'>
            <h3 @mouseenter='itemEnter(item)' @mouseleave='itemLeave(item)'>
              <input type='checkbox' @click='itemCheck(item)'>
              <p class='item-label' v-bind:class="{ 'line-through': item.checked }">{{ $index + 1 }} . {{ item.label }} </p>
              <p class='item-status' v-if='item.checked'>finished</p>
              <p class='item-delete' v-if='item.showDelete' @click='deleteClick(item)'>Delete</p>
              <span>{{ item.select }}</span>
              <select v-model='item.select'>
                <option v-for='option in options' v-bind:value='option.value'>{{ option.text }}</option>
              </select>
            </h3>
        </li>
    </ul>
    
  </div>
</template>
<script>
// import Store from './store'
// export default {
//   data () {
//     return {
//       items: Store.fetch(),
//       newItem: '',
//       options: [
//         {
//           text: 'A',
//           value: 1
//         },
//         {
//           text: 'B',
//           value: 2
//         }
//       ]
//     }
//   },
//   watch: {
//     items: {
//       handler (newItems) {
//         Store.save(newItems)
//       },
//       deep: true
//     }
//   },
//   methods: {
//     addNew () {
//       this.items.push({
//         label: this.newItem,
//         checked: false,
//         showDelete: false,
//         select: 1
//       })
//       this.newItem = ''
//     },
//     itemCheck (item) {
//       item.checked = !item.checked
//     },
//     itemEnter (item) {
//       item.showDelete = true
//     },
//     itemLeave (item) {
//       item.showDelete = false
//     },
//     deleteClick (item) {
//       this.items.$remove(item)
//     }
//   }
// }
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}
#app {
  width: 800px;
  margin: 30px auto;
}
#add-input {
  width: 750px;
  height: 35px;
  padding: 0 5px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  height: 30px;
}
.item-status {
  display: inline;
  background: red;
  color: white;
  padding: 0 5px;
  font-size: 12px;
}
.item-delete {
  display: inline;
  text-decoration: underline;
  font-size: 12px;
  color: gray;
  cursor: pointer;
}
.item-label {
  display: inline;
}
.line-through {
  text-decoration: line-through;
}
</style>
