import React from 'react' ;
import {Card, CardBody, CardImg, CardText, CardTitle,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";


function RenderDish({dish}) {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1" >
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
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
     function RenderComments({comments}){
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
                            {cmnts}
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
        if (dish == null) {
            return (<div></div>);
        }
        else
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
                      < RenderComments comments={props.comments}/>
                    </div>
                </div>
            );
        }
    }
    
    export default Detaildish;