import Router from "next/router";
import { useState } from "react";
import { Container } from "../Container/Container";
import { HamburgerButton } from "../HamburgerMenu/HamburgerMenu";
import { Nav } from "../Nav/Nav";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickRedirect = () => {
    Router.push("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.shadowContainer}>
        <Container>
          <div>
            <div className={styles.headerContent + " sideSpacing"}>
              <div
                onClick={onClickRedirect}
                className={styles.logo}
                style={{
                  backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png")`,
                }}
              ></div>
              <div className={styles.headerImgContainer}>
                <div
                  className={styles.headerImg}
                  style={{
                    backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pokemon-mas-populares-gengar-1561474289.jpg?crop=0.7494407158836689xw:1xh;center,top&resize=1200:*")`,
                  }}
                >
                  <span>Quienes somos</span>
                </div>
                <div
                  className={styles.headerImg}
                  style={{
                    backgroundImage: `url("https://assets.pokemon.com/assets/cms2-es-es/img/misc/gus/promotions/mobile-app-gus-237x80-es.jpg")`,
                  }}
                ></div>
              </div>
              <div className={styles.userContainer} onClick={onClickRedirect}>
                <div
                  className={styles.userIcon}
                  style={{
                    backgroundImage: `url("https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg")`,
                  }}
                ></div>
                <span>Iniciar sesion</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.headerNav}>
        <Container>
          <Nav isOpen={isOpen} />
        </Container>
      </div>
      <HamburgerButton onClick={onClickOpen} />
    </header>
  );
};
