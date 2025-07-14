const Polaroid = ({img, p, rotate}) => {
    return (
            <div className={rotate? "polaroid tilt": "polaroid"}>
                <div className="tape-div">
                    <div className="tape1"></div>
                    <div className="tape2"></div>
                </div>
                <img src={img} />
                <p>{p}</p>
            </div>
    )
}

export default Polaroid;