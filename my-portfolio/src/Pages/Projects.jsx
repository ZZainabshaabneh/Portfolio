import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
    Container,
  Link,
  Button,
} from "@mui/material";

const Projects = () => {
  const projects = [
    "Backend Training Projects (Python, Django, Flask, MongoDB)",
    "Full Stack Projects (HTML, CSS, JS, PHP, SQL,Spring boot,React Vite)",
    "Odoo ERP Solutions",
      "Game Development (Unity)",
    
  ];

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
        My <span style={{ fontStyle: "italic" }}>Projects</span>
      </Typography>

      <Box
        sx={{
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
          width: "80%",
        }}
      >
        <List>
          {projects.map((project, index) => (
            <ListItem key={index} sx={{ padding: 1 }}>
              <ListItemText
                primary={project}
                primaryTypographyProps={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  color: "#333",
                }}
              />
            </ListItem>
          ))}
        </List>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          GitHub:{" "}
          <Link
            href="https://github.com/ZZainabshaabneh?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Profile
          </Link>
        </Typography>
      </Box>
      <br></br>
      <Button color="inherit" href="/Contact">
        <span style={{ fontWeight: "bold" }}>Contact Me </span>
      </Button>
    </Container>
  );
};

export default Projects;
