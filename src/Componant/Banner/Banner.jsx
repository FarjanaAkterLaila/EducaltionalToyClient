import { Button, Carousel } from "react-bootstrap";


const Banner = () => {
    return (
        <div className="">
            <Carousel className="carousel slide bg-primary bg-opacity-10 p-5">

                <Carousel.Item>

                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src="https://i.ibb.co/SK85T51/pexels-mart-production-7334320.jpg" className="d-block w-100 " alt="..." />
                        </div>
                        <div className="col-12 col-md-6  my-auto ">


                            <div>
                                <h1>Vocabulary Building
                                </h1>
                                <p>Expand your vocabulary with Language Legends! These vibrant flashcards make learning new words exciting and interactive.
                                </p>
                                <Button variant="btn btn-outline-info">View</Button>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src="https://i.ibb.co/p2yBFt1/pexels-polina-tankilevitch-6743164.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="col-12 col-md-6 my-auto">
                            <div>
                                <h1>Counting and Number Recognition Game
                                </h1>
                                <p>This interactive game challenges children to count, recognize numbers, and solve simple equations through fun and engaging activities.
                                </p>
                                <Button variant="btn btn-outline-info">View</Button>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>


                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src="https://i.ibb.co/41m3YY9/pexels-yan-krukau-8612921.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="col-12 col-md-6 my-auto">
                            <div>
                                <h1>Creative Construction Set
                                </h1>
                                <p>Unleash your imagination with Building Blocks Bonanza! This versatile construction set allows children to build, stack, and create to their heart's content.
                                </p>
                                <Button variant="btn btn-outline-info">View</Button>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;