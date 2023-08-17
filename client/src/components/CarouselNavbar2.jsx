import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import state from "./AtomStates";
import { useAtom } from "jotai";

export default function CarouselNavbar2(props) {
    const [modalShow, setModalShow] = useAtom(state.modalShow);
    const [isLogin, setIsLogin] = useState(false);
    const [showMyProfile, setShowMyProfile] = useAtom(state.showMyProfile);
    const [showDiary, setShowDiary] = useAtom(state.showDiary);

    const handleSignUpClick = () => {
        setModalShow(true);
        setIsLogin(false);
    };

    const handleModalButton = () => {
        setModalShow(false);
        setIsLogin(false);
    };

    return (
        <>
            <Navbar
                className="navbar"
                variant="dark"
                expand="lg"
                style={{height: "40px", width: "0", border: "none"}}
            >
                <Container>
                    {!showDiary && !showMyProfile &&
                        <Form>
                            <div>
                                <>
                                    <Button
                                        variant="light"
                                        style={{height:"10vh", width: "15vw", marginLeft:"-8vw", fontSize: "13.5px"}}
                                        onClick={handleSignUpClick}
                                    >
                                        Start your journey!
                                    </Button>
                                </>
                            </div>
                        </Form>
                    }
                </Container>
            </Navbar>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleModalButton={handleModalButton}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
            />
        </>
    );
}
