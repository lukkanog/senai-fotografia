import bg from "../../assets/img/section-background.jpg"
import mobileBg from "../../assets/img/mobile-section-background.jpg";
import pinkBg from "../../assets/img/pink-lettered-background.jpg";


import Section from "./styles";


export function IntroContainer(props) {
    return (
        <Section bg={bg} mobileBg={mobileBg} id={props.id}>
            {props.children}
        </Section>

    )
}

export function AboutContainer(props) {
    return (
        <Section bg={pinkBg} id={props.id}>
            {props.children}
        </Section>

    )
}