import { Container } from "../Container/Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.company}>
            <h4>The Pokemon Company</h4>
            <ul>
              <li>
                <a href="#">Novedades</a>
              </li>
              <li>
                <a href="#">Guia para padres y tutores</a>
              </li>
              <li>
                <a href="#">Servicio de atencion al cliente</a>
              </li>
              <li>
                <a href="#">Sobre nuestra compania</a>
              </li>
              <li>
                <a href="#">Seleccionar pais o region</a>
              </li>
              <li>
                <a href="#">Sitio de prensa</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerIcons}>
            <div
              className={styles.footerIcon}
              style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png")`,
              }}
            ></div>
            <div
              className={styles.footerIcon}
              style={{
                backgroundImage: `url("https://www.madeaworld.com/wp-content/uploads/2016/12/madeamano-socials-youtube-icon.png")`,
              }}
            ></div>
            <div
              className={styles.footerIcon}
              style={{
                backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/124/124021.png")`,
              }}
            ></div>
            <div
              className={styles.footerIcon}
              style={{
                backgroundImage: `url("https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-White-Dark-Background-Logo.wine.svg")`,
              }}
            ></div>
          </div>
          <div className={styles.privacy}>
            <a href="#">
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url("https://assets.pokemon.com/static2/_ui/img/footer/thepokemoncompanyinternational-seal-1596150491.png")`,
                }}
              ></div>
            </a>
            <ul>
              <li>
                <a href="#">Condicion de uso</a>
              </li>
              <li>
                <a href="#">Guia para padres y tutores</a>
              </li>
              <li>
                <a href="#">Servicio de atencion al cliente</a>
              </li>
              <li>
                <a href="#">Sobre nuestra compania</a>
              </li>
              <li>
                <p>
                  ©2023 Pokémon. ©1995 - 2023 Nintendo/Creatures Inc./GAME FREAK
                  inc. TM, ®Nintendo.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
