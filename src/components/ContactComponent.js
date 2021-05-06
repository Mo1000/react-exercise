import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,Row,FormFeedback} from "reactstrap";
import  {Link} from "react-router-dom";
/**<Col md={10}>
  </> est une maniere simple dans JSX de dire <div className="col- md-10">  </>
 " this.handleSubmit=this.handleSubmit.bind(this)
 this.handleInputChange=this.handleInputChange(this)" dans le contructeur pour les fonctions
 a faire forcement pour rendre ces fonctions utilisables
 "       const target=event.target;
 const value=target.type ==='checkbox'? target.checked :target.value;"
 on a un evenement ciblé  si il est déclenché on verifie sa valeur
 si c'est une checkbox on récupère le choix  dans un type choix
 d'ou cette ecriture une maniere simple de faire le if
 <checkbox'? target.checked >
 si non on on récupère la valeur dans un type de valeur <:target.value>
 <  const name =target.name;> une fois que la cible est identité la valeur nous
 devons retourner le nom de la cible pour savoir ce qu'il faut changer dans l'etat

 <handleInputChange(event)>  cette fonction gère la modification
 dans le formulaire c'est pour nous permettre de faire le getstate

 OnSumbit Pour le bouton submit du formulaire ne pas oublier le grand S
 OnChange pour la modification grand C

 < handleblur> la modification de l'etat a true
 < touched:{...this.state.touched, [field]:true} > les "..." avant le this.state c'est pour
 dire " tous ceux " donc dans ce cas tous ceux qui ont été affecter dans la methode touched de
 l'etat on fais pas les champ a true " [field]:true"

 <  const  regularexpression =/^\d+$/; > expression regulière pour dire que les caratères ne doivent
 etre que des chiffres rien d'autre
 < !regularexpression.test(telnum) > on a une  fonction predefinie test qui fais des test
 sur nos variable et nous retourne un boolean selon la condition
 dans ce cas on veux tester si tel num contient dque des chiffres
 < !regularexpression.test(telnum) > cela signifie si tel num ne contient pas que des chiffres
 regularexpression.test(telnum)= true si on a que des chiffres
 regularexpression.test(telnum)= false=!regularexpression.test(telnum) si on a d'autres
 caratères
 < email.split('').filter(x => x === '@').length !== 1 > split est une methode qui permet
 de separer un par un les carateres d'une chaine et de les mettres dans une liste
 maintenat le filtre parcours cette liste avec son compteur x et si x === @
 il l'ajoute dans le tableau de filtrage donc a la fin la taille du tableau de filtrage
 dependra du nombre de @ dans la liste trouve pas le filtre
 et nous on exige que cette taille ne soit pas different de 1
 < valid={errors.firstname===''}
 invalid={errors.firstname!==''}> ces deux methodes de reactstrap permettent de signaler
 les erreurs si errors.fristname = champ vide alors c'est bon initialemnt
 mais si initialement c'est deja remplis alors c'est invalide errors.firstname!==''
 apres ca maintenant les autres fonctions pouront se mettre au travail a savoir si le
 champ est touché (onblur) et si les contrainte des champs sont valider(errors)
 */
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state ={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstname:false,
                lastname: false,
                telnum: false,
                email: false
            }

        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleblur=this.handleblur.bind(this)
    }

    handleInputChange(event){
        const target=event.target;
        const value=target.type ==='checkbox'? target.checked :target.value;
        const name =target.name;

        this.setState({[name]:value})

    }
    handleSubmit(event){
        console.log("Current State is:" +JSON.stringify(this.state));
        alert("Current State is:" +JSON.stringify(this.state));
        event.preventDefault();
    }

    handleblur =(field) =>(evt) =>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }
    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
        }
        if (this.state.touched.firstname && firstname.length < 3 )
            errors.firstname='First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10 )
            errors.firstname='First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3 )
            errors.lastname='Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10 )
            errors.lastname=':ast Name should be <= 10 characters';

        const  regularexpression =/^\d+$/;
        if(this.state.touched.telnum && !regularexpression.test(telnum))
            errors.telnum='Tel. Number should contain only numbers';
        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1 )
            errors.email='Email should contain a @';

        return errors;


    }
    render() {
        //valider les contraintes
        const  errors =this.validate(this.state.firstname,this.state.lastname,
            this.state.telnum,this.state.email);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to={'/Menu'}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                            <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                            <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                            <i className="fa fa-envelope"></i>: <a
                            href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i
                                className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i
                                className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                           placeholder="First Name"
                                           value={this.state.firstname}
                                           valid={errors.firstname===''}
                                           invalid={errors.firstname!==''}
                                           onBlur={this.handleblur('firstname')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.firstname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                           placeholder="last Name"
                                           value={this.state.lastname}
                                           valid={errors.lastname===''}
                                           invalid={errors.lastname!==''}
                                           onBlur={this.handleblur('lastname')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.lastname}
                                    </FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                           placeholder="Tel. Number"
                                           value={this.state.telnum}
                                           valid={errors.telnum===''}
                                           invalid={errors.telnum!==''}
                                           onBlur={this.handleblur('telnum')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.telnum}
                                    </FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                           placeholder="Email"
                                           value={this.state.email}
                                           valid={errors.email===''}
                                           invalid={errors.email!==''}
                                           onBlur={this.handleblur('email')}
                                           onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset:2}}>
                                    <FormGroup check>
                                        <label check>
                                            <Input type="checkbox" name="agree"
                                                   checked={this.state.agree}
                                                   onChange={this.handleInputChange}/>{''}
                                            <strong>May we contact you?</strong>

                                        </label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Input type="select" name="contactType"
                                           value={this.state.contactType}
                                           onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your FeedBack</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                          rows="12" value={this.state.message}
                                           onChange={this.handleInputChange}/>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feed
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;