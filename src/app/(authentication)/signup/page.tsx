"use client";

import Container from "@/src/components/Container";
import SignUpForm from "@/src/views/Authentication/SignupForm";

export default function Page() {
  return (
    <Container className="bg-[#DCF0FF] items-center justify-center">
      <SignUpForm />
    </Container>
  );
}
