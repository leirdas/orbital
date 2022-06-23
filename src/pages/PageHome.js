import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from "react-router-dom"
import PageLogin from './PageLogin';
import Missions from '../components/Missions/Missions';
import { useAuth } from "../hooks/useAuth";

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

// function PageTodolist() {
//     return (
//         <>
            
//             <h1>Welcome to the STAR</h1>
//             <Card style={{ backgroundColor: "lightgrey" }} sx={{ minWidth: 275 }}>
//                 <CardContent>
//                     <Typography variant="h1" sx={{ fontSize: 20 }} color="white" gutterBottom>
//                         At STAR, we aim to help you explore Singapore with your friends after the pandemic!
//                     </Typography>
//                     <Typography variant="h1" sx={{ fontSize: 20 }} color="white" gutterBottom>
//                         Click on the button below to find out the different missions you can embark on
//                     </Typography>

//                 </CardContent>
//                 <CardContent>
//                     <Button size="small">Learn More</Button>
//                 </CardContent>
//             </Card>
//         </>
//     )
// }

function PageHome() {

    const { user } = useAuth();

    return (
        <>
        {/* <Routes>
            <Route exact path="/missions" element={<Missions />}></Route>
        </Routes> */}
        <h1>home</h1>
        </>
    )
}


export default PageHome
