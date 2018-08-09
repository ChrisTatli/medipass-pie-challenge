import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardHeader } from '@material-ui/core';

const Pie = (props) => {

    return(
        <div>  
            {props.pie ? (
                <Card style={{minWidth: 400}}>
                    <CardHeader
                        title = {props.store.displayName}
                        subheader = {`${props.store.address} - ${props.store.mobile}`}
                        
                    />
                    <CardContent>               
                    <Typography component="p">
                        {props.pie.displayName} - {props.pie.priceString}
                    </Typography>
                    <Typography component="p">
                        Quantity - {props.pie.quantity}
                    </Typography>
                    <Typography component="p">
                        Store Rating - {props.store.rating}/10
                    </Typography>
                    </CardContent>
                </Card>
            ): null}
        </div>
    )
}

export default Pie