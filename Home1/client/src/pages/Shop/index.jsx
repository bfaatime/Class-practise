import React, { useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../../../../server/constants';

import styles from "./index.module.scss"

import Grid from '@mui/material/Grid2';


import { LuShoppingCart } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from "@mui/material";

import { WishlistContext } from "../../Context/wishlistContext";


const Shop = () => {
  const [shirt, setShirt] = useState([])
  const [shirtCopy, setshirtCopy] =useState([])
  const [searchQuery, setSearchQuery ] =useState("")
  const { toggleWishlist } = useContext(WishlistContext)

  const getShirt = async () => {
    try {
        const res = await axios(`${BASE_URL}shirt`)
        setShirt(res.data)
        setShirtCopy(res.data)
    } catch (error) {
        console.log(error);
    }
}

const filteredShirt = shirt.filter((w) => w.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
useEffect(() => {
    getShirt()
}, [])

const handleChange = (e) => {
  let sortedShirt = null;
  console.log(e.target.value);
  if (e.target.value === "asc") {
      sortedShirt = [...shirt].toSorted((a, b) => a.price - b.price)
  } else if (e.target.value === "desc") {
      sortedShirt = [...shirt].toSorted((a, b) => b.price - a.price)
  } else {
      sortedShirt = [...shirtCopy]
  }
  setWines([...sortedWines])
}


  return (
    <div className={styles.container}>
       <Helmet>
                <title>Home Page</title>
                <meta name="description" content="shirt page" />
            </Helmet>
            <div>


                <div className="container">

                    <div style={{ margin: "1rem 0", display: "flex", justifyContent: "space-between" }}>
                        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => { setSearchQuery(e.target.value) }} />
                        <select name="" id="" onChange={handleChange}>
                            <option value="asc">ASC</option>
                            <option value="desc">DESC</option>
                            <option value="default">DEFAULT</option>
                        </select>
                    </div>
                    <div className={styles.shirt}>
                        <Grid container spacing={2}>
                            {
                                wines.length > 0 && filteredShirt.map((w) => {
                                    return (<Grid size={{ xs: 12, md: 6, lg: 4 }} key={w._id}>
                                        <div className={styles["shirt"]}>
                                            <img src={w.imageUrl} alt={w.title} />
                                            <h3 className={styles.title}>{w.title}</h3>
                                            <button className={styles["cart"]}> <LuShoppingCart />
                                                Add to Cart</button>
                                            <div style={{ display: "flex", gap: "1rem" }}>
                                                <Link to={`shirt/${w._id}`}><FaInfoCircle /></Link>
                                                <FaRegHeart onClick={() => { toggleWishlist(w) }} />
                                            </div>
                                        </div>
                                    </Grid>)
                                })
                            }
                        </Grid>
                    </div>

                </div>
            </div >
    </div>
  )
}

export default Shop

