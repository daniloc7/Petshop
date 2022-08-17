// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { Container ,Paper,Button} from '@material-ui/core';
// import PetDataService from "../services/PetDataService";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { BorderTop } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),

//     },
//   },
// }));

// export default function Pet() {
//     const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
//     const[documentoDono,setDocumentoDono]=useState('')
//     const[nome,setNome]=useState('')
//     const[nomeDono,setNomeDono]=useState('')
//     const[especie,setEspecie]=useState('')
//     const[idade,setIdade]=useState('')
//     const[raca,setRaca]=useState('')
//     const[alergia,setAlergia]=useState('')
//     const[castrado,setCastrado]=useState('')
//     const[dataEntrada,setDataEntrada]=useState('')
//     const[dataSaida,setDataSaida]=useState('')
//     const navigate = useNavigate();
//     const {id} = useParams();
//     const[pets,setPets]=useState('')
//     // const[servicos,setServicos]=useState('')
//     const classes = useStyles();

//     //UPDATE E CREATE
//   const savePet=(e)=>{
//     e.preventDefault()

//     const pet={documentoDono,nome,nomeDono,especie,idade,raca,alergia,castrado,dataEntrada,dataSaida,id};
//     // console.log(pet)
//     // update
//     if(id){
//       PetDataService.updatePet(pet)
//         .then(response => {
//           console.log("Pet update", response.data);
//           navigate.pushState('/');
//           // body:JSON.stringify(pet)
//         })
//         .catch(error => {
//           console.log('Something went wrong', error);
//       }) 
//     } else{
//       //createP
//       PetDataService.createPet(pet)
//         .then(response => {
//           console.log("Pet adicionado", response.data);
//           navigate.push("/");
//         })
//         .catch(error => {
//           console.log('something went wroing', error);
//         })
//     }
//   }
// //     fetch("http://localhost:8080/petshop/addpet",{
// //       method:"POST",
// //       headers:{"Content-Type":"application/json"},
// //       body:JSON.stringify(pet)

// //   }).then(()=>{
// //     console.log("Novo pet adicionado")
// //   })
// // }

// //LISTAR OS PETS

// useEffect(()=>{
//   fetch("http://localhost:8080/petshop/pets")
//   .then(res=>res.json())
//   .then((result)=>{
//     setPets(result);
//   }
// )
// },[])
//   return (

//     <Container>
//         <Paper elevation={3} style={paperStyle}>
//             <h1 style={{color:"blue"}}><u>Adicionar Pet</u></h1>

//     <form className={classes.root} noValidate autoComplete="off">

//       <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
//       value={documentoDono}
//       onChange={(e)=>setDocumentoDono(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={nome}
//       onChange={(e)=>setNome(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={nomeDono}
//       onChange={(e)=>setNomeDono(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={especie}
//       onChange={(e)=>setEspecie(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={idade}
//       onChange={(e)=>setIdade(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={raca}
//       onChange={(e)=>setRaca(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={alergia}
//       onChange={(e)=>setAlergia(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={castrado}
//       onChange={(e)=>setCastrado(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={dataEntrada}
//       onChange={(e)=>setDataEntrada(e.target.value)}
//       />
//       <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
//       value={dataSaida}
//       onChange={(e)=>setDataSaida(e.target.value)}
//       />
//       <Button variant="contained" color="secondary" onClick={savePet}>
//   Submit
// </Button>
//     </form>

//     </Paper>
//     <h1>Pets</h1>

//     <Paper elevation={3} style={paperStyle}>

//       {Array(pets).map(pet=>(
//         <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={pet.id}>
//          Id: {pet.id}<br/>
//          Documento dono: {pet.documentoDono}<br/>
//          Nome dono: {pet.nomeDono}<br/>
//          Nome: {pet.nome}<br/>
//          Especie: {pet.especie}<br/>
//          Raça: {pet.raca}<br/>
         
//         </Paper>
//       ))
// }


//     </Paper>



//     </Container>
//   );
// }

// // export default Pet;