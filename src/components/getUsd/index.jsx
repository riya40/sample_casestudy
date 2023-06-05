import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import DishIMG from '../../assets/images/dish_one.avif'
import { Grid, Tooltip } from '@mui/material';
import Slider from "react-slick";
import { converter } from '../../Api/currencyconverter';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function Usds() {

    const [results,setData] = useState(null)

    const [expanded, setExpanded] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      useEffect(()=>{

            const fetchUsds = async ()=>{
                    const result = await converter()
                    console.log(result)
                    setData(result)

            }
            fetchUsds()

      },[])

  return (
    
    <Grid container spacing={2}>
        {results != null && results.length ? results.map((item)=>(
                <Grid item xs={3} key={item.conversion_rates}>
                <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="user">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.base_code}
              subheader={item.conversion_rates}
            />
            <CardMedia
              component="img"
              height="194"
              image={item.urlToImage}
              alt={item.username}
            />
            <CardContent>
              <Typography variant="h6" color="text.primary">
                {item.conversion_rates}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Tooltip title="Add to favorites">
                    <FavoriteIcon />
                </Tooltip>
              </IconButton>
              <IconButton aria-label="share">
                <Tooltip title="click to share">
                    <ShareIcon />
                </Tooltip>
               
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                 
                </Typography>
                <Typography paragraph>
                  
                </Typography>
                <Typography paragraph>
                </Typography>
                <Typography>
            
                </Typography>
              </CardContent>
            </Collapse>
                </Card>
                </Grid>

        )) : <span> Loading.... </span>}        
        
    </Grid>  
  )
}
