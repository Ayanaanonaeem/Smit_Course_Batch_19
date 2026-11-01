import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Modal, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Header from "./components/Header";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import { Masonry } from "@mui/lab";
 const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
console.log(ACCESS_KEY);


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search,setSearch]=useState("")
  const [modal,setModal]=useState(false)
  const [chosen,setChosen]=useState([])




  useEffect(() => {
    getImagesFromUnsplash();
  }, []);

  const getImagesFromUnsplash = () => {
    fetch(
      `https://api.unsplash.com/photos/?page=1&client_id=${ACCESS_KEY}&per_page=30`,
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
        setLoading(false);
       
        
      })
      .catch((err) => setLoading(false));
  };
  const handleSearchPhotos=()=>{
    if(search){

      fetch(
        `https://api.unsplash.com/search/photos/?page=1&query=${search}&client_id=${ACCESS_KEY}&per_page=30`
        
      )
        .then((res) => res.json())
        .then((res) => {
          setImages(res.results)  
          setLoading(false);
         
          
        })
        .catch((err) =>{
          
          setLoading(false)
        
    })
          

    }

  
  }
  
  
  return (
    <div>
     
     <Modal
  open={modal}
  onClose={() => setModal(false)}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      bgcolor: "background.paper",
      borderRadius: 3,
      overflow: "hidden",
      width: "900px",
      maxWidth: "95vw",
      maxHeight: "90vh",
      outline: "none",
    }}
  >
    {/* Image */}
    <Box sx={{ flex: 1, minWidth: 0, bgcolor: "#111" }}>
      {chosen?.urls && (
        <img
          src={chosen.urls.regular}
          alt={chosen.alt_description || "Preview"}
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
          }}
        />
      )}
    </Box>

    {/* Details */}
    <Box sx={{ width: { xs: "100%", md: "300px" }, p: 3 }}>
      <Typography variant="h6" fontWeight="bold">
        {chosen?.alt_description || "Beautiful Image"}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Photographer
      </Typography>

      <Typography variant="body1">
        {chosen?.user?.name}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Image Description
      </Typography>

      <Typography variant="body1">
        {chosen?.description || chosen?.alt_description || "No description available"}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={() => setModal(false)}
      >
        Close
      </Button>
    </Box>
  </Box>
</Modal>

      
      <Header />
   
      <div className="container mx-auto">
        <Box sx={{ display: "flex", my: 2, justifyContent: "space-between" }}>
          <TextField
            color="secondary"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

          <Button disabled={search==""|| search.length<3} onClick={handleSearchPhotos} color="secondary" startIcon={<SearchOutlinedIcon />}>
            Search
          </Button>
        </Box>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="secondary" aria-label="Loading…" />
          </Box>
        ) : null}
        <Masonry spacing={2} columns={{sm:1,md:2,lg:3,xl:4}}>
          {
            images.map((item)=><img key={item.id} src={item.urls.thumb} 
            onClick={()=>{

              setChosen(item)
              setModal(true)
            }
            }
            />)
          }
        </Masonry>
      </div>
    </div>
  );
}

export default App;
