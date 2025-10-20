export default function Perguntas() {
  const facil = [
    {
      "questao": "Quem construiu a arca para sobreviver ao dilúvio?",
      "alternativas": [
        { "alternativa": "Abraão", "certa": false },
        { "alternativa": "Moisés", "certa": false },
        { "alternativa": "Noé", "certa": true },
        { "alternativa": "Davi", "certa": false }
      ]
    },
    {
      "questao": "Quem foi lançado na cova dos leões?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Daniel", "certa": true },
        { "alternativa": "José", "certa": false },
        { "alternativa": "Jonas", "certa": false }
      ]
    },
    {
      "questao": "Qual o homem que abriu o mar vermelho?",
      "alternativas": [
        { "alternativa": "Moisés", "certa": true },
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Noé", "certa": false },
        { "alternativa": "Pedro", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do gigante que Davi derrotou?",
      "alternativas": [
        { "alternativa": "Golias", "certa": true },
        { "alternativa": "Nabucodonosor", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Herodes", "certa": false }
      ]
    },
    {
      "questao": "Quem foi engolido por um grande peixe?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Jonas", "certa": true },
        { "alternativa": "Paulo", "certa": false },
        { "alternativa": "Pedro", "certa": false }
      ]
    },
    {
      "questao": "Qual o primeiro livro da Bíblia?",
      "alternativas": [
        { "alternativa": "Êxodo", "certa": false },
        { "alternativa": "Gênesis", "certa": true },
        { "alternativa": "Levítico", "certa": false },
        { "alternativa": "Salmos", "certa": false }
      ]
    },
    {
      "questao": "Quem traiu Jesus por 30 moedas de prata?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Judas Iscariotes", "certa": true },
        { "alternativa": "Tomé", "certa": false },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Quantas pragas Deus enviou ao Egito?",
      "alternativas": [
        { "alternativa": "5", "certa": false },
        { "alternativa": "7", "certa": false },
        { "alternativa": "10", "certa": true },
        { "alternativa": "12", "certa": false }
      ]
    },
    {
      "questao": "Quem libertou o povo de Israel do Egito?",
      "alternativas": [
        { "alternativa": "Moisés", "certa": true },
        { "alternativa": "Josué", "certa": false },
        { "alternativa": "José", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro homem criado por Deus?",
      "alternativas": [
        { "alternativa": "Caim", "certa": false },
        { "alternativa": "Abel", "certa": false },
        { "alternativa": "Adão", "certa": true },
        { "alternativa": "Sete", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o primeiro milagre de Jesus?",
      "alternativas": [
        { "alternativa": "Ressuscitar Lázaro", "certa": false },
        { "alternativa": "Andar sobre as águas", "certa": false },
        { "alternativa": "Transformar água em vinho", "certa": true },
        { "alternativa": "Multiplicar os pães", "certa": false }
      ]
    },
    {
      "questao": "Quem negou Jesus três vezes?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": true },
        { "alternativa": "Judas", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": false }
      ]
    },
    {
      "questao": "Onde Jesus nasceu?",
      "alternativas": [
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Nazaré", "certa": false },
        { "alternativa": "Belém", "certa": true },
        { "alternativa": "Cafarnaum", "certa": false }
      ]
    },
    {
      "questao": "Quem matou Abel?",
      "alternativas": [
        { "alternativa": "Lameque", "certa": false },
        { "alternativa": "Caim", "certa": true },
        { "alternativa": "Esaú", "certa": false },
        { "alternativa": "Ismael", "certa": false }
      ]
    },
    {
      "questao": "Qual o último livro da Bíblia?",
      "alternativas": [
        { "alternativa": "Apocalipse", "certa": true },
        { "alternativa": "Atos", "certa": false },
        { "alternativa": "Hebreus", "certa": false },
        { "alternativa": "Malaquias", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a primeira praga do Egito?",
      "alternativas": [
        { "alternativa": "Sapos", "certa": false },
        { "alternativa": "Água em sangue", "certa": true },
        { "alternativa": "Moscas", "certa": false },
        { "alternativa": "Trevas", "certa": false }
      ]
    },
    {
      "questao": "Quantos irmãos tinha José, filho de Jacó?",
      "alternativas": [
        { "alternativa": "10", "certa": false },
        { "alternativa": "11", "certa": true },
        { "alternativa": "12", "certa": false },
        { "alternativa": "7", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a cidade onde Jesus cresceu?",
      "alternativas": [
        { "alternativa": "Belém", "certa": false },
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Nazaré", "certa": true },
        { "alternativa": "Cafarnaum", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a primeira mulher criada por Deus?",
      "alternativas": [
        { "alternativa": "Maria", "certa": false },
        { "alternativa": "Eva", "certa": true },
        { "alternativa": "Sara", "certa": false },
        { "alternativa": "Rute", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro apóstolo a ser martirizado?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "Tiago, filho de Zebedeu", "certa": true },
        { "alternativa": "André", "certa": false }
      ]
    },
    {
      "questao": "Qual profeta foi lançado numa fornalha de fogo?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Daniel", "certa": false },
        { "alternativa": "Nenhum deles. Foram Sadraque, Mesaque e Abednego", "certa": true }
      ]
    },
    {
      "questao": "Qual o nome da montanha onde Moisés recebeu os Dez Mandamentos?",
      "alternativas": [
        { "alternativa": "Monte Sião", "certa": false },
        { "alternativa": "Monte das Oliveiras", "certa": false },
        { "alternativa": "Monte Sinai", "certa": true },
        { "alternativa": "Monte Carmelo", "certa": false }
      ]
    },
    {
      "questao": "Quem era o discípulo que andou sobre as águas com Jesus?",
      "alternativas": [
        { "alternativa": "João", "certa": false },
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "Pedro", "certa": true },
        { "alternativa": "Tomé", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do filho que Abraão teve com Sara?",
      "alternativas": [
        { "alternativa": "Ismael", "certa": false },
        { "alternativa": "Jacó", "certa": false },
        { "alternativa": "Isaque", "certa": true },
        { "alternativa": "José", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do rio onde o bebê Moisés foi encontrado?",
      "alternativas": [
        { "alternativa": "Rio Jordão", "certa": false },
        { "alternativa": "Rio Eufrates", "certa": false },
        { "alternativa": "Rio Nilo", "certa": true },
        { "alternativa": "Rio Tigre", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o pai de João Batista?",
      "alternativas": [
        { "alternativa": "José", "certa": false },
        { "alternativa": "Abraão", "certa": false },
        { "alternativa": "Zacarias", "certa": true },
        { "alternativa": "Pedro", "certa": false }
      ]
    },
    {
      "questao": "Quem escreveu a maior parte do Novo Testamento?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "Paulo", "certa": true }
      ]
    },
    {
      "questao": "Quantos pães e peixes Jesus multiplicou para alimentar a multidão?",
      "alternativas": [
        { "alternativa": "2 pães e 5 peixes", "certa": false },
        { "alternativa": "5 pães e 2 peixes", "certa": true },
        { "alternativa": "12 pães e 2 peixes", "certa": false },
        { "alternativa": "7 pães e 7 peixes", "certa": false }
      ]
    },
    {
      "questao": "Qual era o ofício de Lázaro, irmão de Marta e Maria, antes de ser ressuscitado?",
      "alternativas": [
        { "alternativa": "Pescador", "certa": false },
        { "alternativa": "Não é mencionado", "certa": true },
        { "alternativa": "Carpinteiro", "certa": false },
        { "alternativa": "Fazendeiro", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última refeição de Jesus com seus discípulos?",
      "alternativas": [
        { "alternativa": "A Ceia da Páscoa", "certa": true },
        { "alternativa": "O milagre dos pães", "certa": false },
        { "alternativa": "Um banquete em Betânia", "certa": false },
        { "alternativa": "Uma refeição em Emaús", "certa": false }
      ]
    },
    {
      "questao": "Qual a cidade de onde Jesus expulsou os vendilhões do templo?",
      "alternativas": [
        { "alternativa": "Jerusalém", "certa": true },
        { "alternativa": "Belém", "certa": false },
        { "alternativa": "Nazaré", "certa": false },
        { "alternativa": "Cafarnaum", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última palavra de Jesus na cruz?",
      "alternativas": [
        { "alternativa": "Pai, perdoa-os", "certa": false },
        { "alternativa": "Está consumado", "certa": true },
        { "alternativa": "Tenho sede", "certa": false },
        { "alternativa": "Pai, em tuas mãos entrego o meu espírito", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que foi levado ao céu em um redemoinho?",
      "alternativas": [
        { "alternativa": "Elias", "certa": true },
        { "alternativa": "Ezequiel", "certa": false },
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Isaías", "certa": false }
      ]
    },
    {
      "questao": "Qual animal falou com Balaão?",
      "alternativas": [
        { "alternativa": "Um cavalo", "certa": false },
        { "alternativa": "Uma jumenta", "certa": true },
        { "alternativa": "Uma ovelha", "certa": false },
        { "alternativa": "Um camelo", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a primeira pessoa a ser curada por Jesus na Bíblia?",
      "alternativas": [
        { "alternativa": "O cego Bartimeu", "certa": false },
        { "alternativa": "O leproso", "certa": true },
        { "alternativa": "A sogra de Pedro", "certa": false },
        { "alternativa": "O paralítico", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da montanha onde Jesus fez o Sermão da Montanha?",
      "alternativas": [
        { "alternativa": "Monte Sião", "certa": false },
        { "alternativa": "Monte Carmelo", "certa": false },
        { "alternativa": "Não é mencionado o nome", "certa": true },
        { "alternativa": "Monte das Oliveiras", "certa": false }
      ]
    },
    {
      "questao": "Quem era o rei de Babilônia que viu a escrita na parede?",
      "alternativas": [
        { "alternativa": "Nabucodonosor", "certa": false },
        { "alternativa": "Belsazar", "certa": true },
        { "alternativa": "Ciro", "certa": false },
        { "alternativa": "Dario", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do jardim onde Adão e Eva viveram?",
      "alternativas": [
        { "alternativa": "Getsêmani", "certa": false },
        { "alternativa": "Éden", "certa": true },
        { "alternativa": "Jardim das Oliveiras", "certa": false },
        { "alternativa": "Jardim do Rei", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a primeira criatura viva que Noé soltou da arca?",
      "alternativas": [
        { "alternativa": "Uma pomba", "certa": false },
        { "alternativa": "Um corvo", "certa": true },
        { "alternativa": "Uma andorinha", "certa": false },
        { "alternativa": "Uma águia", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o homem que, ao ser batizado, teve os olhos abertos e pôde ver novamente?",
      "alternativas": [
        { "alternativa": "Paulo (Saulo)", "certa": true },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "Estevão", "certa": false }
      ]
    },
    {
      "questao": "Quantos discípulos Jesus tinha?",
      "alternativas": [
        { "alternativa": "7", "certa": false },
        { "alternativa": "10", "certa": false },
        { "alternativa": "12", "certa": true },
        { "alternativa": "100", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do anjo que anunciou a Maria que ela seria a mãe de Jesus?",
      "alternativas": [
        { "alternativa": "Miguel", "certa": false },
        { "alternativa": "Gabriel", "certa": true },
        { "alternativa": "Rafael", "certa": false },
        { "alternativa": "Satanás", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da mãe de Sansão?",
      "alternativas": [
        { "alternativa": "Dalila", "certa": false },
        { "alternativa": "Manoá", "certa": false },
        { "alternativa": "Não é mencionado", "certa": false },
        { "alternativa": "Não é mencionado o nome, apenas que era a esposa de Manoá", "certa": true }
      ]
    },
    {
      "questao": "Quem foi o pai de Davi?",
      "alternativas": [
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Jessé", "certa": true },
        { "alternativa": "Salomão", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Qual a cidade de Jesus que ficou conhecida como a 'cidade de Davi'?",
      "alternativas": [
        { "alternativa": "Nazaré", "certa": false },
        { "alternativa": "Belém", "certa": true },
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Cafarnaum", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro apóstolo a ser chamado por Jesus?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": true },
        { "alternativa": "Tiago", "certa": false }
      ]
    },
    {
      "questao": "Qual dos evangelhos não contém a história do nascimento de Jesus?",
      "alternativas": [
        { "alternativa": "Mateus", "certa": false },
        { "alternativa": "Marcos", "certa": true },
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do apóstolo que era um zelote?",
      "alternativas": [
        { "alternativa": "Judas Tadeu", "certa": false },
        { "alternativa": "Simão, o Zelote", "certa": true },
        { "alternativa": "Judas Iscariotes", "certa": false },
        { "alternativa": "Mateus", "certa": false }
      ]
    },
    {
      "questao": "Quem escreveu o livro de Apocalipse?",
      "alternativas": [
        { "alternativa": "João", "certa": true },
        { "alternativa": "Paulo", "certa": false },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Tiago", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última praga do Egito?",
      "alternativas": [
        { "alternativa": "Gafanhotos", "certa": false },
        { "alternativa": "Morte dos primogênitos", "certa": true },
        { "alternativa": "Trevas", "certa": false },
        { "alternativa": "Chagas e úlceras", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a montanha onde Jesus foi transfigurado?",
      "alternativas": [
        { "alternativa": "Monte Sião", "certa": false },
        { "alternativa": "Monte Tabor", "certa": false },
        { "alternativa": "Monte Hermom", "certa": true },
        { "alternativa": "Monte das Oliveiras", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o profeta que foi jogado em um poço, mas foi salvo?",
      "alternativas": [
        { "alternativa": "Jeremias", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Daniel", "certa": false },
        { "alternativa": "Jonas", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a primeira pessoa a ser ressuscitada por Jesus?",
      "alternativas": [
        { "alternativa": "Lázaro", "certa": false },
        { "alternativa": "O filho da viúva de Naim", "certa": true },
        { "alternativa": "A filha de Jairo", "certa": false },
        { "alternativa": "Marta", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a primeira nação a ser libertada do Egito?",
      "alternativas": [
        { "alternativa": "Israel", "certa": true },
        { "alternativa": "Judá", "certa": false },
        { "alternativa": "Os Cananeus", "certa": false },
        { "alternativa": "Os Jebuseus", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o homem que matou um leão com as próprias mãos?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Sansão", "certa": true },
        { "alternativa": "Daniel", "certa": false },
        { "alternativa": "Moisés", "certa": false }
      ]
    },
    {
      "questao": "Qual dos evangelhos é o único a usar a palavra 'igreja'?",
      "alternativas": [
        { "alternativa": "Mateus", "certa": true },
        { "alternativa": "Marcos", "certa": false },
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei de Israel que teve o seu reinado mais curto?",
      "alternativas": [
        { "alternativa": "Zimri", "certa": true },
        { "alternativa": "Josias", "certa": false },
        { "alternativa": "Ocozias", "certa": false },
        { "alternativa": "Jeoacaz", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a única mulher a governar o Reino de Judá?",
      "alternativas": [
        { "alternativa": "Atalia", "certa": true },
        { "alternativa": "Jezabel", "certa": false },
        { "alternativa": "Ester", "certa": false },
        { "alternativa": "Abigail", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o homem que, com a ajuda de Jael, derrotou o exército cananeu?",
      "alternativas": [
        { "alternativa": "Débora", "certa": false },
        { "alternativa": "Baraque", "certa": true },
        { "alternativa": "Gideão", "certa": false },
        { "alternativa": "Jefté", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade de onde Jesus foi expulso após ler o rolo de Isaías na sinagoga?",
      "alternativas": [
        { "alternativa": "Nazaré", "certa": true },
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Belém", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do rei que se disfarçou para lutar na guerra?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Acabe", "certa": true },
        { "alternativa": "Josias", "certa": false }
      ]
    },
    {
      "questao": "Quem era o discípulo que foi chamado de 'o amado' por Jesus?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": true },
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "Tomé", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do filho de Noé que foi pai dos cananeus?",
      "alternativas": [
        { "alternativa": "Sem", "certa": false },
        { "alternativa": "Cam", "certa": true },
        { "alternativa": "Jafé", "certa": false },
        { "alternativa": "Cão", "certa": false }
      ]
    },
    {
      "questao": "Quem era o profeta que foi enviado para pregar em Nínive?",
      "alternativas": [
        { "alternativa": "Jonas", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Oséias", "certa": false },
        { "alternativa": "Naum", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do irmão de Lázaro?",
      "alternativas": [
        { "alternativa": "Não é mencionado", "certa": false },
        { "alternativa": "Não há registro bíblico de irmão, apenas irmãs", "certa": true },
        { "alternativa": "Judas", "certa": false },
        { "alternativa": "Simão", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última cidade que Jesus visitou antes de ser crucificado?",
      "alternativas": [
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "Belém", "certa": false },
        { "alternativa": "Jerusalém", "certa": true },
        { "alternativa": "Nazaré", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da mulher que ungiu os pés de Jesus com um perfume caríssimo?",
      "alternativas": [
        { "alternativa": "Maria, irmã de Marta", "certa": true },
        { "alternativa": "Maria Madalena", "certa": false },
        { "alternativa": "Maria, mãe de Jesus", "certa": false },
        { "alternativa": "Marta", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade onde Jesus andou sobre as águas?",
      "alternativas": [
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "O Mar da Galileia", "certa": true },
        { "alternativa": "Jericó", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro a ser chamado de 'cristão'?",
      "alternativas": [
        { "alternativa": "Jesus", "certa": false },
        { "alternativa": "O primeiro apóstolo", "certa": false },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Os discípulos em Antioquia", "certa": true }
      ]
    },
    {
      "questao": "Quem foi o primeiro a ser chamado de 'profeta' na Bíblia?",
      "alternativas": [
        { "alternativa": "Moisés", "certa": false },
        { "alternativa": "Abraão", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do profeta que foi levado ao céu sem provar a morte?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Enoque", "certa": true },
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Jeremias", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o rei de Israel que tentou matar Davi com uma lança?",
      "alternativas": [
        { "alternativa": "Salomão", "certa": false },
        { "alternativa": "Saul", "certa": true },
        { "alternativa": "Absalão", "certa": false },
        { "alternativa": "Acabe", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do pai de Moisés?",
      "alternativas": [
        { "alternativa": "Abraão", "certa": false },
        { "alternativa": "Amrão", "certa": true },
        { "alternativa": "Jacó", "certa": false },
        { "alternativa": "Levi", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro juiz de Israel?",
      "alternativas": [
        { "alternativa": "Sansão", "certa": false },
        { "alternativa": "Gideão", "certa": false },
        { "alternativa": "Otoniel", "certa": true },
        { "alternativa": "Débora", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do rei persa que permitiu aos judeus retornarem a Jerusalém?",
      "alternativas": [
        { "alternativa": "Ciro", "certa": true },
        { "alternativa": "Dario", "certa": false },
        { "alternativa": "Artaxerxes", "certa": false },
        { "alternativa": "Xerxes", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que teve o cabelo cortado e perdeu a sua força?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Sansão", "certa": true },
        { "alternativa": "Samuel", "certa": false },
        { "alternativa": "Saul", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei que teve o seu reino dividido após a sua morte?",
      "alternativas": [
        { "alternativa": "Salomão", "certa": true },
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Rei Acabe", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade onde Jesus andou sobre a água?",
      "alternativas": [
        { "alternativa": "Mar da Galiléia", "certa": true },
        { "alternativa": "Rio Jordão", "certa": false },
        { "alternativa": "Mar Morto", "certa": false },
        { "alternativa": "Rio Nilo", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a única mulher a governar Israel?",
      "alternativas": [
        { "alternativa": "Jezabel", "certa": false },
        { "alternativa": "Atalia", "certa": true },
        { "alternativa": "Débora", "certa": false },
        { "alternativa": "Ester", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do apóstolo que era o irmão de Simão Pedro?",
      "alternativas": [
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": true },
        { "alternativa": "Judas", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei de Judá que teve o seu reino invadido pela Assíria?",
      "alternativas": [
        { "alternativa": "Ezequias", "certa": true },
        { "alternativa": "Josias", "certa": false },
        { "alternativa": "Manassés", "certa": false },
        { "alternativa": "Jeoaquim", "certa": false }
      ]
    }
  ];

  const media = [
    {
      "questao": "Quem foi o profeta que enfrentou os profetas de Baal no monte Carmelo?",
      "alternativas": [
        { "alternativa": "Eliseu", "certa": false },
        { "alternativa": "Elias", "certa": true },
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Jeremias", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do irmão de Moisés que foi seu porta-voz?",
      "alternativas": [
        { "alternativa": "Arão", "certa": true },
        { "alternativa": "Josué", "certa": false },
        { "alternativa": "Coré", "certa": false },
        { "alternativa": "Nadabe", "certa": false }
      ]
    },
    {
      "questao": "Quantos dias e noites Jesus jejuou no deserto?",
      "alternativas": [
        { "alternativa": "20", "certa": false },
        { "alternativa": "30", "certa": false },
        { "alternativa": "40", "certa": true },
        { "alternativa": "12", "certa": false }
      ]
    },
    {
      "questao": "Quantos livros há no Novo Testamento?",
      "alternativas": [
        { "alternativa": "27", "certa": true },
        { "alternativa": "39", "certa": false },
        { "alternativa": "66", "certa": false },
        { "alternativa": "22", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o pai de João Batista?",
      "alternativas": [
        { "alternativa": "Zacarias", "certa": true },
        { "alternativa": "José", "certa": false },
        { "alternativa": "Simeão", "certa": false },
        { "alternativa": "Anás", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro rei de Israel?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": true },
        { "alternativa": "Salomão", "certa": false },
        { "alternativa": "Jeroboão", "certa": false }
      ]
    },
    {
      "questao": "Qual discípulo era cobrador de impostos antes de seguir Jesus?",
      "alternativas": [
        { "alternativa": "Mateus", "certa": true },
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "Filipe", "certa": false }
      ]
    },
    {
      "questao": "Quem interpretou os sonhos do faraó no Egito?",
      "alternativas": [
        { "alternativa": "Daniel", "certa": false },
        { "alternativa": "José", "certa": true },
        { "alternativa": "Moisés", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o rei conhecido por sua grande sabedoria?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Salomão", "certa": true },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Ezequias", "certa": false }
      ]
    },
    {
      "questao": "Quem foi transformado em estátua de sal por olhar para trás?",
      "alternativas": [
        { "alternativa": "A esposa de Noé", "certa": false },
        { "alternativa": "A esposa de Ló", "certa": true },
        { "alternativa": "Sara", "certa": false },
        { "alternativa": "Rebeca", "certa": false }
      ]
    },
    {
      "questao": "Quantos livros há no Antigo Testamento?",
      "alternativas": [
        { "alternativa": "39", "certa": true },
        { "alternativa": "27", "certa": false },
        { "alternativa": "66", "certa": false },
        { "alternativa": "40", "certa": false }
      ]
    },
    {
      "questao": "Em que cidade os discípulos foram pela primeira vez chamados 'cristãos'?",
      "alternativas": [
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Antioquia", "certa": true },
        { "alternativa": "Éfeso", "certa": false },
        { "alternativa": "Roma", "certa": false }
      ]
    },
    {
      "questao": "Qual profeta foi levado ao céu em um carro de fogo?",
      "alternativas": [
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Elias", "certa": true },
        { "alternativa": "Eliseu", "certa": false },
        { "alternativa": "Jeremias", "certa": false }
      ]
    },
    {
      "questao": "Qual discípulo escreveu o Apocalipse?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": true },
        { "alternativa": "Paulo", "certa": false },
        { "alternativa": "Tiago", "certa": false }
      ]
    },
    {
      "questao": "Qual era o discípulo apelidado de 'o incrédulo'?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "Tomé", "certa": true },
        { "alternativa": "Mateus", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a primeira pessoa a ver Jesus ressuscitado?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Maria Madalena", "certa": true },
        { "alternativa": "João", "certa": false },
        { "alternativa": "Tomé", "certa": false }
      ]
    },
    {
      "questao": "Qual era a língua original do Antigo Testamento?",
      "alternativas": [
        { "alternativa": "Grego", "certa": false },
        { "alternativa": "Aramaico", "certa": false },
        { "alternativa": "Latim", "certa": false },
        { "alternativa": "Hebraico", "certa": true }
      ]
    },
    {
      "questao": "Quem era o governador romano que condenou Jesus à morte?",
      "alternativas": [
        { "alternativa": "Herodes", "certa": false },
        { "alternativa": "Pilatos", "certa": true },
        { "alternativa": "Caifás", "certa": false },
        { "alternativa": "César Augusto", "certa": false }
      ]
    },
    {
      "questao": "Em qual cidade foi a primeira igreja cristã?",
      "alternativas": [
        { "alternativa": "Antioquia", "certa": false },
        { "alternativa": "Roma", "certa": false },
        { "alternativa": "Jerusalém", "certa": true },
        { "alternativa": "Éfeso", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que viu o exército sírio cercado por cavalos e carros de fogo?",
      "alternativas": [
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Ezequiel", "certa": false },
        { "alternativa": "Eliseu", "certa": true },
        { "alternativa": "Jeremias", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade cujas muralhas caíram após o povo dar sete voltas e tocar as trombetas?",
      "alternativas": [
        { "alternativa": "Sodoma", "certa": false },
        { "alternativa": "Jericó", "certa": true },
        { "alternativa": "Babilônia", "certa": false },
        { "alternativa": "Nínive", "certa": false }
      ]
    },
    {
      "questao": "Quantos leprosos Jesus curou no caminho para Jerusalém, e quantos voltaram para agradecer?",
      "alternativas": [
        { "alternativa": "10 curados, 1 agradeceu", "certa": true },
        { "alternativa": "5 curados, 1 agradeceu", "certa": false },
        { "alternativa": "10 curados, todos agradeceram", "certa": false },
        { "alternativa": "5 curados, 5 agradeceram", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do jardim onde Jesus orou antes de ser preso?",
      "alternativas": [
        { "alternativa": "Éden", "certa": false },
        { "alternativa": "Getsêmani", "certa": true },
        { "alternativa": "Caná", "certa": false },
        { "alternativa": "Jerusalém", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei de Israel que teve o coração endurecido por Deus?",
      "alternativas": [
        { "alternativa": "Faraó", "certa": false },
        { "alternativa": "Nabucodonosor", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Não há rei com essa descrição", "certa": true }
      ]
    },
    {
      "questao": "Qual o nome da profetisa que ajudou a juíza Débora a derrotar o exército cananeu?",
      "alternativas": [
        { "alternativa": "Jael", "certa": true },
        { "alternativa": "Miriam", "certa": false },
        { "alternativa": "Rute", "certa": false },
        { "alternativa": "Abigail", "certa": false }
      ]
    },
    {
      "questao": "Qual o apóstolo que era conhecido como um 'filho do trovão' junto com seu irmão?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": true },
        { "alternativa": "Tomé", "certa": false },
        { "alternativa": "Filipe", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do centurião romano que declarou a inocência de Jesus na cruz?",
      "alternativas": [
        { "alternativa": "Pilatos", "certa": false },
        { "alternativa": "Longinus", "certa": true },
        { "alternativa": "Simeão", "certa": false },
        { "alternativa": "Cornélio", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro profeta a ser levado cativo para a Babilônia?",
      "alternativas": [
        { "alternativa": "Daniel", "certa": true },
        { "alternativa": "Ezequiel", "certa": false },
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Isaías", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o rei de Israel que construiu o primeiro Templo de Jerusalém?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Salomão", "certa": true },
        { "alternativa": "Josias", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do pai de Jesus, que foi carpinteiro?",
      "alternativas": [
        { "alternativa": "José", "certa": true },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Jacó", "certa": false },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Qual profeta foi lançado na cova dos leões?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Daniel", "certa": true },
        { "alternativa": "José", "certa": false },
        { "alternativa": "Jonas", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do apóstolo que era cobrador de impostos?",
      "alternativas": [
        { "alternativa": "João", "certa": false },
        { "alternativa": "Mateus", "certa": true },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Tiago", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a primeira pessoa a ser curada por Jesus na Bíblia?",
      "alternativas": [
        { "alternativa": "O cego Bartimeu", "certa": false },
        { "alternativa": "O leproso", "certa": true },
        { "alternativa": "A sogra de Pedro", "certa": false },
        { "alternativa": "O paralítico", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da montanha onde Jesus fez o Sermão da Montanha?",
      "alternativas": [
        { "alternativa": "Monte Sião", "certa": false },
        { "alternativa": "Monte Carmelo", "certa": false },
        { "alternativa": "Não é mencionado o nome", "certa": true },
        { "alternativa": "Monte das Oliveiras", "certa": false }
      ]
    },
    {
      "questao": "Quem era o rei de Babilônia que viu a escrita na parede?",
      "alternativas": [
        { "alternativa": "Nabucodonosor", "certa": false },
        { "alternativa": "Belsazar", "certa": true },
        { "alternativa": "Ciro", "certa": false },
        { "alternativa": "Dario", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do jardim onde Adão e Eva viveram?",
      "alternativas": [
        { "alternativa": "Getsêmani", "certa": false },
        { "alternativa": "Éden", "certa": true },
        { "alternativa": "Jardim das Oliveiras", "certa": false },
        { "alternativa": "Jardim do Rei", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a primeira criatura viva que Noé soltou da arca?",
      "alternativas": [
        { "alternativa": "Uma pomba", "certa": false },
        { "alternativa": "Um corvo", "certa": true },
        { "alternativa": "Uma andorinha", "certa": false },
        { "alternativa": "Uma águia", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o homem que, ao ser batizado, teve os olhos abertos e pôde ver novamente?",
      "alternativas": [
        { "alternativa": "Paulo (Saulo)", "certa": true },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "Estevão", "certa": false }
      ]
    },
    {
      "questao": "Quantos discípulos Jesus tinha?",
      "alternativas": [
        { "alternativa": "7", "certa": false },
        { "alternativa": "10", "certa": false },
        { "alternativa": "12", "certa": true },
        { "alternativa": "100", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do anjo que anunciou a Maria que ela seria a mãe de Jesus?",
      "alternativas": [
        { "alternativa": "Miguel", "certa": false },
        { "alternativa": "Gabriel", "certa": true },
        { "alternativa": "Rafael", "certa": false },
        { "alternativa": "Satanás", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da mãe de Sansão?",
      "alternativas": [
        { "alternativa": "Dalila", "certa": false },
        { "alternativa": "Manoá", "certa": false },
        { "alternativa": "Não é mencionado", "certa": true },
        { "alternativa": "Ester", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o pai de Davi?",
      "alternativas": [
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Jessé", "certa": true },
        { "alternativa": "Salomão", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Qual a cidade de Jesus que ficou conhecida como a 'cidade de Davi'?",
      "alternativas": [
        { "alternativa": "Nazaré", "certa": false },
        { "alternativa": "Belém", "certa": true },
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Cafarnaum", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro apóstolo a ser chamado por Jesus?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": true },
        { "alternativa": "Tiago", "certa": false }
      ]
    },
    {
      "questao": "Qual dos evangelhos não contém a história do nascimento de Jesus?",
      "alternativas": [
        { "alternativa": "Mateus", "certa": false },
        { "alternativa": "Marcos", "certa": true },
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do apóstolo que era um zelote?",
      "alternativas": [
        { "alternativa": "Judas Tadeu", "certa": false },
        { "alternativa": "Simão, o Zelote", "certa": true },
        { "alternativa": "Judas Iscariotes", "certa": false },
        { "alternativa": "Mateus", "certa": false }
      ]
    },
    {
      "questao": "Quem escreveu o livro de Apocalipse?",
      "alternativas": [
        { "alternativa": "João", "certa": true },
        { "alternativa": "Paulo", "certa": false },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Tiago", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última praga do Egito?",
      "alternativas": [
        { "alternativa": "Gafanhotos", "certa": false },
        { "alternativa": "Morte dos primogênitos", "certa": true },
        { "alternativa": "Trevas", "certa": false },
        { "alternativa": "Chagas e úlceras", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a montanha onde Jesus foi transfigurado?",
      "alternativas": [
        { "alternativa": "Monte Sião", "certa": false },
        { "alternativa": "Monte Tabor", "certa": false },
        { "alternativa": "Monte Hermom", "certa": true },
        { "alternativa": "Monte das Oliveiras", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o profeta que foi jogado em um poço, mas foi salvo?",
      "alternativas": [
        { "alternativa": "Jeremias", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Daniel", "certa": false },
        { "alternativa": "Jonas", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a primeira pessoa a ser ressuscitada por Jesus?",
      "alternativas": [
        { "alternativa": "Lázaro", "certa": false },
        { "alternativa": "O filho da viúva de Naim", "certa": true },
        { "alternativa": "A filha de Jairo", "certa": false },
        { "alternativa": "Marta", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a primeira nação a ser libertada do Egito?",
      "alternativas": [
        { "alternativa": "Israel", "certa": true },
        { "alternativa": "Judá", "certa": false },
        { "alternativa": "Os Cananeus", "certa": false },
        { "alternativa": "Os Jebuseus", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o homem que matou um leão com as próprias mãos?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Sansão", "certa": true },
        { "alternativa": "Daniel", "certa": false },
        { "alternativa": "Moisés", "certa": false }
      ]
    },
    {
      "questao": "Qual dos evangelhos é o único a usar a palavra 'igreja'?",
      "alternativas": [
        { "alternativa": "Mateus", "certa": true },
        { "alternativa": "Marcos", "certa": false },
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei de Israel que teve o seu reinado mais curto?",
      "alternativas": [
        { "alternativa": "Zimri", "certa": true },
        { "alternativa": "Josias", "certa": false },
        { "alternativa": "Ocozias", "certa": false },
        { "alternativa": "Jeoacaz", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a única mulher a governar o Reino de Judá?",
      "alternativas": [
        { "alternativa": "Atalia", "certa": true },
        { "alternativa": "Jezabel", "certa": false },
        { "alternativa": "Ester", "certa": false },
        { "alternativa": "Abigail", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o homem que, com a ajuda de Jael, derrotou o exército cananeu?",
      "alternativas": [
        { "alternativa": "Débora", "certa": false },
        { "alternativa": "Baraque", "certa": true },
        { "alternativa": "Gideão", "certa": false },
        { "alternativa": "Jefté", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade de onde Jesus foi expulso após ler o rolo de Isaías na sinagoga?",
      "alternativas": [
        { "alternativa": "Nazaré", "certa": true },
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Belém", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do rei que se disfarçou para lutar na guerra?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Acabe", "certa": true },
        { "alternativa": "Josias", "certa": false }
      ]
    },
    {
      "questao": "Quem era o discípulo que foi chamado de 'o amado' por Jesus?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": true },
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "Tomé", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do filho de Noé que foi pai dos cananeus?",
      "alternativas": [
        { "alternativa": "Sem", "certa": false },
        { "alternativa": "Cam", "certa": true },
        { "alternativa": "Jafé", "certa": false },
        { "alternativa": "Cão", "certa": false }
      ]
    },
    {
      "questao": "Quem era o profeta que foi enviado para pregar em Nínive?",
      "alternativas": [
        { "alternativa": "Jonas", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Oséias", "certa": false },
        { "alternativa": "Naum", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do irmão de Lázaro?",
      "alternativas": [
        { "alternativa": "Não é mencionado", "certa": false },
        { "alternativa": "Não há registro bíblico de irmão, apenas irmãs", "certa": true },
        { "alternativa": "Judas", "certa": false },
        { "alternativa": "Simão", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última cidade que Jesus visitou antes de ser crucificado?",
      "alternativas": [
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "Belém", "certa": false },
        { "alternativa": "Jerusalém", "certa": true },
        { "alternativa": "Nazaré", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da mulher que ungiu os pés de Jesus com um perfume caríssimo?",
      "alternativas": [
        { "alternativa": "Maria, irmã de Marta", "certa": true },
        { "alternativa": "Maria Madalena", "certa": false },
        { "alternativa": "Maria, mãe de Jesus", "certa": false },
        { "alternativa": "Marta", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade onde Jesus andou sobre as águas?",
      "alternativas": [
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "Galileia", "certa": true },
        { "alternativa": "Jericó", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro a ser chamado de 'cristão'?",
      "alternativas": [
        { "alternativa": "Jesus", "certa": false },
        { "alternativa": "O primeiro apóstolo", "certa": false },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Os discípulos em Antioquia", "certa": true }
      ]
    },
    {
      "questao": "Quem foi o primeiro a ser chamado de 'profeta' na Bíblia?",
      "alternativas": [
        { "alternativa": "Moisés", "certa": false },
        { "alternativa": "Abraão", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do profeta que foi levado ao céu sem provar a morte?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Enoque", "certa": true },
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Jeremias", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o rei de Israel que tentou matar Davi com uma lança?",
      "alternativas": [
        { "alternativa": "Salomão", "certa": false },
        { "alternativa": "Saul", "certa": true },
        { "alternativa": "Absalão", "certa": false },
        { "alternativa": "Acabe", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do pai de Moisés?",
      "alternativas": [
        { "alternativa": "Abraão", "certa": false },
        { "alternativa": "Amrão", "certa": true },
        { "alternativa": "Jacó", "certa": false },
        { "alternativa": "Levi", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro juiz de Israel?",
      "alternativas": [
        { "alternativa": "Sansão", "certa": false },
        { "alternativa": "Gideão", "certa": false },
        { "alternativa": "Otoniel", "certa": true },
        { "alternativa": "Débora", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do rei persa que permitiu aos judeus retornarem a Jerusalém?",
      "alternativas": [
        { "alternativa": "Ciro", "certa": true },
        { "alternativa": "Dario", "certa": false },
        { "alternativa": "Artaxerxes", "certa": false },
        { "alternativa": "Xerxes", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que teve o cabelo cortado e perdeu a sua força?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Sansão", "certa": true },
        { "alternativa": "Samuel", "certa": false },
        { "alternativa": "Saul", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei que teve o seu reino dividido após a sua morte?",
      "alternativas": [
        { "alternativa": "Salomão", "certa": true },
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Rei Acabe", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade onde Jesus andou sobre a água?",
      "alternativas": [
        { "alternativa": "Mar da Galiléia", "certa": true },
        { "alternativa": "Rio Jordão", "certa": false },
        { "alternativa": "Mar Morto", "certa": false },
        { "alternativa": "Rio Nilo", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a única mulher a governar Israel?",
      "alternativas": [
        { "alternativa": "Jezabel", "certa": false },
        { "alternativa": "Atalia", "certa": true },
        { "alternativa": "Débora", "certa": false },
        { "alternativa": "Ester", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do apóstolo que era o irmão de Simão Pedro?",
      "alternativas": [
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": true },
        { "alternativa": "Judas", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei de Judá que teve o seu reino invadido pela Assíria?",
      "alternativas": [
        { "alternativa": "Ezequias", "certa": true },
        { "alternativa": "Josias", "certa": false },
        { "alternativa": "Manassés", "certa": false },
        { "alternativa": "Jeoaquim", "certa": false }
      ]
    }
  ];

  const dificil = [
    {
      "questao": "Em que cidade Paulo pregou no Areópago?",
      "alternativas": [
        { "alternativa": "Roma", "certa": false },
        { "alternativa": "Atenas", "certa": true },
        { "alternativa": "Corinto", "certa": false },
        { "alternativa": "Éfeso", "certa": false }
      ]
    },
    {
      "questao": "Quem sucedeu Moisés na liderança de Israel?",
      "alternativas": [
        { "alternativa": "Samuel", "certa": false },
        { "alternativa": "Arão", "certa": false },
        { "alternativa": "Josué", "certa": true },
        { "alternativa": "Gideão", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome original de Abraão?",
      "alternativas": [
        { "alternativa": "Abrão", "certa": true },
        { "alternativa": "Abner", "certa": false },
        { "alternativa": "Azarias", "certa": false },
        { "alternativa": "Abisai", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a mãe do profeta Samuel?",
      "alternativas": [
        { "alternativa": "Ana", "certa": true },
        { "alternativa": "Rebeca", "certa": false },
        { "alternativa": "Raquel", "certa": false },
        { "alternativa": "Sara", "certa": false }
      ]
    },
    {
      "questao": "Qual profeta casou-se com uma prostituta como símbolo profético?",
      "alternativas": [
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Oséias", "certa": true },
        { "alternativa": "Ezequiel", "certa": false },
        { "alternativa": "Isaías", "certa": false }
      ]
    },
    {
      "questao": "Qual imperador romano ordenou o recenseamento que levou José e Maria a Belém?",
      "alternativas": [
        { "alternativa": "César Augusto", "certa": true },
        { "alternativa": "Tibério", "certa": false },
        { "alternativa": "Nero", "certa": false },
        { "alternativa": "Cláudio", "certa": false }
      ]
    },
    {
      "questao": "Quantos anos viveu Matusalém?",
      "alternativas": [
        { "alternativa": "900 anos", "certa": false },
        { "alternativa": "969 anos", "certa": true },
        { "alternativa": "832 anos", "certa": false },
        { "alternativa": "120 anos", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que anunciou o nascimento em Belém?",
      "alternativas": [
        { "alternativa": "Miquéias", "certa": true },
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Zacarias", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o juiz que derrotou os midianitas com apenas 300 homens?",
      "alternativas": [
        { "alternativa": "Gideão", "certa": true },
        { "alternativa": "Sansão", "certa": false },
        { "alternativa": "Jefté", "certa": false },
        { "alternativa": "Débora", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da mãe de João Marcos, onde muitos cristãos se reuniam em oração?",
      "alternativas": [
        { "alternativa": "Lídia", "certa": false },
        { "alternativa": "Maria", "certa": true },
        { "alternativa": "Marta", "certa": false },
        { "alternativa": "Priscila", "certa": false }
      ]
    },
    {
      "questao": "Em qual rio Jesus foi batizado?",
      "alternativas": [
        { "alternativa": "Jordão", "certa": true },
        { "alternativa": "Eufrates", "certa": false },
        { "alternativa": "Tigre", "certa": false },
        { "alternativa": "Nilo", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do homem rico que pediu o corpo de Jesus a Pilatos?",
      "alternativas": [
        { "alternativa": "Simão de Cirene", "certa": false },
        { "alternativa": "José de Arimateia", "certa": true },
        { "alternativa": "Nicodemos", "certa": false },
        { "alternativa": "Gamaliel", "certa": false }
      ]
    },
    {
      "questao": "Qual profeta teve a visão do vale de ossos secos?",
      "alternativas": [
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Ezequiel", "certa": true },
        { "alternativa": "Daniel", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a rainha que arriscou sua vida para salvar o povo judeu?",
      "alternativas": [
        { "alternativa": "Ester", "certa": true },
        { "alternativa": "Débora", "certa": false },
        { "alternativa": "Rute", "certa": false },
        { "alternativa": "Ana", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do sumo sacerdote no tempo da crucificação de Jesus?",
      "alternativas": [
        { "alternativa": "Caifás", "certa": true },
        { "alternativa": "Anás", "certa": false },
        { "alternativa": "Gamaliel", "certa": false },
        { "alternativa": "Zacarias", "certa": false }
      ]
    },
    {
      "questao": "Qual dos evangelhos é o único a registrar a parábola do bom samaritano?",
      "alternativas": [
        { "alternativa": "Mateus", "certa": false },
        { "alternativa": "Marcos", "certa": false },
        { "alternativa": "Lucas", "certa": true },
        { "alternativa": "João", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que foi comido por cães após ser jogado de uma janela?",
      "alternativas": [
        { "alternativa": "Acabe", "certa": false },
        { "alternativa": "Jezabel", "certa": true },
        { "alternativa": "Jorão", "certa": false },
        { "alternativa": "Ocozias", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do centurião cuja fé foi elogiada por Jesus, que disse que não tinha encontrado fé assim em Israel?",
      "alternativas": [
        { "alternativa": "Cornélio", "certa": false },
        { "alternativa": "Simeão", "certa": false },
        { "alternativa": "O que teve o servo curado", "certa": true },
        { "alternativa": "Longinus", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do pai de Abraão?",
      "alternativas": [
        { "alternativa": "Noé", "certa": false },
        { "alternativa": "Terá", "certa": true },
        { "alternativa": "Harã", "certa": false },
        { "alternativa": "Sem", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a única juíza de Israel mencionada na Bíblia?",
      "alternativas": [
        { "alternativa": "Ester", "certa": false },
        { "alternativa": "Débora", "certa": true },
        { "alternativa": "Jael", "certa": false },
        { "alternativa": "Miriã", "certa": false }
      ]
    },
    {
      "questao": "Em que livro da Bíblia encontramos a história do profeta que se sentou debaixo de uma zimbro, pedindo a morte?",
      "alternativas": [
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Ezequiel", "certa": false },
        { "alternativa": "1 Reis", "certa": true }
      ]
    },
    {
      "questao": "Quantas Bíblias foram traduzidas por João Ferreira de Almeida?",
      "alternativas": [
        { "alternativa": "3", "certa": false },
        { "alternativa": "1", "certa": false },
        { "alternativa": "Ele não traduziu a Bíblia, apenas revisou a tradução de Almeida", "certa": false },
        { "alternativa": "Ele traduziu a Bíblia toda. O nome Almeida se refere a ele", "certa": true }
      ]
    },
    {
      "questao": "Qual o nome do servo de Eliseu que se tornou leproso por ganância?",
      "alternativas": [
        { "alternativa": "Naamã", "certa": false },
        { "alternativa": "Geazi", "certa": true },
        { "alternativa": "Hazael", "certa": false },
        { "alternativa": "Ben-Hadade", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade que foi destruída com fogo e enxofre?",
      "alternativas": [
        { "alternativa": "Babel", "certa": false },
        { "alternativa": "Nínive", "certa": false },
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Sodoma", "certa": true }
      ]
    },
    {
      "questao": "Qual o nome da avó de Davi?",
      "alternativas": [
        { "alternativa": "Rute", "certa": false },
        { "alternativa": "Abigail", "certa": false },
        { "alternativa": "Miriã", "certa": false },
        { "alternativa": "Não há registro bíblico", "certa": true }
      ]
    },
    {
      "questao": "Qual o profeta que foi usado para anunciar o nascimento de João Batista?",
      "alternativas": [
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Malaquias", "certa": true },
        { "alternativa": "Jeremias", "certa": false },
        { "alternativa": "Elias", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o sumo sacerdote que ungiu o rei Saul?",
      "alternativas": [
        { "alternativa": "Eliseu", "certa": false },
        { "alternativa": "Samuel", "certa": true },
        { "alternativa": "Arão", "certa": false },
        { "alternativa": "Jônatas", "certa": false }
      ]
    },
    {
      "questao": "Quantos anos durou a perseguição de Saul contra Davi?",
      "alternativas": [
        { "alternativa": "Não é mencionado na Bíblia", "certa": true },
        { "alternativa": "10 anos", "certa": false },
        { "alternativa": "40 anos", "certa": false },
        { "alternativa": "20 anos", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do discípulo que era irmão de Jesus?",
      "alternativas": [
        { "alternativa": "Tiago", "certa": true },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": false },
        { "alternativa": "Judas", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do rei de Judá que teve o coração tocado por Deus?",
      "alternativas": [
        { "alternativa": "Manassés", "certa": true },
        { "alternativa": "Josias", "certa": false },
        { "alternativa": "Ezequias", "certa": false },
        { "alternativa": "Salomão", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do rei que se disfarçou para lutar na guerra?",
      "alternativas": [
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Acabe", "certa": true },
        { "alternativa": "Josias", "certa": false }
      ]
    },
    {
      "questao": "Quem era o discípulo que foi chamado de 'o amado' por Jesus?",
      "alternativas": [
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "João", "certa": true },
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "Tomé", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do filho de Noé que foi pai dos cananeus?",
      "alternativas": [
        { "alternativa": "Sem", "certa": false },
        { "alternativa": "Cam", "certa": true },
        { "alternativa": "Jafé", "certa": false },
        { "alternativa": "Cão", "certa": false }
      ]
    },
    {
      "questao": "Quem era o profeta que foi enviado para pregar em Nínive?",
      "alternativas": [
        { "alternativa": "Jonas", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Oséias", "certa": false },
        { "alternativa": "Naum", "certa": false }
      ]
    },
    {
      "questao": "Qual era o nome do irmão de Lázaro?",
      "alternativas": [
        { "alternativa": "Lucas", "certa": false },
        { "alternativa": "Não há registro bíblico de irmão, apenas irmãs", "certa": true },
        { "alternativa": "Judas", "certa": false },
        { "alternativa": "Simão", "certa": false }
      ]
    },
    {
      "questao": "Qual foi a última cidade que Jesus visitou antes de ser crucificado?",
      "alternativas": [
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "Belém", "certa": false },
        { "alternativa": "Jerusalém", "certa": true },
        { "alternativa": "Nazaré", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da mulher que ungiu os pés de Jesus com um perfume caríssimo?",
      "alternativas": [
        { "alternativa": "Maria, irmã de Marta", "certa": true },
        { "alternativa": "Maria Madalena", "certa": false },
        { "alternativa": "Maria, mãe de Jesus", "certa": false },
        { "alternativa": "Marta", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade onde Jesus andou sobre as águas?",
      "alternativas": [
        { "alternativa": "Jerusalém", "certa": false },
        { "alternativa": "Cafarnaum", "certa": false },
        { "alternativa": "O Mar da Galileia", "certa": true },
        { "alternativa": "Jericó", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro a ser chamado de 'cristão'?",
      "alternativas": [
        { "alternativa": "Jesus", "certa": false },
        { "alternativa": "O primeiro apóstolo", "certa": false },
        { "alternativa": "Pedro", "certa": false },
        { "alternativa": "Os discípulos em Antioquia", "certa": true }
      ]
    },
    {
      "questao": "Quem foi o primeiro a ser chamado de 'profeta' na Bíblia?",
      "alternativas": [
        { "alternativa": "Moisés", "certa": false },
        { "alternativa": "Abraão", "certa": true },
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Samuel", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do profeta que foi levado ao céu sem provar a morte?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Enoque", "certa": true },
        { "alternativa": "Isaías", "certa": false },
        { "alternativa": "Jeremias", "certa": false }
      ]
    },
    {
      "questao": "Qual foi o rei de Israel que tentou matar Davi com uma lança?",
      "alternativas": [
        { "alternativa": "Salomão", "certa": false },
        { "alternativa": "Saul", "certa": true },
        { "alternativa": "Absalão", "certa": false },
        { "alternativa": "Acabe", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do pai de Moisés?",
      "alternativas": [
        { "alternativa": "Abraão", "certa": false },
        { "alternativa": "Amrão", "certa": true },
        { "alternativa": "Jacó", "certa": false },
        { "alternativa": "Levi", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o primeiro juiz de Israel?",
      "alternativas": [
        { "alternativa": "Sansão", "certa": false },
        { "alternativa": "Gideão", "certa": false },
        { "alternativa": "Otoniel", "certa": true },
        { "alternativa": "Débora", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do rei persa que permitiu aos judeus retornarem a Jerusalém?",
      "alternativas": [
        { "alternativa": "Ciro", "certa": true },
        { "alternativa": "Dario", "certa": false },
        { "alternativa": "Artaxerxes", "certa": false },
        { "alternativa": "Xerxes", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o profeta que teve o cabelo cortado e perdeu a sua força?",
      "alternativas": [
        { "alternativa": "Elias", "certa": false },
        { "alternativa": "Sansão", "certa": true },
        { "alternativa": "Samuel", "certa": false },
        { "alternativa": "Saul", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei que teve o seu reino dividido após a sua morte?",
      "alternativas": [
        { "alternativa": "Salomão", "certa": true },
        { "alternativa": "Davi", "certa": false },
        { "alternativa": "Saul", "certa": false },
        { "alternativa": "Rei Acabe", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome da cidade onde Jesus andou sobre a água?",
      "alternativas": [
        { "alternativa": "Mar da Galiléia", "certa": true },
        { "alternativa": "Rio Jordão", "certa": false },
        { "alternativa": "Mar Morto", "certa": false },
        { "alternativa": "Rio Nilo", "certa": false }
      ]
    },
    {
      "questao": "Quem foi a única mulher a governar Israel?",
      "alternativas": [
        { "alternativa": "Jezabel", "certa": false },
        { "alternativa": "Atalia", "certa": true },
        { "alternativa": "Débora", "certa": false },
          { "alternativa": "Ester", "certa": false }
      ]
    },
    {
      "questao": "Qual o nome do apóstolo que era o irmão de Simão Pedro?",
      "alternativas": [
        { "alternativa": "Tiago", "certa": false },
        { "alternativa": "João", "certa": false },
        { "alternativa": "André", "certa": true },
        { "alternativa": "Judas", "certa": false }
      ]
    },
    {
      "questao": "Quem foi o rei de Judá que teve o seu reino invadido pela Assíria?",
      "alternativas": [
        { "alternativa": "Ezequias", "certa": true },
        { "alternativa": "Josias", "certa": false },
        { "alternativa": "Manassés", "certa": false },
        { "alternativa": "Jeoaquim", "certa": false }
      ]
    }
  ];

  return {
    facil,
    media,
    dificil
  }
}