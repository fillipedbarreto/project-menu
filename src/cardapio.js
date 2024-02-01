import enroladinhoMignonImg from './assets/pratos/enroladinho-mignon.jpeg';
import casal20Img from './assets/pratos/casal-20.jpeg';
import burguerPicanhaImg from './assets/pratos/burguer-picanha.jpeg';
import fishChipsImg from './assets/pratos/fish-chips.jpeg';
import risotoCamaraoTrufadoImg from './assets/pratos/risoto-camarao-trufado.jpeg';

import brownieImg from './assets/sobremesas/brownie.jpeg';
import cocadaFornoImg from './assets/sobremesas/cocada-forno.jpeg';
import petitGateauImg from './assets/sobremesas/petit-gateau.jpeg';

import aguaSemGasImg from './assets/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from './assets/bebidas/agua-com-gas.jpeg';
import cocaColaImg from './assets/bebidas/coca-cola.jpeg';
import guaranaImg from './assets/bebidas/guarana.jpeg';
import heinekenImg from './assets/bebidas/heineken.jpeg';

export const enroladinhoMignon = {
  nome: 'Enroladinho de Mignon',
  preco: 'R$ 64,90',
  imagem: enroladinhoMignonImg,
  descricao: 'Finíssimas fatias de filé mignon enroladas no parmesão',
  alt: 'Foto do prato Enroladinho de Mignon',
};
const casal20 = {
  nome: 'Casal 20',
  preco: 'R$ 29,00',
  imagem: casal20Img,
  descricao: 'Casal perfeito pão de alho caseiro e linguiça toscana grill',
  alt: 'Foto do prato Casal 20',
};
const burguerPicanha = {
  nome: 'Burguer de Picanha',
  preco: 'R$ 44,90',
  imagem: burguerPicanhaImg,
  descricao: 'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon',
  alt: 'Foto do Burguer de Picanha',
};
const fishChips = {
  nome: 'Fish and Chips',
  preco: 'R$ 79,90',
  imagem: fishChipsImg,
  descricao: 'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito',
  alt: 'Foto do prato Fish and Chips',
};
const risotoCamaraoTrufado = {
  nome: 'Risoto de Camarão Trufado',
  preco: 'R$ 72,90',
  imagem: risotoCamaraoTrufadoImg,
  descricao: 'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko',
  alt: 'Foto do prato Risoto de Camarão Trufado',
};

const brownie = {
  nome: 'Brownie',
  preco: 'R$ 32,90',
  imagem: brownieImg,
  descricao: 'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate',
  alt: 'Foto do sobremesa Brownie',
};
const cocadaForno = {
  nome: 'Cocada de Forno',
  preco: 'R$ 32,90',
  imagem: cocadaFornoImg,
  descricao: 'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme',
  alt: 'Foto do sobremesa Cocada de Forno',
};
const petitGateau = {
  nome: 'Petit Gateau',
  preco: 'R$ 34,90',
  imagem: petitGateauImg,
  descricao: 'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju',
  alt: 'Foto do sobremesa Petit Gateau',
};

const aguaSemGas = {
  nome: 'Água sem gás',
  preco: 'R$ 6,90',
  imagem: aguaSemGasImg,
  descricao: '310ml',
  alt: 'Foto do bebida Aguá sem gás',
};
const aguaComGas = {
  nome: 'Água com gás',
  preco: 'R$ 7,90',
  imagem: aguaComGasImg,
  descricao: '310ml',
  alt: 'Foto do bebida Aguá com gás',
};
const cocaCola = {
  nome: 'Coca-Cola',
  preco: 'R$ 7,90',
  imagem: cocaColaImg,
  descricao: '290ml',
  alt: 'Foto do bebida Coca-Cola',
};
const guarana = {
  nome: 'Guaraná Antártica',
  preco: 'R$ 7,90',
  imagem: guaranaImg,
  descricao: '350ml',
  alt: 'Foto do bebida Guaraná',
};
const heineken = {
  nome: 'Heineken',
  preco: 'R$ 15,90',
  imagem: heinekenImg,
  descricao: '355ml',
  alt: 'Foto do bebida Cerveja Heineken',
};

export const pratosPrincipais = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
];

export const sobremesas = [brownie, cocadaForno, petitGateau];

export const bebidas = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken];
