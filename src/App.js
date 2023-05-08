import './App.css';
import logoFaculdade from './ri_1.png';
import React, { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={themeClass}>
      <div>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className='master'>
        <div className='titulo'>
          <img src={logoFaculdade} alt="Logo Faculdade" />
          <h1>DESENVOLVIMENTO WEB FOCO EM REACT</h1>
          <h3>Cássia Brandão</h3>
        </div>
        <div className='texto'>
          <h3>Resumo</h3>
          <p>Este artigo apresenta uma visão geral do desenvolvimento web com foco em React, uma biblioteca JavaScript amplamente utilizada para construção de interfaces de usuário. São abordados conceitos fundamentais de React, como componentes, props e state, além de ferramentas e bibliotecas comumente utilizadas no desenvolvimento web com React, como o create-react-app, react-router e redux. Também são discutidas práticas recomendadas para desenvolvimento de aplicações web escaláveis e de alto desempenho utilizando React.</p>
        </div>
        <div className='texto'>
          <h3>Abstract</h3>
          <p>This article provides an overview of web development focused on React, a widely used JavaScript library for building user interfaces. It covers fundamental concepts of React such as components, props, and state, as well as tools and libraries commonly used in web development with React such as create-react-app, react-router, and redux. Best practices for developing scalable and high-performance web applications using React are also discussed.</p>
        </div>
        <div className='texto'>
          <h3>Definições prévias</h3>
          <h3>Programação web</h3>
          <p>Linguagem de programação web são usadas propriamente para o desenvolvimento do entendido como camadas de negócio de apresentação, assim como para a construção da lógica de negócios dos websites, portais, e aplicações web de modo geral.</p>
          <h3>React</h3>
          <p>O React é uma biblioteca criada para construir telas de forma declarativa. Ou seja: o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo.</p>
        </div>
        <div className='texto'>
          <h3>Programando em react</h3>
          <p>A programação web é tida como um nicho relevante no mercado da tecnologia, com um crescimento exponencial e de déficit de profissionais.</p>
          <p>O React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Como falamos anteriormente, o React é uma biblioteca JavaScript (JS). Ou seja, essa é a principal linguagem de programação que ele utiliza e busca facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes. Em outras palavras, podemos imaginar que o React divide uma tela em diversos componentes para, então, trabalhar sobre eles de maneira individual.</p>
          <p>Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb. Existem diversas vantagens na utilização dessa biblioteca e uma delas resume bem um dos motivos para se aprender o React: ele é flexível e facilita a interface com outras bibliotecas e frameworks. Além disso, mesmo sendo uma biblioteca SPA, ele torna possível escrever aplicações que renderizam no servidor através do Next.</p>
        </div>
        <div className='texto'>
          <h3>Diferença entre react e react native</h3>
          <p>O React, mais conhecido como ReactJS, é uma biblioteca do Java Script, desenvolvido pelo Facebook, utilizado em desenvolvimentos Web de front end, que tem por objetivo aprimorar as interfaces dos projetos, tornando-as mais harmônicas, rápidas, impossibilitando qualquer tipo de complexidade entre elas, além de ser escalável, o que facilita ainda mais o processo. </p>
          <p>Já o React Native é um framework baseado no ReactJS, fazendo parte também do time do Facebook. Ele é adaptado e tem a função de criar aplicativos móveis que possibilitam os criadores utilizarem a linguagem Java Script, uma linguagem de desenvolvimento Web, agora sendo utilizada também em aplicativos. Sendo assim, o React Native converte todo código desenvolvido para uma linguagem nativa do sistema operacional.</p>
          <p>Um componente extremamente importante dentro desse processo é o DOM (Document Object Model) que significa Modelo de documento por objeto. O DOM é uma interface de programação padronizada que põe uma página Web ou mobile em ordem e permite que fique acessível a todos.</p>
          <p>Seu funcionamento por si só é fantástico, pois por meio da página Web criada, ele tem a função de fornecer uma representação estruturada do documento, no estilo de uma árvore cheia de galhos, definindo todos os métodos desse documento fornecendo ferramentas para que sejam feitas as alterações necessárias.</p>
          <p>Tanto o React quanto React Native possibilitam o uso do DOM no aprimoramento das interfaces de seus projetos, e na atualização dos componentes que foram alterados. Entretanto, também apresentam algumas diferenças: O  React utiliza a combinação do HTML com o Java Script para renderizar, ou seja, para converter e fixar o código front end, e com a ajuda do DOM ele realiza a atualização dos componentes que foram alterados, compara o documento anterior com um novo, detectando as diferenças e finaliza realizando as alterações detalhadas do documento.</p>
          <p>Em outras palavras, podemos dizer que praticamente entrega o conteúdo quase pronto, com as ferramentas necessárias, para que o programador possa realizar as alterações cabíveis. O programa ainda finaliza o documento entregando um código final aprimorado e renderizado.</p>
          <p>Um profissional desenvolvedor em React JS é responsável por desenvolver componentes de interface do usuário para aplicativos móveis e Web baseados em JavaScript utilizando React JS, uma biblioteca JavaScript de código aberto.</p>
          <p>O React é fácil de aprender por um simples motivo: ele utiliza a linguagem JavaScript para criar suas aplicações. Por ser uma tecnologia criada e testada pela equipe do Facebook é uma solução segura. Além disso a comunidade de programadores React é muito grande.</p>
          <p>Aprender react vai depender da sua experiência prévia com Javascript, Html, Css… além de conceitos de algoritmo, programação funcional, etc. Se você já tiver experiência, algum curso bom de react vai te deixar pronto para alguns trabalhos simples em questão de 1 ou 2 meses.</p>
          <p>Um levantamento da Coodesh mostra que o desenvolvedor Mobile React Native recebe, em média, os seguintes valores: Júnior: R$ 3.100,00 a R$ 4.100,00; Pleno: R$ 5.000,00 a R$ 7.500,00; Sênior: R$ 9.000,00 ou mais. Apesar de que, um desenvolvedor React, assim como os demais profissionais de marketing, tecnologia etc, costumam ganhar mais como freelancer e CNPJ do que como CLT.</p>
        </div>
        <div className='texto'>
          <h3>Conclusão</h3>
          <p>Considerando que o React é uma biblioteca segura, flexível e de fácil aprendizagem, podemos afirmar que, apesar das diferenças existentes entre suas funções no desenvolvimento web e mobile, ambas têm em comum a melhoria do SEO em projetos. Além disso, a presença do JavaScript e do DOM também é um ponto em comum. Tanto o React quanto o React Native são ferramentas de extrema importância para as empresas, trazendo benefícios não apenas para o sistema em si, mas também para os programadores e, acima de tudo, para os usuários finais. Dessa forma, a utilização do React pode ser vista como uma excelente escolha para quem busca uma abordagem moderna e eficiente no desenvolvimento web.</p>
        </div>
        <div className='referencia'>
          <h4>ALMEIDA, Flávio. Desenvolvimento de aplicações Web com React. São Paulo: Novatec, 2019.</h4>
          <h4>ARAUJO, Alexandre. Desenvolvimento de aplicações Web com React: curso completo. São Paulo: Udemy, 2020. Disponível em: https://www.udemy.com/course/curso-reactjs/. Acesso em: 20 abr. 2022.</h4>
          <h4>CUNHA, Rodrigo. React: rápido, escalável e simples. São Paulo: Casa do Código, 2017.</h4>
          <h4>REACT. In: DOCUMENTAÇÃO OFICIAL. Disponível em: https://reactjs.org/docs/getting-started.html. Acesso em: 15 abr. 2022.</h4>
          <h4>REACT NATIVE. In: DOCUMENTAÇÃO OFICIAL. Disponível em: https://reactnative.dev/docs/getting-started. Acesso em: 15 abr. 2022.</h4>
          <h4>SILVA, Bruno. React Native: construindo aplicativos mobile com JavaScript. São Paulo: Casa do Código, 2019.</h4>
          <h4>W3SCHOOLS. React Tutorial. Disponível em: https://www.w3schools.com/react/. Acesso em: 20 abr. 2022.</h4>
          <h4>WEBSITEBEAM. React vs. Angular vs. Vue: qual escolher em 2022?. Disponível em: https://websitebeam.com/react-vs-angular-vs-vue/. Acesso em: 20 abr. 2022.</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
