document.getElementById("cepForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const cep = parseInt(document.getElementById("cep").value.replace("-", "").trim(), 10);

  if (isNaN(cep)) {
    mostrarMensagem("Por favor, digite um CEP válido.");
    return;
  }

  if (cep >= 30000000 && cep <= 39999999) {
    mostrarEventos("belo horizonte");
  } else if (cep >= 01000000 && cep <= 05999999) {
    mostrarEventos("são paulo");
  } else if (cep >= 20000000 && cep <= 23799999) {
    mostrarEventos("rio de janeiro");
  } else if (cep >= 29000000 && cep <= 29099999) {
    mostrarEventos("vitoria");
  } else if (cep >= 40000000 && cep <= 41999999) {
    mostrarEventos("salvador");
  } else if (cep >= 49000000 && cep <= 49099999) {
    mostrarEventos("aracaju");
  } else if (cep >= 50000000 && cep <= 52999999) {
    mostrarEventos("recife");
  } else if (cep >= 57000000 && cep <= 57099999) {
    mostrarEventos("maceió");
  } else if (cep >= 58000000 && cep <= 58099999) {
    mostrarEventos("joão pessoa");
  } else if (cep >= 59000000 && cep <= 59099999) {
    mostrarEventos("natal");
  } else if (cep >= 64000000 && cep <= 64099999) {
    mostrarEventos("teresina");
  } else if (cep >= 65000000 && cep <= 65099999) {
    mostrarEventos("são luiz");
  } else if (cep >= 66000000 && cep <= 66999999) {
    mostrarEventos("belém");
  } else if (cep >= 69000000 && cep <= 69099999) {
    mostrarEventos("manaus");
  } else if (cep >= 70000000 && cep <= 70999999) {
    mostrarEventos("brasília");
  } else if (cep >= 72800000 && cep <= 73999999) {
    mostrarEventos("goiânia");
  } else if (cep >= 78000000 && cep <= 78109999) {
    mostrarEventos("cuiabá");
  } else if (cep >= 80000000 && cep <= 82999999) {
    mostrarEventos("curitiba");
  } else if (cep >= 88000000 && cep <= 88999999) {
    mostrarEventos("florianópolis");
  } else if (cep >= 90000000 && cep <= 91999999) {
    mostrarEventos("porto alegre");
  } else {
    mostrarMensagem("CEP fora da faixa das capitais.");
  }
});

function mostrarMensagem(mensagem) {
  const mensagemDiv = document.getElementById("mensagem");
  mensagemDiv.innerHTML = mensagem;
  document.getElementById("eventos").innerHTML = "";
}

