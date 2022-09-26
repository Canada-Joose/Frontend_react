import "./Experiences.css"

export default function Experiences() {

    // function researchDetails(props) {
    //     return (
    //         <div>
    //             <p> {props.title} </p>
    //             <p> {props.field} </p>
    //             <p> {props.author} </p>
    //             <p> {props.content} </p>
    //         </div>
    //     );
    // };

    // function webDevDetails(props) {
    //     return (
    //         <div>
    //             <p> {props.name} </p>
    //             <p> {props.when} </p>
    //             <p> {props.role} </p>
    //             <p> {props.content} </p>
    //         </div>
    //     );
    // }


    return (
        <div className="Experiences background4">
            <p className="Experiences title"> Experiences </p>
            <hr className='Experiences divider small'></hr>
            <div className="whiteBG">
                <p className="BGtitle">Research (1)</p>
                <div className="insideBG">
                    <img src="research1.png" className="ExpPics Paper" alt="paper example" />
                    <div className="insideBGright">
                        {/* <researchDetails title={"The Modulation of Value-Driven Attentional Capture by Exploration for Reward Information"} field={"Cognitive Psychology, Attention, Information Processing"} author={"제 1 저자"} content={"dkssud"} />
                         */}
                    </div>
                </div>
            </div>

            <div className="whiteBG">
                <p className="BGtitle">Research (2)</p>
                <div className="insideBG">
                    <img src="research2.png" className="ExpPics Screen" alt="experiment example" />
                    <div className="insideBGright">
                        <researchDetails title={"Visual Complexity of Head-Up Display in Automobiles Modulates Attentional Tunneling"} field={"Human-Computer Interaction, User Experience, Human Factors"} author={"제 1 저자 (공동)"} content={"dkssud"} />
                    </div>
                </div>

            </div>

            <div className="whiteBG">
                <p className="BGtitle">Web Development (1)</p>
                <div className="insideBG">
                    <img src="kudoc.png" className="ExpPics Screen" alt="kudoc" />
                    <div className="insideBGright">
                        <webDevDetails name={"king"} />
                    </div>
                </div>
            </div>

            <div className="whiteBG">
                <p className="BGtitle">Web Development (2)</p>
                <div className="insideBG">
                    <img src="room.png" className="ExpPics Screen" alt="room" />
                    <div className="insideBGright">

                    </div>
                </div>
            </div>


            <div className="whiteBG">
                <p className="BGtitle">Web Development (3)</p>
                <div className="insideBG">
                    <img src="cat.png" className="ExpPics Screen" alt="catneighbor" />
                    <div className="insideBGright">

                    </div>
                </div>
            </div>
        </div>

    );
}