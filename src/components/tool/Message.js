import { createVNode, render } from 'vue'
import MyMessage from './my-message.vue'
// 创建元素用来挂载虚拟 DOM
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-contsiner')
document.body.appendChild(div)


export default ({ text, type }) => {

    let timer = sessionStorage.getItem("message");

    render(null,div);
    clearTimeout(timer);
    // 创建虚拟 DOM
    const VNode = createVNode(MyMessage, { text, type })

    // 通过 render 函数挂载到页面中
    render(VNode, div)

    timer = setTimeout(() => {
        render(null, div)
    }, 3000)

    sessionStorage.setItem("message",timer);

}
