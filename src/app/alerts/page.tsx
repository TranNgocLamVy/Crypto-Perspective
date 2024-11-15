"use client";
import Container from "@/src/components/Container";
import PrivateNavbar from "@/src/layouts/PrivatePage/Navbar";
import Alerts from "@/src/views/Alerts";

export default function Page() {
  return (
    <Container className="bg-background">
      <PrivateNavbar />
      <Alerts />
    </Container>
  );
}
