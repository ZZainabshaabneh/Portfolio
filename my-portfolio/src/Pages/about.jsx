import { Box, Typography, Container,Button } from "@mui/material";

const About = () => {
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
        <Box sx={{ padding: 4 }}>
          <Typography variant="body1">
            <Typography variant="h2" gutterBottom>
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Im Zainab Shaabneh,
              </span>
            </Typography>
            About Me,<br></br>
            <Typography variant="h4" gutterBottom>
              Computer Engineering graduate with technical skills in both
              frontend and backend development. I am passionate about continuous
              learning and working on innovative projects.
            </Typography>
          </Typography>
        </Box>
        <Button color="inherit" href="/projects">
          <span style={{ fontWeight: "bold" }}>Project</span>
        </Button>
      </Container>
    );
};

export default About;
