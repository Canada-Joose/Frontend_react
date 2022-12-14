import './AboutMe.css';
// import AMDetails from './AMDetails';
export default function AboutMe() {

    function AMDetails(props) {
        return (
            <div className='AboutMe body'>
                <span> {props.type} </span>
                <span className="white"> .. </span>
                <span> {props.value} </span>
            </div>
        );
    }


    return (
        <>
            <p className="AboutMe title"> ABOUT ME </p>
            <hr className='AboutMe divider small'></hr>
            <div className="AboutMe item_layout">
                <img src="self.jpeg" className='AboutMe picture' />
                <div className='AboutMe details'>
                    <AMDetails type={"π€"} value={"μ£Όμ₯κ·"} />
                    <AMDetails type={"π"} value={"1996.05.26"} />
                    <AMDetails type={"π"} value={"010-2658-2348"} />
                    <AMDetails type={"βοΈ"} value={"ju.jk.psych@gmail.com"} />
                </div>
            </div>

        </>
    );
}