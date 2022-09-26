import './skills.css'


export default function Skills() {
    return (
        <div className="Skills background2">
            <p className="Skills title"> Skills </p>
            <hr className='Skills divider small'></hr>
            <div className="container">
                <div className="imgbox">
                    <p>Research Programming / Analytical </p>
                    <img src="researchtool.png" className="toolimg" alt="tool for research" />
                </div>
                <div className="imgbox">
                    <p className="blue">Frontend</p>
                    <img src="FEtool.png" className="toolimg" alt="tool for Frontend" />
                </div>
                <div className="imgbox">
                    <p>Backend</p>
                    <img src="betool.png" className="toolimg" alt="tool for Backend" />
                </div>
                <div className="imgbox">
                    <p>Version Control</p>
                    <img src="vctool.png" className="toolimg" alt="tool for version control" />
                </div>
                <div className="imgbox">
                    <p>Communication</p>
                    <img src="commtool.png" className="toolimg" alt="tool for communication" />
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}