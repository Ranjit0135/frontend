import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section>
        <div className=" flex align-middle justify-center items-center my-5">
          <Heading>My Projects</Heading>
        </div>
        <div className=" flex gap-10 justify-center align-middle items-center flex-wrap">
          <Card maxW="sm" width="150%">
            <CardBody>
              <Image
                src="./assets/Image_-_E-Commerce_Website_.jpeg.webp"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                height="200px"
              />
              <Stack mt="6" spacing="3" height="200px" overflow="scroll">
                <Heading size="md">Ecommerce</Heading>
                <Text>
                  I have built an eCommerce website featuring essential online
                  shopping functionalities. Using technologies like React.js,
                  Node.js, and MongoDB, it includes user authentication, product
                  management. This project showcases my proficiency in
                  full-stack web development andcreating user-friendly eCommerce
                  solutions.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Link
                  to="https://github.com/Ranjit0135/FinalProject"
                  target="_blank"
                >
                  <Button variant="solid" colorScheme="blue">
                    View{" "}
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm" width="150%">
            <CardBody>
              <Image
                src="./assets/career-businessman-on-blurred-abstract-260nw-1152345887.webp"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                height="200px"
              />
              <Stack mt="6" spacing="3" height="200px" overflow="scroll">
                <Heading size="md">It career Park</Heading>
                <Text>
                  I developed an IT Career Path website, providing guidance on
                  IT careers, skills development, and certifications. This
                  project showcases my web development skills and dedication to
                  supporting professional growth in IT
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to="https://itcareerpark.com/" target="_blank">
                  <Button variant="solid" colorScheme="blue">
                    View{" "}
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm" width="150%">
            <CardBody>
              <Image
                src="./assets/images (1).jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                height="200px"
              />
              <Stack mt="6" spacing="3" height="200px" overflow="scroll">
                <Heading size="md">Travel</Heading>
                <Text>
                  I have successfully designed and implemented a Travel MERN
                  Stack project, utilizing MongoDB, Express.js, React, and
                  Node.js. This platform enables users to discover destinations,
                  plan trips, and share travel experiences seamlessly,
                  highlighting my proficiency in full-stack web development and
                  problem-solving.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to="https://github.com/Ranjit0135" target="_blank">
                  {" "}
                  <Button variant="solid" colorScheme="blue">
                    View
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Projects;
