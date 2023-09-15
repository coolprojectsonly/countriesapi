import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "/post/fetcountries/",
  async () => {
    const options = {
      method: "GET",
      url: "https://referential.p.rapidapi.com/v1/country",
      params: {
        fields:
          "currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code",
        limit: "250",
      },
      headers: {
        "X-RapidAPI-Key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
        "X-RapidAPI-Host": "referential.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
