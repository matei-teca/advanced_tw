import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { searchByName, searchByBarcode } from "./Utils";
import state from "./AtomStates";
import { useAtom } from "jotai";

export default function CarouselNavbar1(props) {
    const [modalShow, setModalShow] = useAtom(state.modalShow);
    const [isLogin, setIsLogin] = useState(false);
    const inputValue = useRef(null);
    const [searchNames, setSearchNames] = useAtom(state.searchNames);
    const [product, setProduct] = useAtom(state.product);
    const [isLoggedIn, setisLoggedIn] = useAtom(state.isLoggedIn);
    const [user] = useAtom(state.user);
    const [showMyProfile, setShowMyProfile] = useAtom(state.showMyProfile);
    const [showDiary, setShowDiary] = useAtom(state.showDiary);

    const handleLoginClick = () => {
        setModalShow(true);
        setIsLogin(true);
    };

    const handleSignUpClick = () => {
        setModalShow(true);
        setIsLogin(false);
    };

    const handleModalButton = () => {
        setModalShow(false);
        setIsLogin(false);
    };

    const handleDiaryClick = (e) => {
        const today = new Date().toISOString().substring(0, 10);

        switch (e.target.innerText) {
            case "Diary":
                if (!user) {
                    alert("Please register first!");
                } else if (!user.days || !user.days[today]) {
                    alert("No food added today");
                } else if (!user.informations) {
                    alert("You have to calculate your calories first, go to My profile");
                } else {
                    setShowDiary(true);
                    e.target.innerText = "Back";
                }
                break;
            case "Back":
                setShowDiary(false);
                e.target.innerText = "Diary";
                break;
        }
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
                                <div>
                                    <Form.Control
                                        ref={inputValue}
                                        list="search-bar--datalist"
                                        type="search"
                                        placeholder="products search"
                                        style={{ width: "15vw" ,marginLeft:"-8vw"}}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                searchByName(
                                                    inputValue.current.value,
                                                    setSearchNames,
                                                    setProduct
                                                );
                                            }
                                        }}
                                        />
                                    </div>

                            </div>
                        </Form>
                    }
                </Container>
            </Navbar>

            <datalist id="search-bar--datalist">
                {/* {pokemonCollection?.map((pokemon, index) => (
          <option value={pokemon} key={index}></option>
        ))} */}

                <option value={"banana"} key={1}></option>
                <option value={"chocolate"} key={2}></option>
                <option value={"cereals"} key={3}></option>
            </datalist>

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
