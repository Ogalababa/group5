import Header from "../Header/Header";
import {Button, Card} from "react-bootstrap";
import './aboutUs.css';
import '../../main.css'
import Footer from "../Footer/Footer";
export default function AboutUsPage() {
    return(
        <>
            <div className="main-content">
                <Header/>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Over ons</Card.Title>
                        <Card.Img variant="top" src={require("./equal.jpg")}
                                  className={"about-us-img"}></Card.Img>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sem dapibus eros
                            laoreet placerat sed sed leo. Donec augue lorem, viverra nec malesuada a, suscipit et ante.
                            Donec velit magna, eleifend non ante vel, convallis lacinia odio. Cras massa metus, lacinia
                            id tincidunt quis, accumsan et ex. Interdum et malesuada fames ac ante ipsum primis in
                            faucibus. Aliquam erat volutpat. Donec fringilla vitae ligula at euismod. Nullam faucibus
                            enim quis est varius pretium. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Aenean cursus magna non faucibus porta. Suspendisse a
                            dolor porta, volutpat ligula vel, semper arcu. Sed lacus felis, fringilla vitae leo sed,
                            euismod ultricies ante. Donec dignissim quis ipsum consectetur ultrices. Maecenas nec
                            laoreet odio.

                            Nam condimentum rutrum metus, pretium aliquet elit feugiat vel. Donec nisi risus, faucibus
                            sed ornare non, consequat non eros. Praesent urna turpis, placerat vitae luctus at, eleifend
                            sit amet enim. Ut congue tristique est, in elementum est ultricies in. Suspendisse et libero
                            et nibh maximus scelerisque. Duis egestas convallis arcu, sed pellentesque turpis volutpat
                            nec. Nunc ut imperdiet arcu, id aliquet augue. Integer mollis lectus in molestie semper.

                            Nunc euismod tortor malesuada enim suscipit, eu ullamcorper ex malesuada. Maecenas commodo
                            fringilla metus, eget tempor lectus pellentesque lobortis. Sed a tempor sem. Nunc varius,
                            nisl sit amet vestibulum tincidunt, purus arcu feugiat risus, eu egestas massa magna vitae
                            orci. Maecenas consequat urna et velit ultrices, ac mollis lacus lobortis. Phasellus mattis
                            vestibulum neque, a suscipit neque ultricies eu. Maecenas tincidunt dui quam, ut eleifend
                            risus interdum sit amet.

                            Integer luctus magna ac mauris tincidunt laoreet. Quisque vitae scelerisque ligula. Maecenas
                            porta dolor eu diam condimentum ornare. Sed ipsum tortor, posuere ac ligula non, ullamcorper
                            sollicitudin quam. Morbi dolor lectus, sodales nec euismod quis, congue id sapien. Aenean
                            blandit faucibus purus, non eleifend dui congue nec. Donec et cursus odio. Aliquam
                            efficitur, eros ac tristique efficitur, dui nisi bibendum sem, sit amet condimentum lacus
                            libero nec diam. Donec porta tellus ut pellentesque semper. Nam non ligula at ex dapibus
                            posuere ut ac eros. Maecenas elementum lectus eu augue dignissim ultrices. Morbi placerat
                            urna nec tortor facilisis, ac venenatis orci gravida. Praesent sit amet nibh ullamcorper
                            nisi consequat blandit. Sed posuere facilisis congue. Nullam vitae lorem at nunc tincidunt
                            sollicitudin non sed quam. Etiam a nisl id velit rutrum vulputate.

                            Praesent elementum vitae sapien vel laoreet. Vivamus massa risus, convallis a maximus sed,
                            eleifend vel nunc. Aenean sit amet interdum velit. Duis ornare volutpat dui at posuere.
                            Vestibulum a odio eget velit facilisis ultrices nec id mi. Ut ac ligula nec erat ultrices
                            convallis sit amet sit amet eros. Cras sit amet dictum elit. Suspendisse luctus volutpat
                            dolor, quis cursus felis auctor nec. Quisque bibendum sem ac ligula scelerisque viverra.
                            Aliquam sollicitudin leo at ornare vestibulum. Phasellus et dapibus eros. Nullam porta sit
                            amet augue vitae tempor. Donec congue, quam id finibus accumsan, leo augue sollicitudin
                            nibh, a semper leo quam sed magna.
                        </Card.Text>
                        <Button variant="outline-secondary" href={"/contact"}>Contact</Button>
                    </Card.Body>
                </Card>
                <Footer/>
            </div>
        </>

    )
}