import styled from "styled-components";

export const BannerHome = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;

    a {
        color: #fff;
        text-decoration: none;
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
        z-index: 10;

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

    main {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;

        &:before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, #050913 10%, rgba(5, 9, 19, 0.99) 5%, rgba(5, 9, 19, 0.8), rgba(5, 9, 19, 0.5), rgba(0, 0, 0, 0.0));
        }

        .containerDescricaoMain {
            position: absolute;
            top: 35%;
            left: 10%;
            width: 30%;
            height: 25%;

            h1 {
                color: #fff;
                font-size: 2rem;
            }

            p {
                color: rgba(255, 0, 0, 0.9);
                padding: 1% 0 1% 5%;
                max-width: 100%;
                max-height: 65%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 3% 0 8% 0;
            }

            a {
                margin: auto;
                padding: 3% 20%;
                border: 1.5px solid #fff;
                transition: all 0.8s ease;
                font-weight: 600;
                position: relative;

                &:before {
                    content: "";
                    position: absolute;
                    top: -1.5px;
                    left: -1.5px;
                    width: 5px;
                    height: 1.5px;
                    background: #ff0000;
                    animation: efeito 5s ease-in-out infinite;
                    visibility: hidden;
                }

                &:after {
                    content: "";
                    position: absolute;
                    top: -1.5px;
                    left: -1.5px;
                    width: 5px;
                    height: 1.5px;
                    background: #ff0000;
                    animation: efeito 5s ease-in-out 2.5s infinite;
                    visibility: hidden;
                }

                @keyframes efeito {
                    0% {
                        top: -1.5px;
                        left: -1.5px;
                        width: 5px;
                        height: 1.5px;
                        visibility: visible;
                    }
                    35% {
                        top: -1.5px;
                        left: calc(100% - 3.5px);
                        width: 5px;
                        height: 1.5px;
                    }
                    36% {
                        top: -1.5px;
                        left: 100%;
                        width: 1.5px;
                        height: 5px;
                    }
                    50% {
                        top: calc(100% - 3.5px);
                        left: 100%;
                        width: 1.5px;
                        height: 5px;
                    }
                    51% {
                        top: 100%;
                        left: calc(100% - 3.5px);
                        width: 5px;
                        height: 1.5px;
                    }
                    86% {
                        top: 100%;
                        left: -1.5px;
                        width: 5px;
                        height: 1.5px;
                    }
                    87% {
                        top: calc(100% - 3.5px);
                        left: -1.5px;
                        width: 1.5%;
                        height: 5px;
                    }
                    99% {
                        top: -1.5px;
                        left: -1.5px;
                        width: 1.5%;
                        height: 5px;
                    }
                    100% {
                        top: -1.5px;
                        left: -1.5px;
                        width: 5px;
                        height: 1.5px;
                    }
                }

                &:hover {
                    border: 1.5px solid #ff0000;
                    color: #ff0000;
                    background: #ebe5e5;

                    &:before,  &:after {
                        background: #fff;
                    }
                }
            }
        }

        .slides {
            display: flex;
            width: 500%;
            height: 100%;

            input {
                display: none;
            }

            .slide {
                width: 20%;
                transition: .6s;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            #slide1:checked ~ .s1 {
                margin-left: 0;
            }

            #slide2:checked ~ .s1 {
                margin-left: -20%;
            }

            #slide3:checked ~ .s1 {
                margin-left: -40%;
            }

            #slide4:checked ~ .s1 {
                margin-left: -60%;
            }

            #slide5:checked ~ .s1 {
                margin-left: -80%;
            }

            .containerMarcadoresNavigation {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%);
                display: flex;

                div {
                    width: 240px;
                    height: 150px;
                    border: 1px solid #050913;
                    margin: 6px;
                    border-radius: 5px;
                    transition: .4s;

                    img {
                        width: 100%;
                        height: 100%;
                        opacity: 0.2;
                    }
                }
            }

            #slide1:checked ~ .containerMarcadoresNavigation .marcadorNavigation1 {
                img {
                        opacity: 1;
                }
            }
            #slide2:checked ~ .containerMarcadoresNavigation .marcadorNavigation2 {
                img {
                        opacity: 1;
                }
            }
            #slide3:checked ~ .containerMarcadoresNavigation .marcadorNavigation3 {
                img {
                        opacity: 1;
                }
            }
            #slide4:checked ~ .containerMarcadoresNavigation .marcadorNavigation4 {
                img {
                        opacity: 1;
                }
            }
            #slide5:checked ~ .containerMarcadoresNavigation .marcadorNavigation5 {
                img {
                        opacity: 1;
                }
            }
        }
    
        .navigation {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translate(-50%);
            display: flex;

            .bar {
                width: 240px;
                height: 150px;
                margin: 6px;
                border-radius: 5px;
                cursor: pointer;
                transition: .4s;

                &:hover {
                    border: 1px solid #ff0000;
                }
            }
        }
    }
`;

export const SectionPersonagensPorQuadrinhos = styled.section`
    width: 100vw;
    height: auto;
    margin-bottom: 5%;

    h2 {
        margin: 5%;
        color: #fff;
        font-size: 2rem;
    }

    .containerImagensQuadrinho {
        width: 90%;
        height: auto;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;

        .imagemQuadrinho {
            width: 15%;
            margin: 5px 10px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            h3 {
                position: absolute;
                bottom: 5%;
                left: 5%;
                color: #fff;
                font-weight: 300;
                background: rgba(0, 0, 0, 0.6);
                padding: 1% 4%;
                box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.5);
            }
        }
    }
`;

export const SectionCriadoresQuadrinhos = styled.section`
    width: 100vw;
    height: auto;
    margin-bottom: 5%;

    h2 {
        width: 90%;
        height: 10%;
        margin: 2% auto;
        display: flex;
        align-items: center;
        padding-left: 3%;
        color: #fff;
        font-size: 2rem;
        color: #fff;
        font-size: 2rem;
    }

    .containeterContainerEscritores {
        width: 90%;
        height: auto;
        margin: 1% auto;

        .containerEscritores {
            width: 100%;
            height: 20vh;
            display: flex;

            .imgEscritores {
                width: 20%;
                height: 100%;
                border-radius: 5px;
            }

            .containerInfoEscritores {
                width: 80%;
                height: 100%;
                border: 1.5px solid #2A475E;
                margin-left: 10px;
                display: flex;
                border-radius: 5px;

                .infoescritores {
                    width: 25%;
                    height: 100%;
                    color: #fff;

                    h3 {
                        padding: 4% 0% 5% 8%;
                    }

                    p {
                        padding: 2% 0% 2% 10%;
                    }
                }

                .imgsObrasEscritores {
                    width: 75%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;

                    img {
                        width: 30%;
                        height: 80%;
                        background: red;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
`;