import {
  AlertStatus,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const toast = useToast();

  const _renderToast = (title: string, status: AlertStatus) => {
    return toast({
      title,
      status,
      position: "top",
      variant: "top-accent",
      isClosable: true,
    });
  };

  const submitForm = (data: FormData) => {
    if (!isValid) return;
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res: Response) => {
      if (res.status === 200) {
        _renderToast("Your message has been successfully sent.", "success");
        reset();
      } else {
        _renderToast("Sorry, something went wrong. Please try again.", "error");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit((data: FormData) => submitForm(data))}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input {...register("name", { required: true })} />
          {!errors.name && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type={"email"}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {!errors.email ? (
            <FormHelperText>
              Enter the email youd like to receive the response on.{" "}
              {errors.email}
            </FormHelperText>
          ) : errors.email?.type === "required" ? (
            <FormErrorMessage>Email is required. </FormErrorMessage>
          ) : (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.message} isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea size="sm" {...register("message", { required: true })} />
          {!errors.message && (
            <FormErrorMessage>message is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.500",
          }}
          isFullWidth
          type="submit"
        >
          Send Message
        </Button>
      </Stack>
    </form>
  );
};
