import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { searchByName, searchByBarcode } from "./Utils";
import state from "./AtomStates";
import { useAtom } from "jotai";

export default function CarouselNavbar1(props) {
    const inputValue = useRef(null);
    const [product, setProduct] = useAtom(state.product);
    const [searchNames, setSearchNames] = useAtom(state.searchNames);


    return (
        <>
            <Navbar
                className="navbar"
                variant="dark"
                expand="lg"
                style={{height: "40px", width: "0", border: "none"}}
            >
                <Container>
                        <Form>
                            <div>
                                <div>
                                    <Form.Control
                                        ref={inputValue}
                                        list="search-bar--datalist"
                                        type="search"
                                        placeholder="products search"
                                        style={{ width: "15vw", marginLeft:"-8vw"}}
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
                </Container>
            </Navbar>

            <datalist id="search-bar--datalist">
                <option value={"banana"} key={1}></option>
                <option value={"chocolate"} key={2}></option>
                <option value={"cereals"} key={3}></option>
            </datalist>

        </>
    );
}
