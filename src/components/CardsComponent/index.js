
import { Route, Routes } from 'react-router-dom';
import { Container,Grid} from '@mui/material';

import BottomNavigationComponent from '../BottomNavigation';
import Users from '../getUser';
import Usds from '../getUsd';

function Appl() {
  return (
    
    <div>
      
      <br/>
    
      <Container maxWidth='lg' sx={{marginTop: '2rem'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Users/>    
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Users/>    
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Usds/>    
            </Grid>
                        
          </Grid>
      </Container> 
      <BottomNavigationComponent/>
      
    </div>
  );
};


export default Appl;