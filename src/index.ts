import { OneC } from "./onec";
import { RootComponent } from "./components/root/root-component";
import { CardComponent } from "./components/card/card-component";
import { CardsComponent } from "./components/cards/cards-component";
import { HeaderComponent } from "./components/header/header-component";
import { ButtonComponent } from "./components/button/button-component";
import { HomeComponent } from "./pages/home/home-component";
import { FooterComponent } from "./components/footer/footer-component";

OneC([
  { selector: "c-root", definition: RootComponent },
  { selector: "c-header", definition: HeaderComponent },
  { selector: "c-button", definition: ButtonComponent },
  { selector: "c-card", definition: CardComponent },
  { selector: "c-cards", definition: CardsComponent },
  { selector: "c-home", definition: HomeComponent },
  { selector: "c-footer", definition: FooterComponent },
]);