function mostrarEventos(cidade) {
  const eventosData = {
    "rio de janeiro": [
      {
        "nome": "Concerto no Parque",
        "data": "10 de junho de 2024",
        "local": "Parque Central",
        "detalhes": "detalhes_evento1.html"
      },
      {
        "nome": "Feira de Artesanato",
        "data": "15 de junho de 2024",
        "local": "Praça da Cidade",
        "detalhes": "detalhes_evento2.html"
      },
      {
        "nome": "Festival de Comida de Rua",
        "data": "20 de junho de 2024",
        "local": "Centro da Cidade",
        "detalhes": "detalhes_evento3.html"
      }
    ],
    "são paulo": [
      {
        "nome": "Show na Avenida",
        "data": "12 de junho de 2024",
        "local": "Avenida Paulista",
        "detalhes": "detalhes_evento4.html"
      },
      {
        "nome": "Parada LGBT",
        "data": "15 de junho de 2024",
        "local": "Avenida Paulista"
      },
      {
        "nome": "Exposição de Arte",
        "data": "18 de junho de 2024",
        "local": "Museu de Arte",
        "detalhes": "detalhes_evento5.html"
      }
    ],
    "salvador": [
      {
        "nome": "Carnaval",
        "data": "20 de fevereiro de 2024",
        "local": "Circuito Barra-Ondina",
        "detalhes": "detalhes_evento6.html"
      },
      {
        "nome": "Festival de Verão",
        "data": "15 de dezembro de 2024",
        "local": "Parque de Exposições",
        "detalhes": "detalhes_evento7.html"
      }
    ],
   "belo horizonte": [
    {
      "nome": "Festival de Jazz",
      "data": "5 de julho de 2024",
      "local": "Praça da Liberdade"
    },
    {
      "nome": "Corrida da Pampulha",
      "data": "20 de outubro de 2024",
      "local": "Lagoa da Pampulha"
    }
  ],
  "manaus": [
    {
      "nome": "Festival de Ópera",
      "data": "12 de maio de 2024",
      "local": "Teatro Amazonas"
    },
    {
      "nome": "Festival de Parintins",
      "data": "28 de junho de 2024",
      "local": "Bumbódromo"
    }
  ],
  "brasília": [
    {
      "nome": "Bienal do Livro",
      "data": "15 de agosto de 2024",
      "local": "Centro de Convenções Ulysses Guimarães"
    },
    {
      "nome": "Festival de Cinema",
      "data": "1 de setembro de 2024",
      "local": "Cine Brasília"
    },
  
  ],
  "fortaleza": [
{
  "nome": "Fortal",
  "data": "25 de julho de 2024",
  "local": "Aterro da Praia de Iracema"
},
{
  "nome": "Festival de Teatro de Fortaleza",
  "data": "15 de novembro de 2024",
  "local": "Diversos locais"
}
],

"curitiba": [
{
  "nome": "Festival de Teatro",
  "data": "28 de março de 2024",
  "local": "Teatro Guaíra"
},
{
  "nome": "Corrida de Curitiba",
  "data": "3 de novembro de 2024",
  "local": "Centro da Cidade"
}
]
,
"recife": [
{
  "nome": "Carnaval do Recife",
  "data": "10 de fevereiro de 2024",
  "local": "Marco Zero"
},
{
  "nome": "São João",
  "data": "23 de junho de 2024",
  "local": "Vários bairros"
}
],

"porto alegre": [
{
  "nome": "Festa da Uva",
  "data": "15 de março de 2024",
  "local": "Centro"
},
{
  "nome": "Porto Verão Alegre",
  "data": "10 de janeiro de 2024",
  "local": "Diversos locais"
}
],

"belém": [
{
  "nome": "Círio de Nazaré",
  "data": "13 de outubro de 2024",
  "local": "Centro"
},
{
  "nome": "Festival de Verão",
  "data": "20 de julho de 2024",
  "local": "Praia do Atalaia"
}
],
"goiânia": [
{
  "nome": "Festival Vaca Amarela",
  "data": "5 de setembro de 2024",
  "local": "Centro Cultural Martim Cererê"
},
{
  "nome": "Festival Bananada",
  "data": "15 de agosto de 2024",
  "local": "Diversos locais"
}
],
 "campo grande": [
{
  "nome": "Arraial de Santo Antônio",
  "data": "13 de junho de 2024",
  "local": "Praça do Papa"
},
{
  "nome": "Festival América do Sul",
  "data": "25 de abril de 2024",
  "local": "Diversos locais"
}
],
 "teresina": [
{
  "nome": "Salão do Livro do Piauí",
  "data": "1 de maio de 2024",
  "local": "Centro de Convenções"
},
{
  "nome": "Festa de São João",
  "data": "24 de junho de 2024",
  "local": "Diversos bairros"
}
]
,
 "são luís": [
{
  "nome": "Carnaval de São Luís",
  "data": "10 de fevereiro de 2024",
  "local": "Centro Histórico"
},
{
  "nome": "São João do Maranhão",
  "data": "23 de junho de 2024",
  "local": "Vários bairros"
}
],
 "natal": [
{
  "nome": "Carnatal",
  "data": "5 de dezembro de 2024",
  "local": "Centro"
},
{
  "nome": "Festa de Sant'Ana",
  "data": "26 de julho de 2024",
  "local": "Catedral"
}
],
"joão pessoa": [
{
  "nome": "Festival de Inverno",
  "data": "20 de julho de 2024",
  "local": "Centro"
},
{
  "nome": "São João de Campina Grande",
  "data": "23 de junho de 2024",
  "local": "Campina Grande"
}
],

"aracaju":[
{
  "nome": "Forró Caju",
  "data": "23 de junho de 2024",
  "local": "Praça de Eventos"
},
{
  "nome": "Carnaval de Aracaju",
  "data": "10 de fevereiro de 2024",
  "local": "Orla"
}
],

 "maceió": [
{
  "nome": "Maceió Verão",
  "data": "15 de janeiro de 2024",
  "local": "Praia"
},
{
  "nome": "São João de Maceió",
  "data": "23 de junho de 2024",
  "local": "Centro"
}
],

"vitória": [
{
  "nome": "Festa da Penha",
  "data": "27 de abril de 2024",
  "local": "Convento da Penha"
},
{
  "nome": "Festival de Cinema de Vitória",
  "data": "15 de setembro de 2024",
  "local": "Diversos locais"
}
],
"porto velho": [
{
  "nome": "Festa do Divino",
  "data": "20 de maio de 2024",
  "local": "Centro"
},
{
  "nome": "Festival Amazônia Encena",
  "data": "15 de julho de 2024",
  "local": "Teatro Estadual"
}
],

"boa vista": [
{
  "nome": "Festa de São João",
  "data": "24 de junho de 2024",
  "local": "Centro"
},
{
  "nome": "Carnaval de Boa Vista",
  "data": "10 de fevereiro de 2024",
  "local": "Centro"
}
],
"palmas": [
{
  "nome": "Festa do Divino",
  "data": "20 de maio de 2024",
  "local": "Praça dos Girassóis"
},
{
  "nome": "Carnaval de Palmas",
  "data": "10 de fevereiro de 2024",
  "local": "Centro"
}
],

"rio branco":[
{
  "nome": "Expoacre",
  "data": "27 de julho de 2024",
  "local": "Parque de Exposições"
},
{
  "nome": "Carnaval de Rio Branco",
  "data": "10 de fevereiro de 2024",
  "local": "Centro"
}
],
};
const eventos = eventosData[cidade];
const eventosDiv = document.getElementById("eventos");
eventosDiv.innerHTML = ""; // Limpa qualquer conteúdo anterior
const mensagemDiv = document.getElementById("mensagem");
mensagemDiv.innerHTML = ""; // Limpa a mensagem

if (eventos) {
  eventos.forEach(evento => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");
    eventElement.innerHTML = `
      <h3>${evento.nome}</h3>
      <p>Data: ${evento.data}</p>
      <p>Local: ${evento.local}</p>
      <a href="${evento.detalhes}" target="_blank">Mais detalhes</a>
    `;
    eventosDiv.appendChild(eventElement);
  });
} else {
  eventosDiv.innerHTML = "<p>Nenhum evento encontrado.</p>";
}
}

  
