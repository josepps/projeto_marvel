import styled from "styled-components";

export const BannerHome = styled.section`
    width: 100vw;
    height: 100vh;
    background: #050913;
    position: relative;

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
    }

    &:before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, #050913 10%, rgba(5, 9, 19, 0.99) 5%, rgba(5, 9, 19, 0.8), rgba(5, 9, 19, 0.5), rgba(0, 0, 0, 0.0));
    }

    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .logo {
            color: #fff;
            font-size: 2rem;
            font-family:'Bebas Neue';
            padding: 1px 2px 0 2px;
            height: 30px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease-in;

            &:hover {
                background: #ff0000;
            }
        }

        nav {
            width: 35%;
        
            ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            list-style-type: none;
            width: 100%;

                a {
                    color: #fff;
                    font-size: 0.8rem;
                    font-weight: 300;
                    transition: all 0.3s ease-in;
                    position: relative;

                &:before{
                    content: "";
                    position: absolute;
                    width: 0%;
                    height: 1.5px;
                    bottom: -2px;
                    left: 0;
                    background-color: #ff0000;
                    transition: all 0.5s ease-in-out;
                }

                &:hover {
                    font-size: 1rem;
                
                    &:before {
                        width: 100%;
                    }
                }

                }
            }
        }

        .inputPesquisa {
            width: 17%;
            height: 50%;
            position: relative;

            input {
                width: 0;
                height: 100%;
                background: rgba(5, 9, 19, 0.3);
                visibility: hidden;
                outline: 0;
                border: none;
                border-radius: 5px;
                padding-left: 5%;
                color: #fff;
                transition: all 0.5s ease-in;
                
                &::placeholder {
                    color: rgba(5, 9, 19, 0.5);
                    transition: all 0.5s ease-in 0.3s;
                }
            }

            button {
                position: absolute;
                right: 85%;
                top: 5%;
                height: 100%;
                font-size: 1.4rem;
                background: none;
                border: none;
                color: #fff;
                cursor: pointer;
                transition: all 0.5s ease-in;
            }

            &:hover {
                input {
                    width: 100%;
                    visibility: visible;

                    &::placeholder {
                        color: #fff;
                    }
                }

                button {
                    right: 3%;
                    color: #ff0000;
                }
            }

            input:valid{
                width: 100%;
                visibility: visible;
            }

            input:valid + button {
                right: 3%;
                color: #ff0000;
            }
        }
    }
`;