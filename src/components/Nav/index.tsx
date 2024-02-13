import React from "react";
import "./index.css";
import { LinkProps, NavProps } from "../../@types/index.ts";
import { Link } from "react-router-dom";

export default function Nav(props: NavProps) {

  function renderLink(link: LinkProps, index: number) {
    return (
      <li key={index}>
        {link.isInternal ?
          <Link to={link.url} className={link?.classNameLink}>{link.title}</Link> :
          <a href={link.url} className={link?.classNameLink}>{link.title}</a>}
      </li>
    )
  }

  return (
    <nav>
      <ul>
        {props.links.map((link, index) => (
          renderLink(link, index)
        ))}
      </ul>
    </nav>
  );
}
