/**
 * Selecciona un elemento del dom mediantu su selector
 * @param {string} selector selector de elemento
 * @returns {HTMLElement} nodo del dom seleccionado
 */
export const $ = (selector)=> document.querySelector(selector);

/**
 * Selecciona un grupo de elementos del dom que compartan selectores
 * @param {string} selector 
 * @returns {HTMLElement[]} arreglo con todos los nodos que coincidan con el selector 
 */
export const $$ = (selector)=> document.querySelectorAll(selector);

/**
 * Clase encargada de registrar cada aspecto del comportamiento de un modal
 */
export class ModalController {
  /**
   *
   * @param {HTMLElement} on nodo encargado de disparar las acciones para mostral modal
   * @param {HTMLElement} off nodo encargado de disparar las acciones para ocultar modal
   * @param {HTMLElement} nodeModal nodo principal del modal, se trara de su contenedor
   * @param {{[string]: ()=>void}} handlersOn funciones que se ejecutarán al disparar la accion on
   * @param {{[string]: ()=>void}} handlersOff funciones que se ejecutarán al disparar la accion off
   */
  constructor(
      on, 
      off, 
      nodeModal, 
      handlersOn, 
      handlersOff
    ) {
    this.on = on;
    this.off = off;
    this.nodeModal = nodeModal;
    this.handlersOn = handlersOn;
    this.handlersOff = handlersOff;

    this.on.addEventListener("click",
      () => {
        this.open(this.on.dataset.modal);
      });
    this.off.addEventListener("click",
      () => {
        this.close(this.off.dataset.modal);
      });
  }
  open(handlerName) {
    const handler = this.handlersOn[handlerName];
    if (!handler) return;
    this.nodeModal.classList.remove("hidden");
    handler();
  }
  close(handlerName) {
    const handler = this.handlersOff[handlerName];
    if (!handler) return;
    handler();
    this.nodeModal.classList.add("hidden");
  }
}