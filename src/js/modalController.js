import { $ } from "./utils.js";
import {
  openMainModal,
  closeMainModal,
  openADModal,
  closeADModal,
} from "./animationController.js";

/**
 * Clase encargada de registrar cada aspecto del comportamiento de un modal
 */
class ModalController {
  /**
   *
   * @param {HTMLElement} on
   * @param {HTMLElement} off
   * @param {HTMLElement} nodeModal
   * @param {{[string]: ()=>void}} handlersOn
   * @param {{[string]: ()=>void}} handlersOff
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
      ({ target }) => {
        this.open(this.on.dataset.modal);
      });
    this.off.addEventListener("click",
      ({ target }) => {
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

//IMPLEMENTACIÓN---------------------------------------------
const modalMain = $("#modal_main");
const modalMainOn = $("#modal_main_on")
const modalMainOff = $("#modal_main_off")

const modalAcercaDe = $("#modal_acerca_de");
const modalADOn = $('#modal_acerca_de_on');
const modalADOff = $('#modal_acerca_de_off');

const modalMainController = new ModalController(
  modalMainOn,
  modalMainOff,
  modalMain,
  { modal_main: openMainModal },
  { modal_main: closeMainModal }
);

const modalADController = new ModalController(
  modalADOn,
  modalADOff,
  modalAcercaDe,
  { modal_acerca_de: openADModal },
  { modal_acerca_de: closeADModal }
);
