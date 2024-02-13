import { LinkProps } from "../@types";

export const NAV_TOP_RIGHT: Array<LinkProps> = [
  {
    title: "Gmail",
    url: "/",
  },
  {
    title: "Imagens",
    url: "/",
  },
  {
    title: "Fazer Login",
    url: "/auth",
    classNameLink: "google-home-nav-login",
    isInternal: true,
  },
];

export const NAV_TOP_LEFT: Array<LinkProps> = [
  {
    title: "Sobre",
    url: "/",
  },
  {
    title: "Publicidade",
    url: "/",
  },
  {
    title: "Negócios",
    url: "/",
  },
  {
    title: "Como Funciona a pesquisa",
    url: "/",
  },
];

export const NAV_BOTTOM_RIGHT: Array<LinkProps> = [
  {
    title: "Privacidade",
    url: "/",
  },
  {
    title: "Termos",
    url: "/",
  },
  {
    title: "Configuração",
    url: "/",
  },
];
