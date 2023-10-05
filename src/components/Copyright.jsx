import react from 'react';

function Copyright() {
    let year = new Date().getFullYear();

    return (
        <div id='copyright' style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            fontSize:"16px",
            width:"100%",
            height: "20%",
            backgroundColor: "rgb(51, 51, 51)",
            marginTop: "25px"
        }}>
            <p>Copyright © {year} All Rights Reserved Md Sohail Ansari</p>
        </div>
    );
}

export default Copyright;