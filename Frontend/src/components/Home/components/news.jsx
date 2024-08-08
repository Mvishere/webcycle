import react from "react";

export default function News(props) {
    return (
        <div className="news">
            <div className="newsimage" id={props.id}>
            </div>
            <div className="newsinfo">
                {props.info}
                <br />
                <div className="readmorebtn">
                    <a href={props.link}>Read More</a>
                </div>
            </div>
        </div>
    );
}