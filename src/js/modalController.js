import { $, ModalController } from "./utils.js";
import {
  openMainModal,
  closeMainModal,
  openADModal,
  closeADModal,
} from "./animationController.js";

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
