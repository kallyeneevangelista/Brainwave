const ideaTextElement = document.getElementById('idea-text');
const ideaImageElement = document.getElementById('idea-image');
const generateIdeaButton = document.getElementById('generate-idea-btn');
const filterButton = document.getElementById('filter-btn');
const keywordsInput = document.getElementById('keywords-input');

const ideas = [
  'Criar um aplicativo de delivery de comida vegana',
  'Desenvolver um jogo educativo sobre história do Brasil',
  'Lançar um livro de poesias sobre amor e solidão',
  'Inventar um dispositivo para reciclagem de lixo eletrônico',
  'Criar um serviço de consultoria em finanças pessoais',
  'Desenhar uma linha de roupas sustentáveis',
  'Produzir um documentário sobre a vida de artistas de rua',
  'Criar uma plataforma de ensino online para crianças carentes',
  'Desenvolver uma tecnologia para monitoramento de saúde mental'
];

const images = [
  'https://images.unsplash.com/photo-151968139
