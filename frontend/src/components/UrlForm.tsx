import * as React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { api, config } from "../axios";

const UrlForm = () => {
  const [response, setResponse] = React.useState({
    longUrl: "",
    shortUrl: "",
    urlCode: "",
  });
  const [url, setUrl] = React.useState({
    longUrl: "",
  });

  const handleUrlChange = (e: any) => {
    setUrl({
      ...url,
      [e.target.name]: e.target.value,
    });
  };

  const onClickEvent = async (e: any) => {
    e.preventDefault();
    try {
      await api.post("/analytics", url);
      await api.get(`/${response.urlCode}`, config);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res = await api.post("/", url);
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h3" variant="h5" color="black">
            Enter a long url to make a short one
          </Typography>
          <Box
            component="form"
            onSubmit={onSubmitHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="longUrl"
              name="longUrl"
              onChange={handleUrlChange}
            />
            <Typography
              onClick={onClickEvent}
              component="h3"
              variant="h5"
              color="black"
            >
              <Link href={response.longUrl}>{response.shortUrl}</Link>
            </Typography>
            <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
              Make a tiny URL!
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default UrlForm;
