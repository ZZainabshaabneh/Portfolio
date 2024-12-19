
import { Button, Typography, Container } from "@mui/material";

function Profile() {
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
      >
        Creative <span style={{ fontStyle: "italic" }}>Portfolio</span>
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "sans-serif",
          fontSize: "1rem",
          marginTop: 1,
          color: "gray",
        }}
      >
        by: Zainab Shaabneh
      </Typography>
      <Button color="inherit" href="/about">
        <span style={{ fontWeight: "bold" }}>About</span> 
      </Button>
    </Container>
  );
}

export default Profile;
