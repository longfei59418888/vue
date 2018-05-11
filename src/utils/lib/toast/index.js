/**
 * Created by DELL on 2017/6/22.
 */
import Vue from 'vue'
import Com from './toast.vue'

const ToastConstructor = Vue.extend(Com)
let currentElement = null
let removeDom = event => {
  event.target.parentNode.removeChild(event.target);
  currentElement = null
};
ToastConstructor.prototype.end = function () {
  if (!this.visible) return
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};
ToastConstructor.prototype.close = function () {
  if (!this.visible) return
  this.visible = false;
  this.$el.parentNode.removeChild(this.$el);
  currentElement = null
};
const Toast = (options = {}) => {
  if(currentElement) currentElement.parentNode.removeChild(currentElement);
  var instance = new ToastConstructor().$mount(document.createElement('div'))
  let duration = options.duration || 1500;
  instance.message = typeof options === 'string' ? options : options.message
  instance.position = options.position || 'middle'
  instance.icon = options.icon || ''
  document.body.appendChild(instance.$el);
  currentElement = instance.$el
  instance.visible = true;
  Vue.nextTick(() => {
    instance.timer = setTimeout(function () {
      instance.end();
    }, duration);
  })
  return instance
}
export default Toast
