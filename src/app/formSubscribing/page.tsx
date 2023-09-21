"use client";
import React from "react";
import Form from "@radix-ui/react-form";
import { Flex, Text, Container, TextField, Button } from "@radix-ui/themes";
import Image from "next/image";
import subscribe from "../utils/subscribe";

function Page() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [marketing, setMarketing] = React.useState(true);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await subscribe({ name, email, marketing });
      setSubmitting(false);
      setEmail("");
      setPassword("");
      setMarketing(true);
      setSuccess(true);
    } catch (e: any) {
      setSubmitting(false);
      setSuccess(false);
      setError(e.message);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      gap={"2"}
      style={{
        padding: "20px",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container className="  rounded-md max-w-md p-8 bg-gray-900 shadow-gray-400">
        <Flex direction="column" align="center" gap="6">
          <Image
            src="https://bytes.dev/images/bytes.png"
            alt="Image"
            height={"200"}
            width={"200"}
          />

          <Text
            as="div"
            className="text-white text-center"
            size="2"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium.
          </Text>

          <Flex
            onSubmit={handleSubmit}
            direction="row"
            align={"center"}
            gap="3"
            style={{ maxWidth: 400 }}
          >
            <Flex onSubmit={handleSubmit}>
              <TextField.Input
                onChange={(e) => setEmail(e.target.value)}
                size="2"
                placeholder=" Your email"
              />
              <TextField.Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="2"
                placeholder="Password"
              />
              <Button
                type="submit"
                className=" hover:bg-yellow-600 bg-yellow-500"
                variant="soft"
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Page;
