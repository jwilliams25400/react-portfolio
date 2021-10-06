import React from "React";

// TODO
/// need ot make css for styling 

const home= () => {
    return (
        <div id="home" className="homePage">
            <div classname="homeIntro">

                <Typed 
                className="typed-text"
                string={["Welcome! <br> I'm Jemel, <br> a Full stack Developer. <br> click to links to learn more about me and my journey"]}
                typeSpeed={50}
                backspeed={60}
                loop
                />

            </div>


        </div>
    )
}

