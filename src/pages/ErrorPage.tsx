import { Heading, Text, Box } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../component/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};
