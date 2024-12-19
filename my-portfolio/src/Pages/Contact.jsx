
import { Box,Button, Typography, Link, Container } from "@mui/material";

const Contact = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "serif",
          fontWeight: "bold",
          textAlign: "center",
        }}
        gutterBottom
      >
        Contact <span style={{ fontStyle: "italic" }}>Me</span>
      </Typography>
      <Box
        sx={{
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
          width: "80%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", marginBottom: 2 }}
        >
          Email:{" "}
          <Link href="mailto:Zeynepshaabneh32@gmail.com">
            Zeynepshaabneh32@gmail.com
          </Link>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", marginBottom: 2 }}
        >
          Phone: <Link href="tel:+972592754208">+972-592754208</Link>
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
          Address: Jerusalem, Aljeeb
        </Typography>
      </Box>
      <br></br>
      <Button color="inherit" href="/">
        <span style={{ fontWeight: "bold" }}>Back to main page </span>
      </Button>
    </Container>
  );
};

export default Contact;
