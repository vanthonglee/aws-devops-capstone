import React from "react";

import { Container, Header } from "@components";
import { Movies } from "@components/movies";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Movies />
        </Container>
    );
};

export default Home;
