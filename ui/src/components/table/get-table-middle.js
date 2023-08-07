import { h } from 'vue'

export default function getTableMiddle(props, content) {
  return h('div', props, [h('table', { class: 'q-table', 'aria-label': props.title }, content)])
}
