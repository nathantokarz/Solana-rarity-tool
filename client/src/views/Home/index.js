import "./index.css";
import axios from "axios";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { AttIndicator } from "../../components";
export function HomeView() {
  const inputRank = useRef(null);
  const inputId = useRef(null);
  const [item_info, setItemInfo] = useState({});
  const [token_id, setTokenId] = useState("");
  const [rankname, setRankname] = useState("");
  const [rank, setRank] = useState(1);

  const getTokenById = useCallback(async () => {
    console.log("get by id");
    let response = await axios.post("/token_by_id", {
      id: token_id,
    });
    if (response.data.success === false) return;
    console.log("id response", response);
    setItemInfo(response.data.item);
    setRank(response.data.item.rank + 1);
    setRankname(response.data.item.rankname);
  }, [token_id]);

  const getTokenByRank = useCallback(async () => {
    console.log("get by rank");
    let response = await axios.post("/token_by_rank", {
      rank: rank,
    });
    if (response.data.success === false) return;
    console.log("rank response", response);
    setItemInfo(response.data.item);
    setTokenId(response.data.item.custom_id);
    setRankname(response.data.item.rankname);
  }, [rank]);

  //handle rank change event
  const handleRankChange = (e) => {
    let text = e.target.value;
    if (checkValidity(text)) {
      setRank(text);
    } else {
      e.preventDefault();
    }
  };

  //handle id change event
  const handleIdChange = (e) => {
    let text = e.target.value;
    if (checkValidity(text)) {
      setTokenId(text);
    } else {
      e.preventDefault();
    }
  };

  const checkValidity = (str) => {
    if (str === "") return true;
    if (isNaN(str)) return false;
    let n = parseInt(str);
    if (n > 0 && n <= 10000) return true;
    return false;
  };
  useEffect( () => {
    inputRank.current.focus();
  }, []);

  useEffect(() => {
    if (inputRank.current === document.activeElement && checkValidity(rank))
      getTokenByRank();
  }, [rank]);

  useEffect(() => {
    // console.log("token hook", inputId, document.activeElement);
    if (inputId.current === document.activeElement && checkValidity(token_id)) {
      getTokenById();
    }
  }, [token_id]);

   {/* let x = rank;

      if ((0 <= x) && (x < 41)) {
        rankname = "Mythic" 
        if ((42 <= x) && (x < 168)) {
            rankname = "Legendary"
               if ((169 <= x) && (x < 420)) {
                rankname = "Rare";
                    if ((421 <= x) && (x < 1680)) {
                    rankname = "Uncommon";
                          if ((1681 <= x) && (x < 4201)); { rankname = "Common"; }
                }
            }
        }
    }*/}
         

 

  const Header = (
    <Box sx={{ display: "flex", padding: "5px 5px 0px 10px", justifyContent: "center", background: "none" }}>
       <Avatar
         src="/img/rarityheader.png"
         sx={{ width: 250, height: 70}}
         alt="Loading..."
         position= "center"
       ></Avatar>
    </Box>
  );
  return (
      <Paper sx={{ mt: 10 }} style={{ backgroundColor: 'transparent', borderColor: 'none' }}>
      <Grid container spacing={0} style={{ display: 'flex', backgroundColor: 'none'}}>
        <Grid item md={6} xs={12} style={{ background: "rgba(255,255,255, 0.6)" }}>
          {Header}
        </Grid>
        <Grid
          container
          item
          sx={{ display: "flex", background: "none", justifyContent: "center", }}
          md={6}
          xs={12}
          style={{background: "rgba(255,255,255, 0.6)"}}
        >
          <Grid item xs={6} sx={{ padding: "5px" }}>
            <Typography className="rank-id">
             UGA Nation NFT
            </Typography>
            <input value={token_id} onChange={handleIdChange} ref={inputId} />
          </Grid>
          <Grid item xs={6} sx={{ padding: "5px" }}>
            <Typography className="rank-id">
              Rank
            </Typography>
            <input value={rank} onChange={handleRankChange} ref={inputRank} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className="left-part">
          <Box sx={{ padding: "10px", position: "relative" }}>
            <img
              src={item_info ? item_info.image : ""}
              width="100%"
              alt="Loading..."
            />
            {/*<span className="nft-id">{rankname ? rankname : ""} </span>*/}
            <span className="nft-id">{rankname ? rankname : ""} </span>
            <span className="nft-rank">{rank ? "RANK " + rank : ""} </span>
            {/* <span className="nft-name"> MARTU </span> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="attr-container">
          <img
            src="/img/symbol.png"
            width="100%"
            minHeight="60px"
            alt="Loading..."
            className="attr-back-img"
          />
          <Box className="attr-pane">
            {item_info &&
              item_info.attributes &&
              item_info.attributes.map((item, index) => (
                <AttIndicator
                  name={item.trait_type}
                  value={item.value}
                  score = {item.score}
                  percent={item.percent}
                  rarity="COMMON"
                  key={index}
                />
              ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
