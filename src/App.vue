<template>
    <main id="main">
        <mainContent />
    </main>
    <!--div id="painel">
      
      <div id="botoes">
        <button id="btnTEMA"></button>
      </div>
    </div-->
</template>

<script>
import mainContent from "./components/mainContent.vue";

export default {
  name: "App",
  components: {
    mainContent,
  },
};
</script>

<style>
@charset "UTF-8";
/* EI VC SEU IDIOTA LE ISSO AQUI, O IDEIA DE MESTRE, FAZ UM JEITO DE QUANDO APERTAR OS BOTOES DOS REAGENTES, ELES FIQUEM SLA TE VIRA DE ALGUM JEITO PRA MOSTRAR Q JA FORAM CLICADOS, CASO N CONSIGA COLCA UM ALERT Q JA CLICOU SLA TE VIRA MENO*/
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Source Code Pro", Arial;
}

@media (max-width:760px) {
   #divididor {
     flex-direction: column;
   }
}

@media (max-width: 540px) {
  #finalizar {
  flex-direction: column;
  gap: 10px;
}
}
/*
#btnTEMA {
  width: 57px;
  height: 57px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition-duration: 0.7s;
}

#btnTEMA.active {
  background-color: black;
}

#btnTEMA.active:hover {
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.705);
}

.p.active {
  color: black;
}

#main.active {
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.103);
}

#body {
  transition: 1.5s;
}

#body.active {
  background-color: white;
  transition: 1.5s;
}

#btnTEMA:hover {
  transform: rotateZ(180deg);
  background-color: white;
  box-shadow: 0px 0px 9px 10px rgba(255, 255, 255, 0.371);
}

--------------------------

#painel {
  display: flex;
  gap: 17px;
  justify-content: center;
  margin: auto;
}

#botoes {
  display: flex;
  flex-direction: column;
}

================================================*/

h1,
h2,
h3,
p {
  color: white;
}

section p {
  text-indent: 30px;
}

body {
  background-color: black;
  padding: 30px;
}

h1 {
  text-align: center;
  color: rgb(250, 30, 78);
}

h2 {
  font-size: 20px;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  padding: 20px;
  max-width: 700px;
  height: auto;
  box-shadow: 0px 1px 20px rgb(250 30 78 / 24%);
  border-radius: 20px;
}

#sangue {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 372px;
}

#opcoes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  min-height: 372px;
}

.btns {
  width: 30px;
  height: 30px;
  background-color: #fa1e4e;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
}

.btn-final {
  background-color: #fa1e4e;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s;
  padding: 15px;
  font-size: 20px;
}

.btn-final1 {
  color: rgb(21, 255, 0);
}

.btn-final2 {
  color: yellow;
}

#erros {
  color: red;
}

#acertos {
  color: rgb(21, 255, 0);
}

#finalizar {
  display: flex;
  justify-content: space-between;
}

hr {
  border-color: red;
}

#verificar {
  border-radius: 20px;
  background-color: #fa1e4e;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  padding: 10px;
  color: white;
  width: max-content;
}

#verificar:hover,
button:hover {
  background-color: #c4183d;
}

#resultado {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  min-height: 200px;
}

#resultadoFORM {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#STS {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

#reagir {
  display: flex;
  justify-content: space-between;
}

#reagir div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
}

h3 {
  font-size: 15px;
}

#divididor {
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
}

#borda1 {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border-top: 4px solid rgb(250, 30, 78);
  border-right: 2px solid rgb(250, 30, 78);
}

#borda2 {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border-top: 4px solid rgb(250, 30, 78);
  border-left: 2px solid rgb(250, 30, 78);
}

.lamina {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  width: 100%;
  height: 100px;
  background-color: #0077ff;
  margin: auto;
}

#gotaD {
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 50%;
}

#gotaA {
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 50%;
}

#gotaB {
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 50%;
}

.strongR {
  color: #fa1e4e;
  font-weight: bold;
}
.strongRR {
  color: #ff0000;
  font-weight: bold;
}
.strongGR {
  color: #808080;
  font-weight: bold;
}
.strongY {
  color: #ffff00;
  font-weight: bold;
}
.strongO {
  color: #ff4500;
  font-weight: bold;
}
.strongG {
  color: #15ff00;
  font-weight: bold;
}
.strongB {
  color: #00e1ff;
  font-weight: bold;
}
.strongP {
  color: #ff009d;
  font-weight: bold;
}

#dp-menu,
#dp-menu li {
  color: white;
}

#dp-menu ul {
  list-style: none;
  /*position: absolute; OLHA ESSA MERDA AQ*/
}

#dp-menu ul {
  background-color: #fa1e4e;
  border-radius: 10px 0px;
}

#dp-menu ul li {
  display: inline;
  position: relative;
}

#dp-menu ul li a {
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
}

#dp-menu ul li ul li button {
  background-color: transparent;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
}

#dp-menu ul li ul li button:hover {
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.411);
  border-radius: 0px 20px;
}

#dp-manu ul li {
  display: inline-block;
}

#dp-menu ul li a:hover {
  color: rgb(0, 238, 255);
  text-decoration: none;
  padding: 10px;
}

/*Sub Menu */

#dp-menu ul ul {
  display: none;
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.411);
  background-image: linear-gradient(to bottom, #0077ff, #fa1e4e);
  position: absolute;
  padding: 10px;
  border-radius: 0px 20px;
  z-index: 17;
}

#dp-menu ul li:hover ul {
  display: flex;
  flex-direction: column;
  width: max-content;
}

#dp-menu ul ul {
  width: 150px;
}

#dp-menu ul ul li a {
  display: block;
}
</style>
