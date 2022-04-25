<template>
  <section>
    <h1>Hemodescobridor - O Jogo</h1>
  </section>
  <section>
    <p>
      Bem-Vindo(a) ao <span class="strongR">Hemodescobridor</span>, um jogo
      online onde você toma o papel de um(a) profissional em
      <span class="strongG">Biomedicina</span>. Seu objetivo é realizar
      <span class="strongB">testes</span> com amostras
      <span class="strongRR">sanguíneas</span> e através da análise, fazer um
      relatório constando o <span class="strongO">tipo sanguíneo</span> de um
      paciente. Está pronto(a)? Agora
      <span class="strongP">vidas dependem de você</span>! Descubra o tipo
      sanguíneo abaixo com os seus conhecimentos
      <span class="strongG">Biomédicos</span>.
    </p>
  </section>
  <section id="divididor">
    <div id="borda1">
      <section id="sangue">
        <h2>
          Fator
          <abbr style="text-decoration: none" title="Recursos Humanos">RH</abbr>
        </h2>
        <div class="lamina">
          <div id="gotaD" :style="gotaD"></div>
        </div>
        <h2>
          Sistema
          <abbr style="text-decoration: none" title="Abaixo-assinado">ABO</abbr>
        </h2>
        <div class="lamina">
          <div id="gotaA" :style="gotaA"></div>
          <div id="gotaB" :style="gotaB"></div>
        </div>
      </section>
    </div>
    <div id="borda2">
      <section id="opcoes">
        <h2>Opções</h2>
        <div id="reagir">
          <div>
            <h3>
              <span class="strongG">Gotejar</span><br /><span class="strongB">Anti-A</span>
            </h3>
            <button class="btns" id="gotejarAA" @click="GotejarA"></button>
          </div>
          <div>
            <h3>
              <span class="strongG">Gotejar</span><br /><span class="strongY">Anti-B</span>
            </h3>
            <button class="btns" id="gotejarAB" @click="GotejarB"></button>
          </div>
          <div>
            <h3>
              <span class="strongG">Gotejar</span><br /><span class="strongGR">Anti-D</span>
            </h3>
            <button class="btns" id="gotejarAD" @click="GotejarD"></button>
          </div>
        </div>
        <hr />
        <div id="resultado">
          <h2>Resultado</h2>
          <div>
            <p v-if="fir">A <span class="strongB">primeira</span> amostra...</p>
            <p v-else-if="firEIF">
              A <span class="strongB">primeira</span> amostra...
              <span class="strongRR">Coagulou</span>!
            </p>
            <p v-else>A <span class="strongB">primeira</span> amostra... Não coagulou.</p>
          </div>
          <div>
            <p v-if="sec">A <span class="strongY">segunda</span> amostra...</p>
            <p v-else-if="secEIF">
              A <span class="strongY">segunda</span> amostra...
              <span class="strongRR">Coagulou</span>!
            </p>
            <p v-else>
              A <span class="strongY">Segunda</span> amostra... Não coagulou.
            </p>
          </div>
          <div>
            <p v-if="thi">
              A <span class="strongGR">terceira</span> amostra...
            </p>
            <p v-else-if="thiEIF">
              A <span class="strongGR">terceira</span> amostra...
              <span class="strongRR">Coagulou</span>!
            </p>
            <p v-else>
              A <span class="strongGR">terceira</span> amostra... Não coagulou.
            </p>
          </div>
          <div id="resultadoFORM">
            <div id="STS">
              <p>Selecione o Resultado</p>
              <div id="dp-menu">
                <ul id="tipoSangue">
                  <li>
                    <a href="#" v-if="escolheu">?±</a>
                    <a href="#" v-else>{{ tipoSelecionado }}</a>
                    <ul>
                      <li><button @click="clkAP">A⁺</button></li>
                      <li><button @click="clkAN">A⁻</button></li>
                      <li><button @click="clkBP">B⁺</button></li>
                      <li><button @click="clkBN">B⁻</button></li>
                      <li><button @click="clkABP">AB⁺</button></li>
                      <li><button @click="clkABN">AB⁻</button></li>
                      <li><button @click="clkOP">O⁺</button></li>
                      <li><button @click="clkON">O⁻</button></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <button id="verificar" @click="verificar()">Verificar</button>
          </div>
        </div>
      </section>
    </div>
  </section>
  <hr />
  <h2>Placar</h2>
  <div>
    <p id="acertos">Acertos: {{ contadorAC }}</p>
    <p id="erros">Erros: {{ contadorER }}</p>
    <p>
      Se quiser usar uma nova amostra, clique em
      <span class="strongG">Jogar de novo</span>.<br />Caso queira finalizar e
      ver o seu placar final, clique em
      <span class="strongY">Finalizar o Jogo</span>.
    </p>
  </div>
  <div id="finalizar">
    <button class="btn-final btn-final1" @click="Reset()" id="jogarDNV">
      Jogar de novo
    </button>
    <button
      class="btn-final btn-final2"
      @click="Finalizar"
      id="finalizarJogo"
    >
      Finalizar o Jogo
    </button>
  </div>
