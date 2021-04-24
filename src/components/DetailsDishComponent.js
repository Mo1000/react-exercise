import React from 'react' ;
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


  

   function RenderDish({dish}) {
        if (dish != null)
            return(
                <div >
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
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {cmnts}
                    </CardBody>
                </Card>
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
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-6 m-1">
                      < RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            );
        }
    }
    
    export default Detaildish;