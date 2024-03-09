import React from "react";
import { Box, Container, Heading, Stack, Text, Link, SimpleGrid, Icon, Image, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

// Replace with actual backend engineer's GitHub profile
const GITHUB_PROFILE = "https://github.com/backendengineer";

// Sample projects - replace with actual projects
const projects = [
  {
    name: "Project One",
    description: "This is a description of the backend project one.",
    githubLink: "https://github.com/backendengineer/project-one",
  },
  {
    name: "Project Two",
    description: "This is a description of the backend project two.",
    githubLink: "https://github.com/backendengineer/project-two",
  },
  {
    name: "Project Three",
    description: "This is a description of the backend project three.",
    githubLink: "https://github.com/backendengineer/project-three",
  },
  // Add more projects here
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Stack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Backend Engineer Portfolio
          </Heading>
          <Text mt={4}>Welcome to my professional portfolio. Check out my projects below.</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{project.name}</Heading>
              <Text mt={4}>{project.description}</Text>
              <Link href={project.githubLink} isExternal>
                <Button rightIcon={<FaGithub />} colorScheme="teal" mt={4}>
                  View on GitHub
                </Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
        <Box textAlign="center">
          <Link href={GITHUB_PROFILE} isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="green" size="lg">
              Visit My GitHub Profile
            </Button>
          </Link>
        </Box>
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwZW5naW5lZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk5OTEwNTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Backend Engineer" m="auto" />
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
