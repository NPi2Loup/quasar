import { h } from 'vue'

export default function (props, content) {
  const {title, ...outerProps } = props;
  return h('div', outerProps, [
    h('table', { class: 'q-table', 'aria-label': props.title, }, content )
  ])
}
