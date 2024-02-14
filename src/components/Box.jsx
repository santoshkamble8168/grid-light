import React from "react";

const Box = ({ isFilled, onClick, deactivates }) => {
	return <button type="button" onClick={onClick} className={isFilled ? "box box-filled" : "box"} disabled={isFilled || deactivates} />;
};

export default Box;
