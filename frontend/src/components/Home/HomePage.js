import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './home.css'
import '../../main.css'
import SearchJobs from "../SearchJobs/SearchJobs";
import {Card} from "react-bootstrap";

export default function HomePage() {
    return(
        <>
            <div className="main-content">
                <Header/>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Welkom bij Equal Works!</Card.Title>
                        <Card.Img variant="top" src={require("./equal work.jpeg")}
                                  className={"home-img"}></Card.Img>
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
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/><br/><br/>
                <div className="home-search">
                    <SearchJobs/>
                </div>
                <Footer/>
            </div>
        </>

    )
}