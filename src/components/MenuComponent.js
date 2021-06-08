import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

/**renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }*/

/** Comme dishes est definis dans this.state on peut
 se referer a ca pour les attribuer
 map pour alterner entre tout les elements
 on utulise un iterateur dish et on le dis
 pour chaque iteration de la liste ou tableau fais tel chose
 dans le div le key sert a reconnaitre les elements ici par exemple
 pour key= id dans chaque iteration dans la liste pour garantir
 l'uniciter
 dans d'autre cas donner une key pour garantir l'uniciter et l'appel
 plus tard
 tag="li" dans media pour dire que notre media se comportera comme
 uen liste
 l'afficahge se fais dans App.js on import et on ecrit le nom du fichier
 importer
 dans le return on a fais media lsit pour dire c'est
 une liste de media
 si on ne le fais pas il affichera un seul element
 <Link to={`/menu/${dish.id}`}> concernant le params pour afficher des information bien precise
 d'une page*/

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to={"/home"}>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
};

export default Menu;
