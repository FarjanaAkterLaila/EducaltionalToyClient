import './Gallery.css'
const Gallery = () => {
    return (
        <div>
            <h2 className="text-center pt-5">Toys Gallery</h2>
            <br /><br />
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/Qk1CDB7/pexels-mikhail-nilov-8923952.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2 className='text-center'>Toys Store</h2>

                            </div>
                        </div>

                    </div>


                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/Z8RhztP/pexels-pavel-danilyuk-8763137.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Wooden Montessori Math Toy</h2>

                            </div>
                        </div>

                    </div>




                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/GMXPcPF/Montessori-Games-Baby-Wooden-Toys-3-D-Wooden-Puzzles-For-Babies-Kids-Learning-Toys-Educational-Toys.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Montessori</h2>

                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/hK43VpJ/istockphoto-669922316-1024x1024.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Math toy</h2>

                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/JnQbPMZ/240-F-245067800-jb3-Yyp25-WJ5-C8-Sim-LVz-Ae0-Pwgq-Oj-WOC6.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Language toy</h2>

                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffects">
                            <img src="https://i.ibb.co/x5k1942/240-F-585935744-Gum4-U3-Pco-GALN9n-JQ8-TYDz-VXg-M4-GOA3t.jpg" height="300px" width="100%" alt="images" />
                            <div className="overlay">
                                <h2>Engineering toy</h2>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Gallery;