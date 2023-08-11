import { h } from 'vue'

export default function (props, content) {
  const {titleUid, ...outerProps } = props;
  return h('div', outerProps, [
    h('table', { class: 'q-table', 'aria-labelledby': props.titleUid, }, content )
  ])
}