</template>

<script>
import { tipoEscolhidoI, talvezABI, tipos } from "../App.js";
export default {
  name: "mainContent",
  data() {
    return {
      tipoEscolhido: tipoEscolhidoI,
      talvezAB: talvezABI,
      gotaA: "",
      gotaB: "",
      gotaD: "",
      fir: true,
      sec: true,
      thi: true,
      firEFI: false,
      secEFI: false,
      thiEFI: false,
      tipoSelecionado: "",
      escolheu: true,
      contadorAC: 0,
      contadorER: 0,
    };
  },
  methods: {
    Finalizar() {
      window.location.href = `http://hemodescobridor.netlify.app/dist/resultado.html?acertos=${this.contadorAC}&erros=${this.contadorER}`;
    },
    verificar() {
      if (this.tipoSelecionado == "") {
        alert("Selecione um tipo sanguíneo!")
      } else if (this.tipoSelecionado == this.tipoEscolhido) {
        alert("Acertou! :)")
        this.contadorAC++
      } else {
        alert("Errou! :(")
        this.contadorER++
      }
    },
    clkAP() {
      this.tipoSelecionado = "A⁺"
      this.escolheu = false
    },
    clkABP() {
      this.tipoSelecionado = "AB⁺"
      this.escolheu = false
    },
    clkBP() {
      this.tipoSelecionado = "B⁺"
      this.escolheu = false
    },
    clkOP() {
      this.tipoSelecionado = "O⁺"
      this.escolheu = false
    },
    clkAN() {
      this.tipoSelecionado = "A⁻"
      this.escolheu = false
    },
    clkABN() {
      this.tipoSelecionado = "AB⁻"
      this.escolheu = false
    },
    clkBN() {
      this.tipoSelecionado = "B⁻"
      this.escolheu = false
    },
    clkON() {
      this.tipoSelecionado = "O⁻"
      this.escolheu = false
    },
    Reset() {
      var escolhedorDeSangue = Math.floor(Math.random() * tipos.length);
      for (var c = 0; c < tipos.length; c++) {
        if (escolhedorDeSangue == c) {
          this.tipoEscolhido = tipos[c];
        }
      }
      
      var tipoEscpt1 = this.tipoEscolhido[0];
      var tipoEscpt2 = this.tipoEscolhido[1];
      this.talvezAB = tipoEscpt1 + tipoEscpt2;

      this.gotaA = "background-color: red;";
      this.gotaB = "background-color: red;";
      this.gotaD = "background-color: red;";

      this.fir = true
      this.sec = true
      this.thi = true
      this.firEIF = false
      this.secEIF = false
      this.thiEIF = false

      console.log("Resetado: " + this.tipoEscolhido)
      this.tipoSelecionado = ""
      this.escolheu = true
    },
    GotejarA() {
      if (this.talvezAB == "AB") {
        this.gotaA = "background-image: linear-gradient(125deg, red, #ff8181)";
        this.fir = false;
        this.firEIF = true;
      } else if (this.tipoEscolhido[0] == "A") {
        this.gotaA = "background-image: linear-gradient(125deg, red, #ff8181)";
        this.fir = false;
        this.firEIF = true;
      } else {
        this.fir = false;
        this.firEFI = false;
      }
    },
    GotejarB() {
      if (this.talvezAB == "AB") {
        this.gotaB = "background-image: linear-gradient(125deg, red, #ff8181)";
        this.sec = false;
        this.secEIF = true;
      } else if (this.tipoEscolhido[0] == "B") {
        this.gotaB = "background-image: linear-gradient(125deg, red, #ff8181)";
        this.sec = false;
        this.secEIF = true;
      } else {
        this.sec = false;
        this.secEFI = false;
      }
    },
    GotejarD() {
      if (this.talvezAB == "AB") {
        if (this.tipoEscolhido[2] == "⁺") {
          this.gotaD = "background-image: linear-gradient(125deg, red, #ff8181)";
          this.thi = false;
          this.thiEIF = true;
        } else {
          this.thi = false;
          this.thiEFI = false;
        }
      } else if (this.tipoEscolhido[1] == "⁺") {
        this.gotaD = "background-image: linear-gradient(125deg, red, #ff8181)";
        this.thi = false;
        this.thiEIF = true;
      } else {
        this.thi = false;
        this.thiEFI = false;
      }
    },
  },
};
</script>
