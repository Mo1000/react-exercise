import React,{ Component } from 'react' ;
import {Card, CardBody, CardHeader, CardImg, CardText, CardTitle} from "reactstrap";


class Desk extends Component{
    constructor(props) {
        super(props);

        this.state ={
            renderDish(dish) {
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
            }

        }
    }



    render() {
        const comment=this.props.selectedDishcomment;
        var com=null;
        if(comment!=null || comment!=undefined)
        {
              com= comment.map((comment) => {
                return(
                    <Card key={comment.id}>
                        <CardHeader >Comments</CardHeader>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText>{comment.comment}</CardText>
                            <CardText>-- {comment.author},{comment.date}</CardText>
                        </CardBody>
                    </Card>
                );
            });
        }


    return(
        <div>{this.state.renderDish(this.props.selectedDish)}
        ,{com}</div>);
    }
}
export default Desk;