import {Link} from "react-router-dom";
import {useEffect} from "react";

import {useLocation} from "react-router-dom";

export default function Main() {

    const hash = useLocation();
    useEffect(() => {
        if (hash.hash === '#about') {
            const element = document.getElementById('about');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [hash]);


    console.log(hash)


    return (<main>

        <div className="herosection">
            <div><h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterraneran restaurant, <br/> focused on traditional recipes served with a
                    modern twist.</p>
                <Link to={"/Reservations"}>
                    <button className={"yellowbutton"}>Reserve a table</button>
                </Link>
            </div>

            <div>
                <img id={"heroimg"} src={"./restauranfood.jpg"} alt={"food"} height={"450vh"}/>
            </div>

        </div>

        <div className={"highlits"}>
            <div className={"specials"}>
                <h1>This week's specials</h1>

                <div>
                    <Link to={"/Menu"}>
                        <button className={"yellowbutton"}>Online menu</button>
                    </Link>
                </div>
            </div>


            <div className={"cards"}>
                <div className={"card"}>
                    <img src={"./greek_salad.jpg"} alt={"greek salad"} className={"cardimg"}/>
                    <div className={"carddescription"}><h3>Greek Salad</h3>
                        <p>$12.99</p>
                        <p>Crisp veggies, feta, and olives in a light olive oil dressing.</p>
                        <Link to={"/Order"}><button className={"blackbutton"}>order a delivery</button></Link>
                    </div>
                </div>

                <div className={"card"}>
                    <img src={"./lemon_dessert.png"} alt={"greek salad"} className={"cardimg"}/>
                    <div className={"carddescription"}><h3>Lemon dessert</h3>
                        <p>$5.99</p>
                        <p>A delightful blend of tangy lemon and sweet, fluffy goodness.</p>
                        <Link to={"/Order"}><button className={"blackbutton"}>order a delivery</button></Link>
                    </div>
                </div>

                <div className={"card"}>
                    <img src={"./bruschetta.png"} alt={"bruschetta"} className={"cardimg"}/>
                    <div className={"carddescription"}>
                        <h3>Bruchetta</h3>
                        <p>$5.00</p>
                        <p>Toasted bread with fresh tomatoes, garlic, basil, and olive oil.</p>
                        <Link to={"/Order"}><button className={"blackbutton"}>order a delivery</button></Link>
                    </div>
                </div>


                {/*<div className={"card"}>*/}
                {/*    <div className={"cardimg"}>*/}
                {/*        <img src={"./greek_salad.jpg"} alt={"greek salad"} height={"150vh"}/>*/}
                {/*    </div>*/}
                {/*    <div className={"cardbody"}>*/}
                {/*        <div className={"cardtitle"}>*/}
                {/*            <h3>item 1</h3>*/}
                {/*            <h3>$12.99</h3>*/}
                {/*        </div>*/}
                {/*        <div className={"carddescription"}>*/}
                {/*            <p>loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum</p>*/}
                {/*        </div>*/}


                {/*        <button className={"orderbutton"}>order a delivery</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={"card"}>*/}
                {/*    <div className={"cardimg"}>*/}
                {/*        <img src={"./bruchetta.svg"} alt={"bruschetta"} height={"150vh"}/>*/}
                {/*    </div>*/}
                {/*    <div className={"cardbody"}>*/}
                {/*        <div className={"cardtitle"}>*/}
                {/*            <h3>item 1</h3>*/}
                {/*            <h3>$12.99</h3>*/}
                {/*        </div>*/}
                {/*        <p>loremipsumloremipsumloremipsum</p>*/}
                {/*        <button className={"orderbutton"}>order a delivery</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={"card"}>*/}
                {/*    <div className={"cardimg"}>*/}
                {/*        <img src={"./lemon_dessert.jpg"} alt={"lemon dessert"} height={"150vh"}/>*/}
                {/*    </div>*/}
                {/*    <div className={"cardbody"}>*/}
                {/*        <div className={"cardtitle"}>*/}
                {/*            <h3>item 1</h3>*/}
                {/*            <h3>$12.99</h3>*/}
                {/*        </div>*/}
                {/*        <p>loremipsumloremipsumloremipsum</p>*/}
                {/*        <button className={"orderbutton"}>order a delivery</button>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>

        </div>


    </main>)
}