import React from 'react' ;
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Row,
    Label,
    Col, Modal, ModalHeader, ModalBody
} from "reactstrap";
import {Link} from "react-router-dom";
import {Control,LocalForm ,Errors} from "react-redux-form"
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


export class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal()
        this.props.addComment(this.props.dishId, values.rating, values.yourname, values.comment);
       /* console.log("Current State is:" +JSON.stringify(values));
        alert("Current State is: Id " +JSON.stringify(this.props.dishId)+JSON.stringify(values));*/
    }


    render() {
        return (
            <React.Fragment>
                <Button type="button" className="btn btn-outline-dark" aria-label="Left Align"
                        outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg" aria-hidden="true">  </span>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating"
                                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>


                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                                  placeholder="Your Name"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    />
                                    <Errors className="text-danger"
                                            model=".yourname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}/>


                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                                      rows="6"     className="form-control"/>

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}





function RenderDish({dish}) {
    if (dish != null)
        return(
            <div className="col-12 col-md-5 m-1" >
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return(
            <div></div>
        );
}
function RenderComments({comments,addComment,dishId}){
    if (comments == null) {
        return (<div></div>)
    }
    else {
        const cmnts = comments.map(comment => {
            return (
                <div>
                    <CardText key={comment.id}>{comment.comment}</CardText>
                    <CardText>-- {comment.author},{new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short', day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}</CardText>
                </div>

            )
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {cmnts}<br/>
                        <CommentForm  dishId={dishId} addComment={addComment}t/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


/*formatDate(date) {
    const option = { year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;
}*/


function Detaildish(props) {
    const dish = props.dish
    if (props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }
    else if (props.errMess){
        return (
            <div className="container">
                <div className="row">
                  <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (dish != null)
    {


        return (
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to={'/Menu'} >Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <RenderDish dish={props.dish}/>
                    < RenderComments comments={props.comments}
                                     dishId={props.dish.id}
                                     addComment={props.addComment}/>
                </div>
            </div>
        );
    }
}

export default Detaildish;