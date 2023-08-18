import React from 'react'
// import { Card, Button } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data2 from '../data2';
const MyCart = () => {
    return (
        <>
            {
                data2.map((item,index) => {
                    return (
                        <div style={{display:'inline-flex'}}>
                        <Card sx={{ maxWidth: 280 }} key={index} style={{margin:'15px'}} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="280px"
                                width="40%"
                                image={item.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.Brand}  <span style={{fontSize:"18px",color:'grey',float:'right'}}>{item.category}</span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" style={{color:'red',fontSize:"20px"}}>Rs.{item.price}</Button>
                                <Button size="small" class='btn btn-secondary text-white'>Add to Cart</Button>
                            </CardActions>
                        </Card>
                        </div>
                    )
                })
            }

        </>
    )
}
export default MyCart