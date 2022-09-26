import './Education.css'

export default function Education() {

    function EduDetails(props) {
        return (
            <div className="profile">
                <p> {props.degree} </p>
                <p> {props.school} </p>
                <p> {props.startDate} - {props.endDate} </p>
                <p> {props.major} {props.doubleMajor} </p>
            </div>
        );
    }

    return (
        <div className="Education background1">
            <p className="Education title"> Education </p>
            <hr className='Education divider small'></hr>
            <div className='Education item_layout1'>
                <div className="Education group">
                    <img src="kulogo.svg" className="Education logo" />
                    <EduDetails degree={"대학원 석사과정"} school={"🏫 고려대학교"} startDate={"🗓 2021.03"} endDate={"Present"} major={"행동인지 신경과학 전공"} doubleMajor={""} />
                </div>
                <div className="Education rowgroup">
                    <div className="Education rowgroup group">
                        <img src="kulogo.svg" className="Education rowgroup logo" />
                        <EduDetails degree={"학부 과정"} school={"🏫 고려대학교"} startDate={"🗓 2015.03"} endDate={"2021.02"} major={"심리학부"} doubleMajor={"& 경영학과 (이중전공)"} />
                    </div>
                    <div className="Education rowgroup group">
                        <img src="uoft.png" className="Education rowgroup logo" />
                        <EduDetails degree={"학부 교환학생"} startDate={"🗓 2019.08"} endDate={"2020.01"} school={"🏫 University of Toronto"} major={"Department of Psychology"} doubleMajor={""} />
                    </div>
                </div>
            </div>
        </div>
    );
}